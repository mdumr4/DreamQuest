# BANKING & FINANCIAL SERVICES SECTOR
# Roles in Banking & Financial Services
banking_roles = [
    {
        "name": "Bank Manager",
        "description": "Oversees branch operations, manages customer relationships, and ensures compliance with banking regulations. Coordinates staff activities and achieves business targets.",
        "salary": "8-25 LPA",
        "minimum_qualification": "MBA Finance or equivalent banking degree"
    },
    {
        "name": "Investment Banker",
        "description": "Provides financial advisory services for mergers, acquisitions, and capital raising activities. Analyzes market trends and structures complex financial transactions.",
        "salary": "15-50 LPA",
        "minimum_qualification": "MBA Finance or CA with investment banking experience"
    },
    {
        "name": "Financial Analyst",
        "description": "Analyzes financial data, market trends, and investment opportunities to provide recommendations. Prepares financial reports and forecasts for decision-making.",
        "salary": "6-18 LPA",
        "minimum_qualification": "Bachelor's in Finance or Economics"
    },
    {
        "name": "Chartered Accountant",
        "description": "Provides auditing, taxation, and financial advisory services to organizations. Ensures compliance with accounting standards and financial regulations.",
        "salary": "8-30 LPA",
        "minimum_qualification": "CA qualification from ICAI"
    },
    {
        "name": "Credit Analyst",
        "description": "Evaluates creditworthiness of individuals and businesses for loan applications. Assesses financial risks and recommends credit decisions based on analysis.",
        "salary": "5-15 LPA",
        "minimum_qualification": "Bachelor's in Finance or Accounting"
    },
    {
        "name": "Risk Manager",
        "description": "Identifies, analyzes, and mitigates financial risks across banking operations. Develops risk management strategies and ensures regulatory compliance.",
        "salary": "10-28 LPA",
        "minimum_qualification": "MBA in Finance with risk management certification"
    },
    {
        "name": "Loan Officer",
        "description": "Processes loan applications, evaluates borrower qualifications, and manages loan portfolios. Maintains customer relationships throughout the lending process.",
        "salary": "4-12 LPA",
        "minimum_qualification": "Bachelor's degree in Finance or related field"
    },
    {
        "name": "Treasury Manager",
        "description": "Manages organization's cash flow, investments, and financial planning. Optimizes liquidity, manages financial instruments, and ensures funding requirements.",
        "salary": "12-30 LPA",
        "minimum_qualification": "MBA Finance with treasury management experience"
    },
    {
        "name": "Compliance Officer",
        "description": "Ensures banking operations comply with regulatory requirements and internal policies. Monitors transactions for suspicious activities and manages compliance programs.",
        "salary": "8-20 LPA",
        "minimum_qualification": "Law degree or Finance with compliance certification"
    },
    {
        "name": "Insurance Agent",
        "description": "Sells insurance policies, provides customer service, and processes insurance claims. Educates clients about insurance products and maintains policy records.",
        "salary": "3-10 LPA",
        "minimum_qualification": "Bachelor's degree with insurance licensing"
    }
]

# Courses in Banking & Financial Services
banking_courses = [
    {
        "name": "Master of Business Administration - Finance",
        "description": "Comprehensive postgraduate program covering financial management, investment analysis, corporate finance, international finance, and strategic financial planning."
    },
    {
        "name": "Chartered Accountancy",
        "description": "Professional qualification in accounting, auditing, taxation, and financial management governed by Institute of Chartered Accountants of India."
    },
    {
        "name": "Bachelor of Commerce",
        "description": "Undergraduate degree covering accounting principles, business economics, corporate law, taxation, and financial management fundamentals."
    },
    {
        "name": "Certified Financial Planner (CFP)",
        "description": "Professional certification focusing on comprehensive financial planning, investment strategies, retirement planning, and wealth management techniques."
    },
    {
        "name": "Company Secretary (CS)",
        "description": "Professional course covering corporate governance, company law, securities regulation, and compliance management for corporate entities."
    },
    {
        "name": "Cost and Management Accountant (CMA)",
        "description": "Professional qualification specializing in cost accounting, management accounting, financial planning, and strategic cost management."
    },
    {
        "name": "Banking and Insurance",
        "description": "Specialized program covering banking operations, financial services, insurance principles, risk management, and regulatory compliance."
    },
    {
        "name": "Financial Risk Management Certification",
        "description": "Professional program focusing on credit risk, market risk, operational risk assessment, and financial risk mitigation strategies."
    },
    {
        "name": "Investment Banking Certification",
        "description": "Specialized training in mergers and acquisitions, capital markets, securities trading, financial modeling, and investment analysis."
    },
    {
        "name": "Bachelor of Banking and Finance",
        "description": "Undergraduate program combining banking operations, financial markets, monetary policy, and international finance concepts."
    }
]

# Skills in Banking & Financial Services
banking_skills = [
    {
        "name": "Financial Analysis",
        "description": "Ability to evaluate financial statements, assess investment opportunities, and analyze market trends to make informed financial decisions."
    },
    {
        "name": "Risk Assessment",
        "description": "Systematic evaluation of potential financial losses, credit risks, and market uncertainties to minimize organizational exposure."
    },
    {
        "name": "Accounting Principles",
        "description": "Knowledge of financial accounting standards, bookkeeping practices, and financial reporting requirements for accurate record-keeping."
    },
    {
        "name": "Regulatory Compliance",
        "description": "Understanding of banking laws, financial regulations, and compliance requirements to ensure adherence to legal standards."
    },
    {
        "name": "Investment Management",
        "description": "Skills in portfolio construction, asset allocation, investment research, and performance evaluation for optimal returns."
    },
    {
        "name": "Credit Evaluation",
        "description": "Assessment of borrower creditworthiness, loan structuring, and credit risk analysis for lending decisions."
    },
    {
        "name": "Financial Modeling",
        "description": "Creation of mathematical models to analyze financial performance, forecast outcomes, and support strategic decision-making."
    },
    {
        "name": "Treasury Operations",
        "description": "Management of cash flows, liquidity planning, foreign exchange, and financial instrument trading for organizational needs."
    },
    {
        "name": "Customer Relationship Management",
        "description": "Building and maintaining client relationships, understanding customer needs, and providing appropriate financial solutions."
    },
    {
        "name": "Taxation Knowledge",
        "description": "Understanding of income tax laws, GST regulations, and tax planning strategies for individuals and businesses."
    }
]

# Add banking data to main collections
roles_data.extend(banking_roles)
courses_data.extend(banking_courses)
skills_data.extend(banking_skills)

print(f"Added Banking Sector - Roles: {len(banking_roles)}, Courses: {len(banking_courses)}, Skills: {len(banking_skills)}")
print(f"Total so far - Roles: {len(roles_data)}, Courses: {len(courses_data)}, Skills: {len(skills_data)}")