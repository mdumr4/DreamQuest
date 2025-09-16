# EDUCATION & TRAINING SECTOR
# Roles in Education & Training
education_roles = [
    {
        "name": "Teacher",
        "description": "Educates students in academic subjects, develops lesson plans, and assesses student progress. Creates engaging learning environments and implements curriculum standards.",
        "salary": "3-12 LPA",
        "minimum_qualification": "Bachelor's in subject area with B.Ed"
    },
    {
        "name": "Professor",
        "description": "Teaches at university level, conducts research, and publishes academic work. Mentors graduate students and contributes to academic knowledge in specialized fields.",
        "salary": "8-25 LPA",
        "minimum_qualification": "PhD in relevant discipline"
    },
    {
        "name": "Principal",
        "description": "Leads educational institutions, manages faculty, and oversees academic programs. Ensures quality education delivery and institutional development.",
        "salary": "10-30 LPA",
        "minimum_qualification": "Master's degree with administrative experience"
    },
    {
        "name": "Training Manager",
        "description": "Designs and implements employee training programs, assesses training needs, and evaluates program effectiveness. Manages corporate learning and development initiatives.",
        "salary": "8-20 LPA",
        "minimum_qualification": "MBA in HR or Training and Development"
    },
    {
        "name": "Curriculum Developer",
        "description": "Creates educational content, designs learning materials, and develops instructional strategies. Ensures curriculum alignment with educational objectives and standards.",
        "salary": "6-15 LPA",
        "minimum_qualification": "Master's in Education or subject expertise"
    },
    {
        "name": "Educational Counselor",
        "description": "Provides academic and career guidance to students, assists with educational planning, and addresses learning challenges. Supports student development and success.",
        "salary": "4-12 LPA",
        "minimum_qualification": "Master's in Psychology or Counseling"
    },
    {
        "name": "Instructional Designer",
        "description": "Develops educational materials, designs online courses, and creates interactive learning experiences using technology and pedagogical principles.",
        "salary": "6-18 LPA",
        "minimum_qualification": "Master's in Educational Technology or Design"
    },
    {
        "name": "Academic Administrator",
        "description": "Manages academic operations, coordinates with faculty and students, and ensures compliance with educational regulations. Oversees admissions and academic policies.",
        "salary": "7-18 LPA",
        "minimum_qualification": "Master's degree with administrative experience"
    },
    {
        "name": "Research Scholar",
        "description": "Conducts independent research, analyzes data, and contributes to academic knowledge. Pursues doctoral studies and publishes research findings.",
        "salary": "3-8 LPA",
        "minimum_qualification": "Master's degree with research aptitude"
    },
    {
        "name": "Online Tutor",
        "description": "Provides personalized instruction through digital platforms, creates engaging online content, and supports remote learning. Adapts teaching methods for virtual environments.",
        "salary": "2-10 LPA",
        "minimum_qualification": "Bachelor's degree with subject expertise"
    }
]

# Courses in Education & Training
education_courses = [
    {
        "name": "Bachelor of Education (B.Ed)",
        "description": "Professional degree for aspiring teachers covering educational psychology, teaching methodologies, curriculum development, and classroom management techniques."
    },
    {
        "name": "Master of Education (M.Ed)",
        "description": "Advanced program in education focusing on educational leadership, research methods, policy analysis, and specialized teaching strategies."
    },
    {
        "name": "Bachelor of Arts in Education",
        "description": "Undergraduate program combining liberal arts education with foundational teaching skills and educational theory."
    },
    {
        "name": "Diploma in Elementary Education (D.El.Ed)",
        "description": "Professional certification for primary school teachers covering child psychology, pedagogical methods, and elementary education principles."
    },
    {
        "name": "Master of Arts in Educational Psychology",
        "description": "Specialized program focusing on learning processes, cognitive development, educational assessment, and psychological aspects of education."
    },
    {
        "name": "Certificate in Training and Development",
        "description": "Professional program covering adult learning principles, training design, delivery methods, and organizational development strategies."
    },
    {
        "name": "PhD in Education",
        "description": "Doctoral program for advanced research in education, policy analysis, educational innovation, and academic leadership preparation."
    },
    {
        "name": "Educational Technology Certification",
        "description": "Professional training in digital learning tools, online course development, learning management systems, and educational software."
    },
    {
        "name": "Special Education Certification",
        "description": "Specialized training for teaching students with disabilities, covering inclusive education, assistive technology, and individualized instruction."
    },
    {
        "name": "TESOL Certification",
        "description": "Teaching English to Speakers of Other Languages certification covering language acquisition, ESL methodologies, and cross-cultural communication."
    }
]

# Skills in Education & Training
education_skills = [
    {
        "name": "Curriculum Development",
        "description": "Design and creation of educational programs, learning objectives, assessment strategies, and instructional materials aligned with standards."
    },
    {
        "name": "Classroom Management",
        "description": "Effective strategies for maintaining order, engaging students, and creating positive learning environments that promote academic success."
    },
    {
        "name": "Educational Assessment",
        "description": "Design and implementation of evaluation methods to measure student learning, progress, and achievement of educational objectives."
    },
    {
        "name": "Instructional Design",
        "description": "Systematic approach to creating educational experiences and materials that make learning effective, engaging, and efficient."
    },
    {
        "name": "Learning Management Systems",
        "description": "Proficiency in digital platforms for course delivery, student tracking, content management, and online learning facilitation."
    },
    {
        "name": "Educational Psychology",
        "description": "Understanding of learning processes, cognitive development, motivation, and psychological factors affecting education."
    },
    {
        "name": "Training Delivery",
        "description": "Skills in presenting information effectively, facilitating group learning, and engaging adult learners in professional development."
    },
    {
        "name": "Academic Research",
        "description": "Methodology for conducting educational research, analyzing data, and contributing to scholarly knowledge in education."
    },
    {
        "name": "Student Counseling",
        "description": "Guidance and support skills for helping students with academic, personal, and career-related challenges and decisions."
    },
    {
        "name": "Educational Technology",
        "description": "Integration of digital tools, online platforms, and technology solutions to enhance teaching and learning experiences."
    }
]

# Add education data to main collections
roles_data.extend(education_roles)
courses_data.extend(education_courses)
skills_data.extend(education_skills)

print(f"Added Education Sector - Roles: {len(education_roles)}, Courses: {len(education_courses)}, Skills: {len(education_skills)}")
print(f"Total so far - Roles: {len(roles_data)}, Courses: {len(courses_data)}, Skills: {len(skills_data)}")