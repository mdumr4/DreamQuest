import pandas as pd
import json

# Initialize comprehensive data structures for India-based career knowledge graph
roles_data = []
courses_data = []
skills_data = []
role_skill_relations = []
course_skill_relations = []

# TECHNOLOGY & SOFTWARE SECTOR
# Roles in Technology & Software
tech_roles = [
    {
        "name": "Software Engineer",
        "description": "Develops, tests, and maintains software applications and systems using programming languages and frameworks. Works on full software development lifecycle from requirements to deployment.",
        "salary": "6-25 LPA",
        "minimum_qualification": "BTech Computer Science or equivalent"
    },
    {
        "name": "Data Scientist",
        "description": "Analyzes complex datasets to extract business insights and build predictive models. Uses statistical methods, machine learning, and data visualization techniques.",
        "salary": "8-30 LPA",
        "minimum_qualification": "BTech/MTech in Computer Science or Statistics"
    },
    {
        "name": "AI/ML Engineer",
        "description": "Designs and implements artificial intelligence and machine learning solutions. Develops neural networks, deep learning models, and automated systems.",
        "salary": "12-35 LPA",
        "minimum_qualification": "MTech in AI/ML or BTech with specialization"
    },
    {
        "name": "Cloud Architect",
        "description": "Designs and manages cloud computing infrastructure and services. Oversees cloud migration strategies and ensures scalable, secure cloud solutions.",
        "salary": "15-40 LPA",
        "minimum_qualification": "BTech Computer Science with cloud certifications"
    },
    {
        "name": "Cybersecurity Specialist",
        "description": "Protects organizational systems and data from cyber threats and vulnerabilities. Implements security protocols, monitors network security, and responds to incidents.",
        "salary": "8-25 LPA",
        "minimum_qualification": "BTech in Computer Science or Cybersecurity"
    },
    {
        "name": "DevOps Engineer",
        "description": "Bridges development and operations teams to streamline software deployment processes. Manages CI/CD pipelines, infrastructure automation, and system monitoring.",
        "salary": "8-22 LPA",
        "minimum_qualification": "BTech Computer Science or equivalent"
    },
    {
        "name": "Full Stack Developer",
        "description": "Develops both frontend and backend components of web applications. Works with multiple programming languages, databases, and frameworks.",
        "salary": "6-20 LPA",
        "minimum_qualification": "BTech/BCA or equivalent with programming skills"
    },
    {
        "name": "Mobile App Developer",
        "description": "Creates applications for mobile devices using native or cross-platform technologies. Focuses on user experience, performance optimization, and app store deployment.",
        "salary": "5-18 LPA",
        "minimum_qualification": "BTech/BCA with mobile development skills"
    },
    {
        "name": "UI/UX Designer",
        "description": "Designs user interfaces and experiences for digital products. Conducts user research, creates wireframes, prototypes, and ensures intuitive design solutions.",
        "salary": "4-15 LPA",
        "minimum_qualification": "Bachelor's in Design or equivalent portfolio"
    },
    {
        "name": "Database Administrator",
        "description": "Manages and maintains database systems to ensure data integrity, security, and performance. Handles backup, recovery, and optimization of database operations.",
        "salary": "6-18 LPA",
        "minimum_qualification": "BTech Computer Science with database expertise"
    }
]

# Courses in Technology & Software
tech_courses = [
    {
        "name": "Bachelor of Technology - Computer Science",
        "description": "Comprehensive undergraduate program covering programming fundamentals, data structures, algorithms, software engineering, and computer systems architecture."
    },
    {
        "name": "Master of Computer Applications",
        "description": "Postgraduate program focusing on advanced programming concepts, software development methodologies, database management, and emerging technologies."
    },
    {
        "name": "Bachelor of Computer Applications",
        "description": "Undergraduate degree emphasizing practical computer applications, programming languages, web development, and software project management."
    },
    {
        "name": "MTech in Artificial Intelligence",
        "description": "Specialized postgraduate program in AI technologies, machine learning algorithms, neural networks, natural language processing, and computer vision."
    },
    {
        "name": "Data Science Certification",
        "description": "Professional certification covering statistical analysis, machine learning, data visualization, big data technologies, and predictive modeling techniques."
    },
    {
        "name": "AWS Solutions Architect Certification",
        "description": "Industry-recognized certification for designing and deploying scalable systems on Amazon Web Services cloud platform infrastructure."
    },
    {
        "name": "Google Cloud Professional Certification",
        "description": "Professional certification demonstrating expertise in Google Cloud technologies, including compute, storage, networking, and machine learning services."
    },
    {
        "name": "Cybersecurity Certification",
        "description": "Comprehensive program covering network security, ethical hacking, incident response, risk assessment, and information security management."
    },
    {
        "name": "Full Stack Web Development Course",
        "description": "Intensive program covering frontend technologies, backend frameworks, databases, version control, and complete web application development."
    },
    {
        "name": "Mobile App Development Course",
        "description": "Specialized training in native and cross-platform mobile application development using modern frameworks and development tools."
    }
]

# Skills in Technology & Software
tech_skills = [
    {
        "name": "Python Programming",
        "description": "High-level programming language used for web development, data analysis, artificial intelligence, automation, and scientific computing applications."
    },
    {
        "name": "Java Programming",
        "description": "Object-oriented programming language widely used for enterprise applications, Android development, and large-scale software systems."
    },
    {
        "name": "JavaScript",
        "description": "Dynamic programming language essential for web development, enabling interactive web pages and modern frontend frameworks."
    },
    {
        "name": "React.js",
        "description": "JavaScript library for building user interfaces, particularly single-page applications with component-based architecture and virtual DOM."
    },
    {
        "name": "Node.js",
        "description": "JavaScript runtime environment for server-side development, enabling full-stack JavaScript applications and real-time web services."
    },
    {
        "name": "SQL",
        "description": "Structured Query Language for managing relational databases, performing data queries, updates, and database administration tasks."
    },
    {
        "name": "Machine Learning",
        "description": "Subset of artificial intelligence focusing on algorithms that learn from data to make predictions and automated decisions."
    },
    {
        "name": "Deep Learning",
        "description": "Advanced machine learning technique using neural networks with multiple layers to solve complex pattern recognition problems."
    },
    {
        "name": "Cloud Computing",
        "description": "Technology enabling on-demand access to computing resources, storage, and services over the internet infrastructure."
    },
    {
        "name": "Docker",
        "description": "Containerization platform that enables packaging applications with dependencies into lightweight, portable containers for deployment."
    },
    {
        "name": "Kubernetes",
        "description": "Container orchestration platform for automating deployment, scaling, and management of containerized applications in clusters."
    },
    {
        "name": "Git",
        "description": "Distributed version control system for tracking changes in source code and coordinating work among multiple developers."
    }
]

# Add technology data to main collections
roles_data.extend(tech_roles)
courses_data.extend(tech_courses)
skills_data.extend(tech_skills)

print(f"Added Technology Sector - Roles: {len(tech_roles)}, Courses: {len(tech_courses)}, Skills: {len(tech_skills)}")