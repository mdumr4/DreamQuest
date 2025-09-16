# RETAIL & E-COMMERCE SECTOR
# Roles in Retail & E-commerce
retail_roles = [
    {
        "name": "E-commerce Manager",
        "description": "Manages online retail operations, oversees digital marketing strategies, and optimizes e-commerce platforms. Analyzes sales data and implements growth initiatives.",
        "salary": "8-25 LPA",
        "minimum_qualification": "MBA or Bachelor's with e-commerce experience"
    },
    {
        "name": "Retail Store Manager",
        "description": "Oversees daily store operations, manages staff, and ensures customer satisfaction. Handles inventory management, sales targets, and store profitability.",
        "salary": "5-15 LPA",
        "minimum_qualification": "Bachelor's degree with retail management experience"
    },
    {
        "name": "Digital Marketing Specialist",
        "description": "Develops and executes online marketing campaigns, manages social media presence, and optimizes digital advertising. Analyzes campaign performance and ROI.",
        "salary": "4-15 LPA",
        "minimum_qualification": "Bachelor's in Marketing with digital skills"
    },
    {
        "name": "Supply Chain Coordinator",
        "description": "Manages product sourcing, inventory levels, and distribution networks. Coordinates with suppliers and logistics partners to ensure efficient operations.",
        "salary": "6-18 LPA",
        "minimum_qualification": "Bachelor's in Supply Chain or Operations"
    },
    {
        "name": "Customer Service Representative",
        "description": "Handles customer inquiries, resolves complaints, and provides product support. Maintains customer satisfaction and builds brand loyalty.",
        "salary": "2-6 LPA",
        "minimum_qualification": "12th pass with communication skills"
    },
    {
        "name": "Visual Merchandiser",
        "description": "Creates attractive product displays, designs store layouts, and implements visual branding strategies. Enhances customer shopping experience through visual appeal.",
        "salary": "3-8 LPA",
        "minimum_qualification": "Diploma in Design or Visual Arts"
    },
    {
        "name": "Category Manager",
        "description": "Manages specific product categories, analyzes market trends, and develops pricing strategies. Coordinates with vendors and optimizes product assortment.",
        "salary": "8-20 LPA",
        "minimum_qualification": "MBA with retail or FMCG experience"
    },
    {
        "name": "Warehouse Manager",
        "description": "Oversees warehouse operations, manages inventory storage, and coordinates order fulfillment. Ensures efficient logistics and timely deliveries.",
        "salary": "6-15 LPA",
        "minimum_qualification": "Bachelor's degree with logistics experience"
    },
    {
        "name": "Sales Associate",
        "description": "Assists customers with product selection, processes transactions, and maintains store presentation. Provides product knowledge and achieves sales targets.",
        "salary": "2-5 LPA",
        "minimum_qualification": "12th pass with sales aptitude"
    },
    {
        "name": "E-commerce Data Analyst",
        "description": "Analyzes customer behavior, sales trends, and website performance metrics. Provides insights for business optimization and strategic decision-making.",
        "salary": "6-18 LPA",
        "minimum_qualification": "Bachelor's in Analytics or Statistics"
    }
]

# Courses in Retail & E-commerce
retail_courses = [
    {
        "name": "Master of Business Administration - Retail Management",
        "description": "Specialized MBA program covering retail operations, merchandising, consumer behavior, supply chain management, and digital commerce strategies."
    },
    {
        "name": "Bachelor of Business Administration - Marketing",
        "description": "Undergraduate program focusing on marketing principles, consumer psychology, brand management, and sales strategies for retail industry."
    },
    {
        "name": "Digital Marketing Certification",
        "description": "Professional program covering SEO, SEM, social media marketing, content marketing, and analytics for digital commerce success."
    },
    {
        "name": "Supply Chain Management Diploma",
        "description": "Specialized program in logistics, inventory management, procurement, and distribution network optimization for retail operations."
    },
    {
        "name": "E-commerce Technology Course",
        "description": "Technical program covering e-commerce platforms, web development, payment systems, and digital infrastructure for online retail."
    },
    {
        "name": "Visual Merchandising Certification",
        "description": "Professional training in store design, product display techniques, consumer psychology, and retail space optimization."
    },
    {
        "name": "Customer Relationship Management Course",
        "description": "Program focusing on customer service excellence, relationship building, complaint handling, and customer retention strategies."
    },
    {
        "name": "Retail Analytics Certification",
        "description": "Data analysis program covering sales forecasting, customer segmentation, inventory optimization, and business intelligence for retail."
    },
    {
        "name": "Fashion Merchandising Diploma",
        "description": "Specialized program in fashion retail, trend analysis, buying strategies, and brand management for apparel industry."
    },
    {
        "name": "Logistics and Distribution Management",
        "description": "Comprehensive program covering warehouse management, transportation, inventory control, and supply chain optimization."
    }
]

# Skills in Retail & E-commerce
retail_skills = [
    {
        "name": "Customer Service",
        "description": "Ability to interact effectively with customers, resolve issues, provide support, and maintain positive customer relationships."
    },
    {
        "name": "Sales Techniques",
        "description": "Methods for identifying customer needs, presenting products effectively, handling objections, and closing sales successfully."
    },
    {
        "name": "Inventory Management",
        "description": "System for tracking stock levels, forecasting demand, managing orders, and optimizing inventory turnover rates."
    },
    {
        "name": "Digital Marketing",
        "description": "Online marketing strategies including SEO, social media, email marketing, and paid advertising for customer acquisition."
    },
    {
        "name": "E-commerce Platforms",
        "description": "Proficiency in online selling platforms, website management, order processing, and digital storefront optimization."
    },
    {
        "name": "Data Analysis",
        "description": "Interpretation of sales data, customer analytics, performance metrics, and market trends for business insights."
    },
    {
        "name": "Visual Merchandising",
        "description": "Art of product presentation, store layout design, and creating attractive displays to enhance customer experience."
    },
    {
        "name": "Supply Chain Coordination",
        "description": "Management of vendor relationships, logistics coordination, and ensuring smooth product flow from suppliers to customers."
    },
    {
        "name": "Brand Management",
        "description": "Development and maintenance of brand identity, positioning, and customer perception across all touchpoints."
    },
    {
        "name": "Market Research",
        "description": "Gathering and analyzing market information, competitor analysis, and consumer insights for strategic decision-making."
    }
]

# Add retail data to main collections
roles_data.extend(retail_roles)
courses_data.extend(retail_courses)
skills_data.extend(retail_skills)

print(f"Added Retail Sector - Roles: {len(retail_roles)}, Courses: {len(retail_courses)}, Skills: {len(retail_skills)}")
print(f"Total so far - Roles: {len(roles_data)}, Courses: {len(courses_data)}, Skills: {len(skills_data)}")