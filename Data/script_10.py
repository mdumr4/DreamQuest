# ADDITIONAL SECTORS AND COMPREHENSIVE SKILLS

# TRANSPORTATION & LOGISTICS
transport_roles = [
    {
        "name": "Logistics Manager",
        "description": "Oversees supply chain operations, manages transportation networks, and optimizes delivery systems. Coordinates with vendors, warehouses, and distribution centers.",
        "salary": "8-22 LPA",
        "minimum_qualification": "MBA in Supply Chain or Operations Management"
    },
    {
        "name": "Commercial Pilot",
        "description": "Operates aircraft for passenger and cargo transportation, ensures flight safety, and follows aviation regulations. Requires extensive training and licensing.",
        "salary": "15-35 LPA",
        "minimum_qualification": "Commercial Pilot License with flight training"
    },
    {
        "name": "Ship Captain",
        "description": "Commands merchant vessels, manages crew operations, and ensures safe maritime transportation. Responsible for navigation, cargo, and regulatory compliance.",
        "salary": "12-30 LPA",
        "minimum_qualification": "Nautical Science degree with maritime experience"
    }
]

# TEXTILES & APPAREL
textile_roles = [
    {
        "name": "Textile Engineer",
        "description": "Develops textile production processes, improves fabric quality, and implements manufacturing technologies. Specializes in fiber science and textile chemistry.",
        "salary": "5-15 LPA",
        "minimum_qualification": "BTech Textile Engineering"
    },
    {
        "name": "Fashion Designer",
        "description": "Creates clothing designs, develops fashion collections, and follows industry trends. Combines creativity with market knowledge and production requirements.",
        "salary": "4-20 LPA",
        "minimum_qualification": "Bachelor's in Fashion Design"
    }
]

# ENERGY & UTILITIES
energy_roles = [
    {
        "name": "Power Plant Engineer",
        "description": "Operates and maintains power generation facilities, monitors equipment performance, and ensures efficient energy production. Handles safety protocols and regulatory compliance.",
        "salary": "8-25 LPA",
        "minimum_qualification": "BTech Electrical or Mechanical Engineering"
    },
    {
        "name": "Renewable Energy Specialist",
        "description": "Develops solar, wind, and other renewable energy projects. Conducts feasibility studies, manages installations, and promotes sustainable energy solutions.",
        "salary": "7-20 LPA",
        "minimum_qualification": "BTech with renewable energy specialization"
    }
]

# TELECOMMUNICATIONS
telecom_roles = [
    {
        "name": "Network Engineer",
        "description": "Designs and maintains telecommunications infrastructure, manages network performance, and troubleshoots connectivity issues. Ensures reliable communication systems.",
        "salary": "6-18 LPA",
        "minimum_qualification": "BTech Electronics or Telecommunications"
    },
    {
        "name": "Telecom Sales Manager",
        "description": "Manages sales teams, develops customer relationships, and promotes telecommunications services. Achieves revenue targets and expands market presence.",
        "salary": "8-20 LPA",
        "minimum_qualification": "MBA or Bachelor's with sales experience"
    }
]

# Add all additional roles
additional_roles = transport_roles + textile_roles + energy_roles + telecom_roles
roles_data.extend(additional_roles)

print(f"Added Additional Sectors - Roles: {len(additional_roles)}")
print(f"Current total - Roles: {len(roles_data)}, Courses: {len(courses_data)}, Skills: {len(skills_data)}")