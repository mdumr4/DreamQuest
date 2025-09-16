# HEALTHCARE & PHARMACEUTICALS SECTOR
# Roles in Healthcare & Pharmaceuticals
healthcare_roles = [
    {
        "name": "Doctor",
        "description": "Diagnoses and treats illnesses, injuries, and medical conditions. Provides comprehensive healthcare services, performs medical procedures, and develops treatment plans for patients.",
        "salary": "10-50 LPA",
        "minimum_qualification": "MBBS degree"
    },
    {
        "name": "Surgeon",
        "description": "Performs surgical procedures to treat diseases, injuries, and deformities. Specializes in various surgical techniques and post-operative patient care.",
        "salary": "15-60 LPA",
        "minimum_qualification": "MBBS with MS specialization"
    },
    {
        "name": "Pharmacist",
        "description": "Dispenses medications, provides drug information, and ensures safe pharmaceutical care. Manages pharmacy operations and counsels patients on medication usage.",
        "salary": "4-12 LPA",
        "minimum_qualification": "Bachelor of Pharmacy (B.Pharm)"
    },
    {
        "name": "Nurse",
        "description": "Provides direct patient care, monitors patient conditions, and assists in medical procedures. Implements nursing care plans and health education programs.",
        "salary": "3-8 LPA",
        "minimum_qualification": "Bachelor of Science in Nursing (B.Sc Nursing)"
    },
    {
        "name": "Medical Laboratory Technician",
        "description": "Conducts laboratory tests and analyses to aid in disease diagnosis and treatment. Operates medical equipment and maintains laboratory quality standards.",
        "salary": "3-7 LPA",
        "minimum_qualification": "Bachelor's in Medical Laboratory Technology"
    },
    {
        "name": "Physiotherapist",
        "description": "Provides rehabilitation services to patients with physical disabilities, injuries, or chronic conditions. Develops and implements therapeutic exercise programs.",
        "salary": "4-10 LPA",
        "minimum_qualification": "Bachelor of Physiotherapy (BPT)"
    },
    {
        "name": "Clinical Research Associate",
        "description": "Monitors clinical trials and ensures compliance with research protocols and regulatory standards. Manages study documentation and data integrity.",
        "salary": "6-15 LPA",
        "minimum_qualification": "Life Sciences degree with clinical research training"
    },
    {
        "name": "Medical Representative",
        "description": "Promotes pharmaceutical products to healthcare professionals and institutions. Provides product information, builds relationships, and achieves sales targets.",
        "salary": "4-12 LPA",
        "minimum_qualification": "Bachelor's in Life Sciences or Pharmacy"
    },
    {
        "name": "Hospital Administrator",
        "description": "Manages healthcare facility operations, coordinates departments, and ensures efficient patient care delivery. Oversees budgets, policies, and staff management.",
        "salary": "8-20 LPA",
        "minimum_qualification": "MBA in Hospital Management or equivalent"
    },
    {
        "name": "Biomedical Engineer",
        "description": "Designs and maintains medical equipment and devices. Applies engineering principles to healthcare technology and ensures equipment safety and functionality.",
        "salary": "6-18 LPA",
        "minimum_qualification": "BTech in Biomedical Engineering"
    }
]

# Courses in Healthcare & Pharmaceuticals
healthcare_courses = [
    {
        "name": "Bachelor of Medicine and Bachelor of Surgery (MBBS)",
        "description": "Comprehensive medical degree covering human anatomy, physiology, pathology, pharmacology, and clinical medicine with extensive practical training."
    },
    {
        "name": "Bachelor of Pharmacy (B.Pharm)",
        "description": "Undergraduate program focusing on pharmaceutical sciences, drug formulation, pharmacology, medicinal chemistry, and pharmacy practice."
    },
    {
        "name": "Bachelor of Science in Nursing (B.Sc Nursing)",
        "description": "Professional degree program covering nursing fundamentals, patient care, medical-surgical nursing, community health, and healthcare management."
    },
    {
        "name": "Bachelor of Physiotherapy (BPT)",
        "description": "Specialized program in rehabilitation sciences covering anatomy, biomechanics, therapeutic exercises, and physical therapy techniques."
    },
    {
        "name": "Master of Surgery (MS)",
        "description": "Postgraduate medical degree providing advanced surgical training in various specialties including general surgery, orthopedics, and ophthalmology."
    },
    {
        "name": "Doctor of Medicine (MD)",
        "description": "Postgraduate medical degree offering specialization in internal medicine, pediatrics, psychiatry, and other medical disciplines."
    },
    {
        "name": "Bachelor of Ayurveda Medicine and Surgery (BAMS)",
        "description": "Traditional medicine degree combining ancient Ayurvedic principles with modern medical knowledge for holistic healthcare practice."
    },
    {
        "name": "Bachelor of Homeopathic Medicine and Surgery (BHMS)",
        "description": "Alternative medicine degree focusing on homeopathic principles, case taking, repertory, and natural healing methods."
    },
    {
        "name": "Master of Public Health (MPH)",
        "description": "Multidisciplinary program covering epidemiology, biostatistics, health policy, environmental health, and community health management."
    },
    {
        "name": "Clinical Research Certification",
        "description": "Professional program covering clinical trial protocols, regulatory affairs, pharmacovigilance, and good clinical practice standards."
    }
]

# Skills in Healthcare & Pharmaceuticals
healthcare_skills = [
    {
        "name": "Patient Care",
        "description": "Comprehensive skill involving direct patient interaction, assessment, treatment, and monitoring to ensure optimal health outcomes and comfort."
    },
    {
        "name": "Medical Diagnosis",
        "description": "Systematic process of identifying diseases and conditions through patient examination, medical history, and diagnostic tests interpretation."
    },
    {
        "name": "Pharmacology",
        "description": "Knowledge of drug mechanisms, interactions, side effects, and therapeutic applications for safe and effective medication management."
    },
    {
        "name": "Clinical Research",
        "description": "Methodology for conducting medical studies, analyzing health data, and evaluating treatment efficacy through scientific research protocols."
    },
    {
        "name": "Medical Equipment Operation",
        "description": "Technical proficiency in operating, maintaining, and troubleshooting various medical devices and diagnostic equipment."
    },
    {
        "name": "Infection Control",
        "description": "Practices and protocols to prevent and control the spread of infectious diseases in healthcare settings and communities."
    },
    {
        "name": "Medical Documentation",
        "description": "Accurate recording and maintenance of patient medical records, treatment plans, and healthcare information systems."
    },
    {
        "name": "Emergency Response",
        "description": "Immediate medical intervention skills for critical situations including CPR, first aid, and trauma management procedures."
    },
    {
        "name": "Laboratory Analysis",
        "description": "Technical skills for conducting medical tests, analyzing biological samples, and interpreting laboratory results for diagnosis."
    },
    {
        "name": "Healthcare Ethics",
        "description": "Understanding of moral principles, patient rights, confidentiality, and professional conduct standards in healthcare practice."
    }
]

# Add healthcare data to main collections
roles_data.extend(healthcare_roles)
courses_data.extend(healthcare_courses)
skills_data.extend(healthcare_skills)

print(f"Added Healthcare Sector - Roles: {len(healthcare_roles)}, Courses: {len(healthcare_courses)}, Skills: {len(healthcare_skills)}")
print(f"Total so far - Roles: {len(roles_data)}, Courses: {len(courses_data)}, Skills: {len(skills_data)}")