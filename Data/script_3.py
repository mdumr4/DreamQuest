# MANUFACTURING & ENGINEERING SECTOR
# Roles in Manufacturing & Engineering
manufacturing_roles = [
    {
        "name": "Mechanical Engineer",
        "description": "Designs, develops, and manufactures mechanical systems, machines, and components. Applies engineering principles to solve technical problems and optimize production processes.",
        "salary": "5-18 LPA",
        "minimum_qualification": "BTech Mechanical Engineering"
    },
    {
        "name": "Production Manager",
        "description": "Oversees manufacturing operations, manages production schedules, and ensures quality standards. Coordinates resources, equipment, and personnel for efficient production.",
        "salary": "8-25 LPA",
        "minimum_qualification": "BTech with production management experience"
    },
    {
        "name": "Quality Control Engineer",
        "description": "Monitors product quality, implements quality assurance processes, and conducts testing procedures. Ensures products meet specifications and industry standards.",
        "salary": "4-15 LPA",
        "minimum_qualification": "BTech in Engineering with quality certification"
    },
    {
        "name": "Industrial Engineer",
        "description": "Optimizes manufacturing processes, improves efficiency, and reduces waste through systematic analysis. Designs workflows and implements lean manufacturing principles.",
        "salary": "6-18 LPA",
        "minimum_qualification": "BTech Industrial Engineering"
    },
    {
        "name": "Electrical Engineer",
        "description": "Designs and maintains electrical systems, power distribution, and control mechanisms in manufacturing facilities. Ensures electrical safety and efficiency.",
        "salary": "5-20 LPA",
        "minimum_qualification": "BTech Electrical Engineering"
    },
    {
        "name": "Plant Manager",
        "description": "Manages overall manufacturing plant operations, coordinates departments, and ensures production targets. Oversees safety, quality, and cost optimization initiatives.",
        "salary": "15-40 LPA",
        "minimum_qualification": "BTech with MBA or extensive manufacturing experience"
    },
    {
        "name": "Maintenance Engineer",
        "description": "Maintains and repairs manufacturing equipment, implements preventive maintenance programs, and ensures minimal downtime. Troubleshoots technical issues and optimizes equipment performance.",
        "salary": "5-15 LPA",
        "minimum_qualification": "BTech in Mechanical or Electrical Engineering"
    },
    {
        "name": "Design Engineer",
        "description": "Creates technical drawings, product designs, and engineering specifications using CAD software. Develops innovative solutions and ensures design feasibility.",
        "salary": "6-18 LPA",
        "minimum_qualification": "BTech with design specialization"
    },
    {
        "name": "Safety Officer",
        "description": "Implements workplace safety protocols, conducts safety audits, and ensures compliance with occupational health standards. Manages emergency response procedures.",
        "salary": "4-12 LPA",
        "minimum_qualification": "Engineering degree with safety certification"
    },
    {
        "name": "Supply Chain Manager",
        "description": "Manages procurement, inventory, and logistics operations to optimize supply chain efficiency. Coordinates with vendors, manages costs, and ensures timely delivery.",
        "salary": "10-28 LPA",
        "minimum_qualification": "MBA in Supply Chain or equivalent experience"
    }
]

# Courses in Manufacturing & Engineering
manufacturing_courses = [
    {
        "name": "Bachelor of Technology - Mechanical Engineering",
        "description": "Comprehensive program covering thermodynamics, fluid mechanics, machine design, manufacturing processes, and materials science with practical applications."
    },
    {
        "name": "Bachelor of Technology - Electrical Engineering",
        "description": "Undergraduate program focusing on electrical circuits, power systems, electronics, control systems, and electromagnetic field theory."
    },
    {
        "name": "Bachelor of Technology - Industrial Engineering",
        "description": "Specialized program combining engineering principles with management concepts, covering operations research, quality control, and production planning."
    },
    {
        "name": "Bachelor of Technology - Chemical Engineering",
        "description": "Engineering program focusing on chemical processes, thermodynamics, mass transfer, reaction engineering, and process design principles."
    },
    {
        "name": "Diploma in Mechanical Engineering",
        "description": "Technical education program covering fundamental mechanical engineering concepts, workshop practices, and hands-on technical skills."
    },
    {
        "name": "Master of Technology - Manufacturing Engineering",
        "description": "Advanced program specializing in modern manufacturing techniques, automation, robotics, and advanced materials processing."
    },
    {
        "name": "Six Sigma Certification",
        "description": "Quality management methodology training focusing on process improvement, statistical analysis, and defect reduction techniques."
    },
    {
        "name": "Lean Manufacturing Certification",
        "description": "Professional training in waste elimination, continuous improvement, value stream mapping, and efficient production methodologies."
    },
    {
        "name": "Project Management Professional (PMP)",
        "description": "Global certification in project management covering project planning, execution, monitoring, and closure methodologies."
    },
    {
        "name": "AutoCAD Certification",
        "description": "Professional training in computer-aided design software for creating technical drawings, blueprints, and engineering designs."
    }
]

# Skills in Manufacturing & Engineering
manufacturing_skills = [
    {
        "name": "CAD/CAM",
        "description": "Computer-aided design and manufacturing skills for creating technical drawings, 3D models, and automated manufacturing processes."
    },
    {
        "name": "Quality Control",
        "description": "Systematic processes for monitoring product quality, implementing testing procedures, and ensuring compliance with standards."
    },
    {
        "name": "Lean Manufacturing",
        "description": "Methodology for eliminating waste, improving efficiency, and optimizing production processes through continuous improvement."
    },
    {
        "name": "Project Management",
        "description": "Planning, organizing, and managing resources to successfully complete projects within scope, time, and budget constraints."
    },
    {
        "name": "Process Optimization",
        "description": "Analytical approach to improve manufacturing processes, reduce costs, and enhance productivity through systematic improvements."
    },
    {
        "name": "Technical Drawing",
        "description": "Skill in creating accurate engineering drawings, blueprints, and technical specifications for manufacturing and construction."
    },
    {
        "name": "Equipment Maintenance",
        "description": "Preventive and corrective maintenance practices to ensure optimal equipment performance and minimize production downtime."
    },
    {
        "name": "Safety Management",
        "description": "Implementation of workplace safety protocols, risk assessment, and compliance with occupational health and safety standards."
    },
    {
        "name": "Supply Chain Management",
        "description": "Coordination of procurement, inventory, logistics, and vendor relationships to optimize supply chain efficiency."
    },
    {
        "name": "Statistical Analysis",
        "description": "Application of statistical methods for quality control, process improvement, and data-driven decision making in manufacturing."
    }
]

# Add manufacturing data to main collections
roles_data.extend(manufacturing_roles)
courses_data.extend(manufacturing_courses)
skills_data.extend(manufacturing_skills)

print(f"Added Manufacturing Sector - Roles: {len(manufacturing_roles)}, Courses: {len(manufacturing_courses)}, Skills: {len(manufacturing_skills)}")
print(f"Total so far - Roles: {len(roles_data)}, Courses: {len(courses_data)}, Skills: {len(skills_data)}")