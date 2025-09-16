# CREATE RELATIONSHIPS BETWEEN NODES
# This ensures every node has meaningful connections

# Role-Skill Relationships
role_skill_relations = []

# Technology & Software Role-Skill mappings
tech_role_skills = {
    "Software Engineer": ["Python Programming", "Java Programming", "JavaScript", "Git", "SQL"],
    "Data Scientist": ["Python Programming", "Machine Learning", "Statistical Analysis", "SQL", "Data Analysis"],
    "AI/ML Engineer": ["Machine Learning", "Deep Learning", "Python Programming", "Statistical Analysis"],
    "Cloud Architect": ["Cloud Computing", "Docker", "Kubernetes", "Python Programming"],
    "Cybersecurity Specialist": ["Network Security", "Risk Assessment", "Ethical Conduct"],
    "DevOps Engineer": ["Docker", "Kubernetes", "Git", "Cloud Computing"],
    "Full Stack Developer": ["JavaScript", "React.js", "Node.js", "SQL", "Git"],
    "Mobile App Developer": ["Java Programming", "JavaScript", "React.js"],
    "UI/UX Designer": ["Graphic Design", "Creative Writing", "Adobe Creative Suite"],
    "Database Administrator": ["SQL", "Data Analysis", "System Administration"]
}

# Healthcare Role-Skill mappings
healthcare_role_skills = {
    "Doctor": ["Medical Diagnosis", "Patient Care", "Medical Documentation", "Healthcare Ethics"],
    "Surgeon": ["Medical Diagnosis", "Patient Care", "Emergency Response", "Healthcare Ethics"],
    "Pharmacist": ["Pharmacology", "Patient Care", "Medical Documentation"],
    "Nurse": ["Patient Care", "Medical Equipment Operation", "Emergency Response", "Healthcare Ethics"],
    "Medical Laboratory Technician": ["Laboratory Analysis", "Medical Equipment Operation", "Medical Documentation"],
    "Physiotherapist": ["Patient Care", "Medical Equipment Operation", "Healthcare Ethics"],
    "Clinical Research Associate": ["Clinical Research", "Medical Documentation", "Data Analysis"],
    "Medical Representative": ["Communication Skills", "Customer Service", "Sales Techniques"],
    "Hospital Administrator": ["Project Management", "Leadership", "Healthcare Ethics"],
    "Biomedical Engineer": ["Medical Equipment Operation", "Technical Analysis", "Project Management"]
}

# Banking Role-Skill mappings
banking_role_skills = {
    "Bank Manager": ["Financial Analysis", "Customer Relationship Management", "Leadership", "Risk Assessment"],
    "Investment Banker": ["Financial Analysis", "Investment Management", "Financial Modeling", "Negotiation"],
    "Financial Analyst": ["Financial Analysis", "Investment Management", "Data Analysis", "Financial Modeling"],
    "Chartered Accountant": ["Accounting Principles", "Financial Analysis", "Taxation Knowledge", "Regulatory Compliance"],
    "Credit Analyst": ["Credit Evaluation", "Financial Analysis", "Risk Assessment"],
    "Risk Manager": ["Risk Assessment", "Financial Analysis", "Regulatory Compliance"],
    "Loan Officer": ["Credit Evaluation", "Customer Relationship Management", "Financial Analysis"],
    "Treasury Manager": ["Treasury Operations", "Financial Analysis", "Investment Management"],
    "Compliance Officer": ["Regulatory Compliance", "Legal Research", "Risk Assessment"],
    "Insurance Agent": ["Customer Service", "Sales Techniques", "Communication Skills"]
}

