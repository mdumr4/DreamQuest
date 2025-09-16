# ADDITIONAL COURSES ACROSS SECTORS

additional_courses = [
    # CBSE Academic Subjects (Primary & Secondary)
    {
        "name": "Mathematics",
        "description": "Fundamental subject covering arithmetic, algebra, geometry, trigonometry, calculus, and statistical concepts from elementary to advanced levels."
    },
    {
        "name": "Physics",
        "description": "Science subject exploring mechanics, thermodynamics, electromagnetism, optics, and modern physics principles with practical applications."
    },
    {
        "name": "Chemistry",
        "description": "Scientific study of matter, chemical reactions, organic and inorganic compounds, and their applications in industry and daily life."
    },
    {
        "name": "Biology",
        "description": "Life science covering plant and animal biology, human anatomy, genetics, ecology, and environmental science fundamentals."
    },
    {
        "name": "English Literature",
        "description": "Language and literature study focusing on reading comprehension, writing skills, grammar, poetry, prose, and communication abilities."
    },
    {
        "name": "Hindi",
        "description": "National language study covering grammar, literature, composition, and communication skills in Hindi for academic and practical use."
    },
    {
        "name": "Social Science",
        "description": "Integrated subject covering history, geography, political science, and economics to understand society, culture, and governance."
    },
    {
        "name": "Computer Science",
        "description": "Technology education covering programming concepts, computer applications, data structures, and digital literacy skills."
    },
    
    # Professional and Specialized Courses
    {
        "name": "Bachelor of Hotel Management",
        "description": "Hospitality program covering hotel operations, food service management, tourism, event planning, and customer service excellence."
    },
    {
        "name": "Bachelor of Physical Education",
        "description": "Sports and fitness program covering exercise science, sports psychology, coaching techniques, and physical fitness management."
    },
    {
        "name": "Bachelor of Arts in Psychology",
        "description": "Behavioral science program covering human psychology, counseling techniques, research methods, and mental health principles."
    },
    {
        "name": "Master of Fine Arts",
        "description": "Advanced creative program in visual arts, performing arts, creative writing, and artistic expression techniques."
    },
    {
        "name": "Chartered Financial Analyst (CFA)",
        "description": "International finance qualification covering investment analysis, portfolio management, and financial market expertise."
    },
    {
        "name": "Certified Public Accountant (CPA)",
        "description": "Professional accounting certification covering auditing, taxation, financial reporting, and business advisory services."
    },
    {
        "name": "Project Management Professional (PMP)",
        "description": "Global project management certification covering project planning, execution, monitoring, and closure methodologies."
    },
    {
        "name": "Human Resource Management Diploma",
        "description": "Professional program covering recruitment, training, performance management, and organizational behavior principles."
    },
    {
        "name": "Foreign Language Certification",
        "description": "Language learning programs in German, French, Spanish, Japanese, and other international languages for global communication."
    },
    {
        "name": "Environmental Science",
        "description": "Interdisciplinary program covering ecology, environmental conservation, pollution control, and sustainable development practices."
    },
    {
        "name": "Biotechnology",
        "description": "Advanced program combining biology and technology for applications in medicine, agriculture, and industrial processes."
    },
    {
        "name": "Petroleum Engineering",
        "description": "Specialized engineering program covering oil and gas exploration, drilling techniques, and energy resource management."
    }
]

courses_data.extend(additional_courses)

# COMPREHENSIVE PROFESSIONAL SKILLS

additional_skills = [
    # Technical Skills
    {
        "name": "Microsoft Excel",
        "description": "Spreadsheet software proficiency for data analysis, financial modeling, reporting, and business calculations with advanced functions."
    },
    {
        "name": "PowerPoint",
        "description": "Presentation software skills for creating professional presentations, visual communication, and effective information delivery."
    },
    {
        "name": "Tableau",
        "description": "Data visualization tool for creating interactive dashboards, charts, and reports to analyze business intelligence data."
    },
    {
        "name": "SAP",
        "description": "Enterprise resource planning software knowledge for managing business operations, finance, and organizational processes."
    },
    {
        "name": "Salesforce",
        "description": "Customer relationship management platform skills for sales automation, customer service, and business process management."
    },
    
    # Business Skills
    {
        "name": "Strategic Planning",
        "description": "Development of long-term business strategies, goal setting, market analysis, and organizational direction planning."
    },
    {
        "name": "Business Analysis",
        "description": "Systematic examination of business processes, requirements gathering, and solution development for organizational improvement."
    },
    {
        "name": "Negotiation",
        "description": "Skills in reaching agreements, resolving conflicts, and achieving mutually beneficial outcomes in business and personal contexts."
    },
    {
        "name": "Team Management",
        "description": "Leadership abilities for coordinating teams, delegating tasks, motivating employees, and achieving collective objectives."
    },
    {
        "name": "Time Management",
        "description": "Efficient organization of tasks, prioritization of activities, and productive use of time to achieve goals."
    },
    
    # Industry-Specific Skills
    {
        "name": "Legal Research",
        "description": "Investigation of legal precedents, case law analysis, and research methodologies for legal practice and compliance."
    },
    {
        "name": "Medical Coding",
        "description": "Healthcare skill for assigning codes to medical diagnoses and procedures for billing and record-keeping purposes."
    },
    {
        "name": "Foreign Exchange Trading",
        "description": "Financial skill for currency trading, market analysis, and international financial market operations."
    },
    {
        "name": "Environmental Impact Assessment",
        "description": "Evaluation of environmental consequences of development projects and implementation of mitigation measures."
    },
    {
        "name": "Food Safety Standards",
        "description": "Knowledge of HACCP, FDA regulations, and quality control measures for safe food production and handling."
    },
    
    # Soft Skills
    {
        "name": "Critical Thinking",
        "description": "Analytical reasoning, problem-solving, logical evaluation, and objective decision-making in complex situations."
    },
    {
        "name": "Emotional Intelligence",
        "description": "Understanding and managing emotions, empathy, social awareness, and relationship management skills."
    },
    {
        "name": "Adaptability",
        "description": "Flexibility in changing environments, learning new skills, and adjusting to evolving circumstances effectively."
    },
    {
        "name": "Cross-Cultural Communication",
        "description": "Ability to communicate effectively across different cultures, languages, and diverse social contexts."
    },
    {
        "name": "Public Speaking",
        "description": "Confident verbal communication, presentation skills, and ability to address audiences effectively."
    }
]

skills_data.extend(additional_skills)

print(f"Added Additional Content:")
print(f"Additional Courses: {len(additional_courses)}")
print(f"Additional Skills: {len(additional_skills)}")
print(f"Final totals - Roles: {len(roles_data)}, Courses: {len(courses_data)}, Skills: {len(skills_data)}")