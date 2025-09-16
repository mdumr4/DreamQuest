# AGRICULTURE & FOOD PROCESSING SECTOR
# Roles in Agriculture & Food Processing
agriculture_roles = [
    {
        "name": "Agricultural Engineer",
        "description": "Designs agricultural machinery, irrigation systems, and food processing equipment. Applies engineering principles to improve farming efficiency and crop production.",
        "salary": "5-15 LPA",
        "minimum_qualification": "BTech Agricultural Engineering"
    },
    {
        "name": "Food Technologist",
        "description": "Develops food products, ensures food safety, and optimizes processing methods. Conducts quality control testing and implements food preservation techniques.",
        "salary": "4-12 LPA",
        "minimum_qualification": "BTech Food Technology"
    },
    {
        "name": "Agronomist",
        "description": "Studies crop production, soil management, and plant breeding techniques. Provides expertise on sustainable farming practices and crop optimization strategies.",
        "salary": "4-12 LPA",
        "minimum_qualification": "Master's in Agronomy or Agriculture"
    },
    {
        "name": "Farm Manager",
        "description": "Oversees agricultural operations, manages farm resources, and coordinates farming activities. Plans crop production and ensures optimal farm productivity.",
        "salary": "6-18 LPA",
        "minimum_qualification": "Bachelor's in Agriculture with management experience"
    },
    {
        "name": "Agricultural Extension Officer",
        "description": "Educates farmers about modern farming techniques, government schemes, and agricultural innovations. Provides technical assistance and training to rural communities.",
        "salary": "3-8 LPA",
        "minimum_qualification": "Bachelor's in Agriculture"
    },
    {
        "name": "Quality Control Manager",
        "description": "Ensures food products meet safety and quality standards throughout processing and packaging. Implements quality assurance programs and regulatory compliance.",
        "salary": "8-20 LPA",
        "minimum_qualification": "Master's in Food Technology with quality experience"
    },
    {
        "name": "Agricultural Marketing Specialist",
        "description": "Develops marketing strategies for agricultural products, analyzes market trends, and manages supply chain operations. Connects farmers with buyers and markets.",
        "salary": "5-15 LPA",
        "minimum_qualification": "MBA Agribusiness or Marketing"
    },
    {
        "name": "Soil Scientist",
        "description": "Studies soil properties, fertility, and conservation methods. Provides recommendations for soil management and sustainable agricultural practices.",
        "salary": "4-12 LPA",
        "minimum_qualification": "Master's in Soil Science"
    },
    {
        "name": "Plant Pathologist",
        "description": "Diagnoses plant diseases, develops treatment strategies, and researches plant health management. Provides expertise on crop disease prevention and control.",
        "salary": "5-15 LPA",
        "minimum_qualification": "Master's/PhD in Plant Pathology"
    },
    {
        "name": "Agricultural Finance Officer",
        "description": "Manages agricultural loans, assesses credit risks, and provides financial services to farmers. Evaluates agricultural projects and implements financial schemes.",
        "salary": "6-16 LPA",
        "minimum_qualification": "MBA Finance with agricultural sector experience"
    }
]

# Courses in Agriculture & Food Processing
agriculture_courses = [
    {
        "name": "Bachelor of Science in Agriculture",
        "description": "Comprehensive program covering crop production, soil science, plant breeding, agricultural economics, and sustainable farming practices."
    },
    {
        "name": "Bachelor of Technology in Food Technology",
        "description": "Engineering program focusing on food processing, preservation, packaging, quality control, and food safety management systems."
    },
    {
        "name": "Bachelor of Technology in Agricultural Engineering",
        "description": "Engineering degree combining mechanical, civil, and electrical engineering principles with agricultural applications and farm mechanization."
    },
    {
        "name": "Master of Science in Agronomy",
        "description": "Advanced program specializing in crop science, plant physiology, soil-plant relationships, and sustainable crop production systems."
    },
    {
        "name": "Master of Business Administration in Agribusiness",
        "description": "Management program focusing on agricultural marketing, supply chain, rural finance, and agribusiness management strategies."
    },
    {
        "name": "Bachelor of Veterinary Science",
        "description": "Professional degree covering animal health, veterinary medicine, livestock management, and animal husbandry practices."
    },
    {
        "name": "Diploma in Agriculture",
        "description": "Technical program providing practical knowledge in farming techniques, crop management, and agricultural technologies."
    },
    {
        "name": "Post Graduate Diploma in Food Science",
        "description": "Specialized program covering food chemistry, microbiology, nutrition, and food processing technologies."
    },
    {
        "name": "Master of Science in Horticulture",
        "description": "Advanced studies in fruit and vegetable production, ornamental horticulture, and landscape management techniques."
    },
    {
        "name": "Certificate in Organic Farming",
        "description": "Professional training in organic agriculture methods, certification processes, and sustainable farming practices."
    }
]

# Skills in Agriculture & Food Processing
agriculture_skills = [
    {
        "name": "Crop Management",
        "description": "Knowledge of crop cultivation techniques, growth cycles, harvesting methods, and post-harvest handling for optimal yield."
    },
    {
        "name": "Soil Analysis",
        "description": "Testing and evaluation of soil properties, nutrient content, pH levels, and recommendations for soil improvement."
    },
    {
        "name": "Food Safety",
        "description": "Implementation of HACCP principles, food safety regulations, and quality control measures in food processing operations."
    },
    {
        "name": "Agricultural Machinery",
        "description": "Operation and maintenance of farming equipment, tractors, harvesters, and modern agricultural technology systems."
    },
    {
        "name": "Irrigation Management",
        "description": "Design and operation of irrigation systems, water conservation techniques, and efficient water resource management."
    },
    {
        "name": "Plant Breeding",
        "description": "Development of improved crop varieties through selective breeding, genetic techniques, and biotechnology applications."
    },
    {
        "name": "Food Processing",
        "description": "Techniques for transforming raw agricultural products into processed foods, including preservation, packaging, and distribution."
    },
    {
        "name": "Agricultural Marketing",
        "description": "Understanding of market dynamics, pricing strategies, supply chain management, and agricultural commodity trading."
    },
    {
        "name": "Pest Management",
        "description": "Integrated approach to controlling agricultural pests through biological, chemical, and cultural methods."
    },
    {
        "name": "Sustainable Agriculture",
        "description": "Environmentally friendly farming practices, organic methods, and sustainable resource management techniques."
    }
]

# Add agriculture data to main collections
roles_data.extend(agriculture_roles)
courses_data.extend(agriculture_courses)
skills_data.extend(agriculture_skills)

print(f"Added Agriculture Sector - Roles: {len(agriculture_roles)}, Courses: {len(agriculture_courses)}, Skills: {len(agriculture_skills)}")
print(f"Total so far - Roles: {len(roles_data)}, Courses: {len(courses_data)}, Skills: {len(skills_data)}")