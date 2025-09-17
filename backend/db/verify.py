import os
from dotenv import load_dotenv
from neo4j import GraphDatabase

# --- Configuration ---
load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), '.env'))

NEO4J_URI = os.getenv("NEO4J_URI")
NEO4J_USERNAME = os.getenv("NEO4J_USERNAME")
NEO4J_PASSWORD = os.getenv("NEO4J_PASSWORD")

def verify_data(driver):
    with driver.session() as session:
        # Count Roles
        roles_count = session.run('MATCH (r:Role) RETURN count(r) AS count').single()['count']
        print(f'Number of Role nodes: {roles_count}')

        # Count Courses
        courses_count = session.run('MATCH (c:Course) RETURN count(c) AS count').single()['count']
        print(f'Number of Course nodes: {courses_count}')

        # Count Skills
        skills_count = session.run('MATCH (s:Skill) RETURN count(s) AS count').single()['count']
        print(f'Number of Skill nodes: {skills_count}')

        # Count REQUIRES relationships
        requires_count = session.run('MATCH ()-[:REQUIRES]->() RETURN count(*) AS count').single()['count']
        print(f'Number of REQUIRES relationships: {requires_count}')

        # Count TEACHES relationships
        teaches_count = session.run('MATCH ()-[:TEACHES]->() RETURN count(*) AS count').single()['count']
        print(f'Number of TEACHES relationships: {teaches_count}')

if __name__ == '__main__':
    print('Verifying data...')
    driver = GraphDatabase.driver(NEO4J_URI, auth=(NEO4J_USERNAME, NEO4J_PASSWORD))
    verify_data(driver)
    driver.close()
    print('Verification complete.')