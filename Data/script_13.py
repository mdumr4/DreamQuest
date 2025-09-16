# CREATE CSV FILES FOR NEO4J IMPORT

# Create DataFrames
roles_df = pd.DataFrame(roles_data)
courses_df = pd.DataFrame(courses_data)
skills_df = pd.DataFrame(skills_data)
role_skill_df = pd.DataFrame(role_skill_relations)
course_skill_df = pd.DataFrame(course_skill_relations)

# Add unique IDs for nodes
roles_df['role_id'] = range(1, len(roles_df) + 1)
courses_df['course_id'] = range(1, len(courses_df) + 1)
skills_df['skill_id'] = range(1, len(skills_df) + 1)

# Save to CSV files
roles_df.to_csv('india_career_roles.csv', index=False)
courses_df.to_csv('india_career_courses.csv', index=False)
skills_df.to_csv('india_career_skills.csv', index=False)
role_skill_df.to_csv('role_skill_relationships.csv', index=False)
course_skill_df.to_csv('course_skill_relationships.csv', index=False)

print("=== INDIA CAREER KNOWLEDGE GRAPH DATA SUMMARY ===")
print(f"\n📊 NODE COUNTS:")
print(f"• Roles: {len(roles_df)}")
print(f"• Courses: {len(courses_df)}")
print(f"• Skills: {len(skills_df)}")
print(f"• Total Nodes: {len(roles_df) + len(courses_df) + len(skills_df)}")

print(f"\n🔗 RELATIONSHIP COUNTS:")
print(f"• Role-Skill relationships: {len(role_skill_df)}")
print(f"• Course-Skill relationships: {len(course_skill_df)}")
print(f"• Total Relationships: {len(role_skill_df) + len(course_skill_df)}")

print(f"\n💼 SECTOR COVERAGE:")
sectors = [
    "Technology & Software", "Healthcare & Pharmaceuticals", "Banking & Financial Services",
    "Manufacturing & Engineering", "Education & Training", "Agriculture & Food Processing",
    "Government & Public Sector", "Retail & E-commerce", "Construction & Real Estate",
    "Media & Entertainment", "Transportation & Logistics", "Textiles & Apparel",
    "Energy & Utilities", "Telecommunications"
]
for sector in sectors:
    print(f"• {sector}")

print(f"\n📚 COURSE CATEGORIES:")
print(f"• Academic subjects (CBSE curriculum)")
print(f"• Professional degrees (BTech, MBA, MBBS, etc.)")
print(f"• Professional certifications")
print(f"• Specialized training programs")

print(f"\n🎯 SKILL CATEGORIES:")
print(f"• Technical skills")
print(f"• Professional skills")
print(f"• Industry-specific skills")
print(f"• Soft skills")

print(f"\n📄 FILES GENERATED:")
print(f"• india_career_roles.csv")
print(f"• india_career_courses.csv")
print(f"• india_career_skills.csv")
print(f"• role_skill_relationships.csv")
print(f"• course_skill_relationships.csv")

# Display sample data
print(f"\n🔍 SAMPLE ROLE DATA:")
print(roles_df[['name', 'salary', 'minimum_qualification']].head(3).to_string())

print(f"\n🔍 SAMPLE COURSE DATA:")
print(courses_df[['name']].head(3).to_string())

print(f"\n🔍 SAMPLE SKILL DATA:")
print(skills_df[['name']].head(3).to_string())