# GOVERNMENT & PUBLIC SECTOR
# Roles in Government & Public Sector
government_roles = [
    {
        "name": "IAS Officer",
        "description": "Administrative service officer responsible for policy implementation, district administration, and public service delivery. Manages government programs and ensures governance efficiency.",
        "salary": "15-50 LPA",
        "minimum_qualification": "Bachelor's degree for UPSC CSE"
    },
    {
        "name": "IPS Officer",
        "description": "Police service officer maintaining law and order, investigating crimes, and ensuring public safety. Manages police operations and implements security measures.",
        "salary": "15-45 LPA",
        "minimum_qualification": "Bachelor's degree for UPSC CSE"
    },
    {
        "name": "Bank Probationary Officer",
        "description": "Entry-level management position in public sector banks handling customer relations, loan processing, and banking operations. Undergoes comprehensive training program.",
        "salary": "8-15 LPA",
        "minimum_qualification": "Bachelor's degree for IBPS PO exam"
    },
    {
        "name": "SSC Multi Tasking Staff",
        "description": "Support staff for government offices handling clerical work, data entry, and administrative assistance. Provides essential services across various departments.",
        "salary": "2-4 LPA",
        "minimum_qualification": "10th pass for SSC MTS exam"
    },
    {
        "name": "Railway Station Master",
        "description": "Manages railway station operations, train schedules, and passenger services. Ensures safety protocols and coordinates with train operations staff.",
        "salary": "6-12 LPA",
        "minimum_qualification": "Bachelor's degree for Railway NTPC"
    },
    {
        "name": "Forest Officer",
        "description": "Manages forest resources, implements conservation programs, and protects wildlife habitats. Enforces environmental regulations and promotes sustainable forestry.",
        "salary": "8-20 LPA",
        "minimum_qualification": "Bachelor's degree in Forestry for state exams"
    },
    {
        "name": "Tax Inspector",
        "description": "Enforces tax laws, conducts audits, and ensures tax compliance by individuals and businesses. Investigates tax evasion cases and collects revenue.",
        "salary": "6-15 LPA",
        "minimum_qualification": "Bachelor's degree for SSC CGL"
    },
    {
        "name": "Postal Assistant",
        "description": "Handles postal services, mail sorting, and counter operations in post offices. Manages financial services and government scheme implementations.",
        "salary": "4-8 LPA",
        "minimum_qualification": "12th pass for Postal Circle exam"
    },
    {
        "name": "Defence Personnel",
        "description": "Serves in Indian Armed Forces protecting national security and territorial integrity. Participates in military operations, training, and peacekeeping missions.",
        "salary": "6-25 LPA",
        "minimum_qualification": "12th pass for various defence exams"
    },
    {
        "name": "Public Health Officer",
        "description": "Implements public health programs, manages healthcare initiatives, and ensures community health standards. Coordinates disease prevention and health promotion activities.",
        "salary": "7-18 LPA",
        "minimum_qualification": "MBBS or Master's in Public Health"
    }
]

# Courses in Government & Public Sector
government_courses = [
    {
        "name": "Bachelor of Arts in Political Science",
        "description": "Undergraduate program covering political theory, public administration, international relations, and governance systems for civil services preparation."
    },
    {
        "name": "Master of Public Administration",
        "description": "Graduate program focusing on public policy, governance, administrative law, and management of public sector organizations."
    },
    {
        "name": "Bachelor of Laws (LLB)",
        "description": "Legal education covering constitutional law, criminal law, civil law, and legal procedures essential for judicial and administrative services."
    },
    {
        "name": "Bachelor of Arts in History",
        "description": "Comprehensive study of historical events, cultural developments, and civilizations providing foundation for civil services examinations."
    },
    {
        "name": "Bachelor of Arts in Economics",
        "description": "Economic theory, policy analysis, and development economics providing analytical skills for administrative and policy positions."
    },
    {
        "name": "Master of Social Work",
        "description": "Professional program in social development, community organization, and welfare administration for social service positions."
    },
    {
        "name": "Bachelor of Science in Defence Studies",
        "description": "Specialized program covering military science, strategic studies, and defence management for armed forces careers."
    },
    {
        "name": "Diploma in Police Administration",
        "description": "Professional training in law enforcement, criminal justice, investigation techniques, and police management systems."
    },
    {
        "name": "Bachelor of Arts in Geography",
        "description": "Study of physical and human geography, cartography, and spatial analysis relevant for administrative and survey positions."
    },
    {
        "name": "Master of Arts in Sociology",
        "description": "Advanced study of social structures, community development, and social policy for welfare and administrative roles."
    }
]

# Skills in Government & Public Sector
government_skills = [
    {
        "name": "Public Administration",
        "description": "Management of government operations, policy implementation, and coordination of public services for efficient governance delivery."
    },
    {
        "name": "Policy Analysis",
        "description": "Evaluation and development of government policies, understanding their impact, and recommending improvements for effective governance."
    },
    {
        "name": "Constitutional Knowledge",
        "description": "Understanding of Indian Constitution, fundamental rights, legal procedures, and constitutional provisions for administrative roles."
    },
    {
        "name": "Leadership",
        "description": "Ability to lead teams, make decisions, inspire others, and drive organizational change in government and public sector contexts."
    },
    {
        "name": "Communication Skills",
        "description": "Effective verbal and written communication for public speaking, report writing, and stakeholder engagement in government roles."
    },
    {
        "name": "Analytical Thinking",
        "description": "Critical analysis of complex problems, data interpretation, and logical reasoning for evidence-based decision making."
    },
    {
        "name": "Ethical Conduct",
        "description": "Adherence to moral principles, integrity, and transparency in public service maintaining trust in government institutions."
    },
    {
        "name": "Conflict Resolution",
        "description": "Mediation and negotiation skills for resolving disputes, managing stakeholder conflicts, and maintaining social harmony."
    },
    {
        "name": "Project Management",
        "description": "Planning and execution of government schemes, programs, and initiatives ensuring timely delivery and resource optimization."
    },
    {
        "name": "Digital Governance",
        "description": "Implementation of e-governance initiatives, digital platforms, and technology solutions for efficient public service delivery."
    }
]

# Add government data to main collections
roles_data.extend(government_roles)
courses_data.extend(government_courses)
skills_data.extend(government_skills)

print(f"Added Government Sector - Roles: {len(government_roles)}, Courses: {len(government_courses)}, Skills: {len(government_skills)}")
print(f"Total so far - Roles: {len(roles_data)}, Courses: {len(courses_data)}, Skills: {len(skills_data)}")