# Create role-skill relationships for all sectors
def create_role_skill_mappings():
    all_role_skills = {}
    
    # Technology mappings
    all_role_skills.update(tech_role_skills)
    all_role_skills.update(healthcare_role_skills)
    all_role_skills.update(banking_role_skills)
    
    # Manufacturing mappings
    manufacturing_mappings = {
        "Mechanical Engineer": ["CAD/CAM", "Technical Drawing", "Project Management", "Equipment Maintenance"],
        "Production Manager": ["Project Management", "Quality Control", "Team Management", "Process Optimization"],
        "Quality Control Engineer": ["Quality Control", "Statistical Analysis", "Technical Analysis"],
        "Industrial Engineer": ["Process Optimization", "Lean Manufacturing", "Statistical Analysis", "Project Management"],
        "Electrical Engineer": ["Technical Analysis", "Equipment Maintenance", "Safety Management"],
        "Plant Manager": ["Project Management", "Team Management", "Strategic Planning", "Safety Management"],
        "Maintenance Engineer": ["Equipment Maintenance", "Technical Analysis", "Safety Management"],
        "Design Engineer": ["CAD/CAM", "Technical Drawing", "Creative Design"],
        "Safety Officer": ["Safety Management", "Risk Assessment", "Regulatory Compliance"],
        "Supply Chain Manager": ["Supply Chain Management", "Project Management", "Negotiation"]
    }
    
    # Education mappings
    education_mappings = {
        "Teacher": ["Classroom Management", "Curriculum Development", "Communication Skills", "Educational Assessment"],
        "Professor": ["Academic Research", "Curriculum Development", "Public Speaking", "Critical Thinking"],
        "Principal": ["Leadership", "Team Management", "Strategic Planning", "Educational Administration"],
        "Training Manager": ["Training Delivery", "Curriculum Development", "Team Management"],
        "Curriculum Developer": ["Curriculum Development", "Instructional Design", "Educational Psychology"],
        "Educational Counselor": ["Student Counseling", "Communication Skills", "Emotional Intelligence"],
        "Instructional Designer": ["Instructional Design", "Educational Technology", "Creative Design"],
        "Academic Administrator": ["Project Management", "Leadership", "Regulatory Compliance"],
        "Research Scholar": ["Academic Research", "Critical Thinking", "Data Analysis"],
        "Online Tutor": ["Educational Technology", "Communication Skills", "Adaptability"]
    }
    
    all_role_skills.update(manufacturing_mappings)
    all_role_skills.update(education_mappings)
    
    return all_role_skills

# Generate role-skill relationships
role_skill_mappings = create_role_skill_mappings()

for role_name, skill_names in role_skill_mappings.items():
    for skill_name in skill_names:
        role_skill_relations.append({
            "role": role_name,
            "skill": skill_name,
            "relationship_type": "REQUIRES"
        })

print(f"Created {len(role_skill_relations)} role-skill relationships")

# Course-Skill Relationships
course_skill_relations = []

# Create course-skill mappings
course_skill_mappings = {
    # Technology courses
    "Bachelor of Technology - Computer Science": ["Python Programming", "Java Programming", "SQL", "Data Analysis", "Machine Learning"],
    "Master of Computer Applications": ["Java Programming", "SQL", "Software Development", "System Analysis"],
    "Data Science Certification": ["Python Programming", "Machine Learning", "Statistical Analysis", "Data Analysis"],
    "AWS Solutions Architect Certification": ["Cloud Computing", "System Architecture"],
    
    # Healthcare courses
    "Bachelor of Medicine and Bachelor of Surgery (MBBS)": ["Medical Diagnosis", "Patient Care", "Medical Documentation", "Healthcare Ethics"],
    "Bachelor of Pharmacy (B.Pharm)": ["Pharmacology", "Patient Care", "Medical Documentation"],
    "Bachelor of Science in Nursing (B.Sc Nursing)": ["Patient Care", "Medical Equipment Operation", "Healthcare Ethics"],
    
    # Business courses
    "Master of Business Administration - Finance": ["Financial Analysis", "Investment Management", "Strategic Planning", "Leadership"],
    "Chartered Accountancy": ["Accounting Principles", "Financial Analysis", "Taxation Knowledge", "Regulatory Compliance"],
    
    # Academic subjects
    "Mathematics": ["Statistical Analysis", "Critical Thinking", "Analytical Reasoning"],
    "Physics": ["Scientific Analysis", "Critical Thinking", "Technical Analysis"],
    "Chemistry": ["Laboratory Analysis", "Scientific Method", "Technical Analysis"],
    "Biology": ["Scientific Analysis", "Research Methods", "Laboratory Analysis"],
    "English Literature": ["Communication Skills", "Creative Writing", "Critical Thinking"],
    "Computer Science": ["Programming Fundamentals", "Logical Thinking", "Problem Solving"]
}

# Generate course-skill relationships
for course_name, skill_names in course_skill_mappings.items():
    for skill_name in skill_names:
        course_skill_relations.append({
            "course": course_name,
            "skill": skill_name,
            "relationship_type": "TEACHES"
        })

print(f"Created {len(course_skill_relations)} course-skill relationships")
print(f"Total relationships: {len(role_skill_relations) + len(course_skill_relations)}")