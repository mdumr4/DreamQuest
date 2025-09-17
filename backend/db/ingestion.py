import os
from dotenv import load_dotenv
from neo4j import GraphDatabase
import pandas as pd

# --- Configuration ---
load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), '.env'))

NEO4J_URI = os.getenv("NEO4J_URI")
NEO4J_USERNAME = os.getenv("NEO4J_USERNAME")
NEO4J_PASSWORD = os.getenv("NEO4J_PASSWORD")

# The script will look for the CSV files in the same directory it is run from.
DATA_DIR = os.path.dirname(__file__)
ROLES_FILE = os.path.join(DATA_DIR, 'india_career_roles.csv')
COURSES_FILE = os.path.join(DATA_DIR, 'india_career_courses.csv')
SKILLS_FILE = os.path.join(DATA_DIR, 'india_career_skills.csv')
ROLE_SKILL_FILE = os.path.join(DATA_DIR, 'role_skill_relationships.csv')
COURSE_SKILL_FILE = os.path.join(DATA_DIR, 'course_skill_relationships.csv')

def create_constraints(tx):
    """Creates unique constraints on node labels for faster lookups and data integrity."""
    print("Creating constraints...")
    tx.run("CREATE CONSTRAINT IF NOT EXISTS FOR (r:Role) REQUIRE r.name IS UNIQUE")
    tx.run("CREATE CONSTRAINT IF NOT EXISTS FOR (c:Course) REQUIRE c.name IS UNIQUE")
    tx.run("CREATE CONSTRAINT IF NOT EXISTS FOR (s:Skill) REQUIRE s.name IS UNIQUE")

def load_nodes(tx, file_path, label):
    """Loads nodes from a CSV file into the database."""
    print(f"Loading {label} nodes from {os.path.basename(file_path)}...")
    df = pd.read_csv(file_path)
    for _, row in df.iterrows():
        tx.run(f"MERGE (n:{label} {{name: $name}}) SET n += $props", name=row['name'], props=row.to_dict())

def load_relationships(tx, file_path, start_label, end_label, relationship_type):
    """Loads relationships from a CSV file into the database."""
    print(f"Loading {relationship_type} relationships from {os.path.basename(file_path)}...")
    df = pd.read_csv(file_path)
    # Get the column names from the CSV header
    start_node_col = df.columns[0]
    end_node_col = df.columns[1]
    tx.run(f"""
    UNWIND $rows AS row
    MATCH (start:{start_label} {{name: row.{start_node_col}}})
    MATCH (end:{end_label} {{name: row.{end_node_col}}})
    MERGE (start)-[:{relationship_type}]->(end)
    """, rows=df.to_dict('records'))

def main():
    """Main function to run the ingestion process."""
    try:
        driver = GraphDatabase.driver(NEO4J_URI, auth=(NEO4J_USERNAME, NEO4J_PASSWORD))
        with driver.session() as session:
            session.execute_write(create_constraints)
            # Clear the database before loading new data
            session.run("MATCH (n) DETACH DELETE n")
            print("Cleared the database.")
            session.execute_write(load_nodes, ROLES_FILE, "Role")
            session.execute_write(load_nodes, COURSES_FILE, "Course")
            session.execute_write(load_nodes, SKILLS_FILE, "Skill")
            session.execute_write(load_relationships, ROLE_SKILL_FILE, "Role", "Skill", "REQUIRES")
            session.execute_write(load_relationships, COURSE_SKILL_FILE, "Course", "Skill", "TEACHES")
        driver.close()
        print("\nData ingestion complete!")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
