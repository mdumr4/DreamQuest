# CONSTRUCTION & REAL ESTATE SECTOR
# Roles in Construction & Real Estate
construction_roles = [
    {
        "name": "Civil Engineer",
        "description": "Designs and supervises construction projects including roads, bridges, buildings, and infrastructure. Ensures structural integrity and compliance with building codes.",
        "salary": "6-20 LPA",
        "minimum_qualification": "BTech Civil Engineering"
    },
    {
        "name": "Architect",
        "description": "Designs buildings and structures, creates architectural plans, and oversees construction projects. Combines aesthetic design with functional requirements and safety standards.",
        "salary": "8-25 LPA",
        "minimum_qualification": "Bachelor of Architecture (B.Arch)"
    },
    {
        "name": "Project Manager",
        "description": "Manages construction projects from planning to completion, coordinates resources, and ensures timely delivery. Oversees budgets, schedules, and quality control.",
        "salary": "12-30 LPA",
        "minimum_qualification": "Engineering degree with project management experience"
    },
    {
        "name": "Real Estate Agent",
        "description": "Facilitates property transactions, assists buyers and sellers, and provides market analysis. Manages property listings and negotiates deals.",
        "salary": "3-15 LPA",
        "minimum_qualification": "Bachelor's degree with real estate licensing"
    },
    {
        "name": "Quantity Surveyor",
        "description": "Estimates construction costs, manages project budgets, and controls expenses. Prepares tender documents and monitors financial aspects of construction projects.",
        "salary": "6-18 LPA",
        "minimum_qualification": "Civil Engineering or Quantity Surveying degree"
    },
    {
        "name": "Site Engineer",
        "description": "Supervises construction activities on-site, ensures safety protocols, and monitors work quality. Coordinates with contractors and resolves technical issues.",
        "salary": "4-12 LPA",
        "minimum_qualification": "BTech Civil Engineering"
    },
    {
        "name": "Real Estate Developer",
        "description": "Identifies land opportunities, manages development projects, and oversees property construction. Handles permits, financing, and project coordination.",
        "salary": "15-50 LPA",
        "minimum_qualification": "Engineering or MBA with real estate experience"
    },
    {
        "name": "Interior Designer",
        "description": "Designs interior spaces for residential and commercial properties. Creates functional and aesthetic environments using space planning and design elements.",
        "salary": "4-15 LPA",
        "minimum_qualification": "Bachelor's in Interior Design"
    },
    {
        "name": "Construction Supervisor",
        "description": "Oversees daily construction operations, manages workers, and ensures project progress. Implements safety measures and quality control procedures.",
        "salary": "5-15 LPA",
        "minimum_qualification": "Diploma in Civil Engineering with experience"
    },
    {
        "name": "Property Manager",
        "description": "Manages rental properties, handles tenant relations, and maintains property conditions. Oversees maintenance, rent collection, and property marketing.",
        "salary": "6-18 LPA",
        "minimum_qualification": "Bachelor's degree with property management experience"
    }
]

# Courses in Construction & Real Estate
construction_courses = [
    {
        "name": "Bachelor of Technology - Civil Engineering",
        "description": "Comprehensive engineering program covering structural design, construction materials, surveying, geotechnical engineering, and project management."
    },
    {
        "name": "Bachelor of Architecture",
        "description": "Professional degree combining design, technology, and art focusing on building design, urban planning, and sustainable architecture."
    },
    {
        "name": "Master of Technology - Structural Engineering",
        "description": "Advanced program specializing in structural analysis, design of complex structures, earthquake engineering, and construction technology."
    },
    {
        "name": "Diploma in Civil Engineering",
        "description": "Technical education covering construction techniques, building materials, surveying, and basic structural design principles."
    },
    {
        "name": "Real Estate Management Certification",
        "description": "Professional program covering property valuation, real estate law, investment analysis, and property development processes."
    },
    {
        "name": "Bachelor of Interior Design",
        "description": "Creative program focusing on space planning, color theory, furniture design, and creating functional interior environments."
    },
    {
        "name": "Construction Project Management Course",
        "description": "Specialized training in project planning, resource management, cost control, and construction industry practices."
    },
    {
        "name": "Quantity Surveying Diploma",
        "description": "Professional program covering cost estimation, contract management, project evaluation, and construction economics."
    },
    {
        "name": "Master of Urban and Regional Planning",
        "description": "Graduate program in city planning, land use, transportation planning, and sustainable urban development."
    },
    {
        "name": "Green Building Certification",
        "description": "Specialized training in sustainable construction, energy-efficient buildings, and environmental building practices."
    }
]

# Skills in Construction & Real Estate
construction_skills = [
    {
        "name": "Structural Design",
        "description": "Engineering capability to design safe and efficient structures using knowledge of materials, loads, and construction methods."
    },
    {
        "name": "Project Planning",
        "description": "Ability to develop comprehensive project schedules, allocate resources, and coordinate activities for successful project completion."
    },
    {
        "name": "Cost Estimation",
        "description": "Skill in calculating project costs, preparing budgets, and managing financial aspects of construction and development projects."
    },
    {
        "name": "AutoCAD",
        "description": "Computer-aided design software proficiency for creating technical drawings, blueprints, and construction documentation."
    },
    {
        "name": "Site Supervision",
        "description": "Management of construction site activities, worker coordination, quality control, and ensuring safety compliance."
    },
    {
        "name": "Building Codes",
        "description": "Knowledge of construction regulations, safety standards, and legal requirements for building design and construction."
    },
    {
        "name": "Property Valuation",
        "description": "Assessment of property values using market analysis, comparable sales, and professional valuation methodologies."
    },
    {
        "name": "Contract Management",
        "description": "Negotiation, preparation, and administration of construction contracts, ensuring compliance and managing relationships."
    },
    {
        "name": "Construction Materials",
        "description": "Understanding of building materials properties, selection criteria, and appropriate usage in different construction applications."
    },
    {
        "name": "Safety Management",
        "description": "Implementation of workplace safety protocols, hazard identification, and compliance with occupational health standards."
    }
]

# Add construction data to main collections
roles_data.extend(construction_roles)
courses_data.extend(construction_courses)
skills_data.extend(construction_skills)

print(f"Added Construction Sector - Roles: {len(construction_roles)}, Courses: {len(construction_courses)}, Skills: {len(construction_skills)}")
print(f"Total so far - Roles: {len(roles_data)}, Courses: {len(courses_data)}, Skills: {len(skills_data)}")