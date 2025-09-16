# MEDIA & ENTERTAINMENT SECTOR
# Roles in Media & Entertainment
media_roles = [
    {
        "name": "Content Writer",
        "description": "Creates written content for various media platforms including websites, blogs, social media, and marketing materials. Researches topics and adapts writing style for target audiences.",
        "salary": "3-10 LPA",
        "minimum_qualification": "Bachelor's in English, Journalism, or Communications"
    },
    {
        "name": "Film Director",
        "description": "Leads film production, guides actors and crew, and makes creative decisions. Oversees all aspects of filmmaking from pre-production to post-production.",
        "salary": "10-100 LPA",
        "minimum_qualification": "Bachelor's in Film Studies or equivalent experience"
    },
    {
        "name": "Graphic Designer",
        "description": "Creates visual content for print and digital media using design software. Develops logos, advertisements, websites, and marketing materials.",
        "salary": "4-12 LPA",
        "minimum_qualification": "Bachelor's in Graphic Design or Fine Arts"
    },
    {
        "name": "Video Editor",
        "description": "Edits raw video footage, adds effects and sound, and creates final video products. Works on films, television shows, documentaries, and digital content.",
        "salary": "4-15 LPA",
        "minimum_qualification": "Bachelor's in Media Arts or technical training"
    },
    {
        "name": "Journalist",
        "description": "Investigates and reports news stories for newspapers, magazines, television, or online platforms. Conducts interviews, researches facts, and writes articles.",
        "salary": "4-15 LPA",
        "minimum_qualification": "Bachelor's in Journalism or Mass Communications"
    },
    {
        "name": "Social Media Manager",
        "description": "Manages brand presence on social media platforms, creates content strategies, and engages with online communities. Analyzes social media metrics and trends.",
        "salary": "4-12 LPA",
        "minimum_qualification": "Bachelor's in Marketing or Communications"
    },
    {
        "name": "Radio Jockey",
        "description": "Hosts radio programs, plays music, conducts interviews, and entertains listeners. Interacts with audience through calls and social media.",
        "salary": "3-8 LPA",
        "minimum_qualification": "Bachelor's degree with broadcasting training"
    },
    {
        "name": "Photographer",
        "description": "Captures professional photographs for various purposes including events, portraits, commercial products, and artistic projects. Handles photo editing and client relations.",
        "salary": "3-12 LPA",
        "minimum_qualification": "Bachelor's in Photography or Fine Arts"
    },
    {
        "name": "Television Producer",
        "description": "Oversees television program production, manages budgets, and coordinates creative teams. Handles programming decisions and content development.",
        "salary": "8-25 LPA",
        "minimum_qualification": "Bachelor's in Media Production or Communications"
    },
    {
        "name": "Digital Marketing Specialist",
        "description": "Develops online marketing campaigns, manages digital advertising, and analyzes campaign performance. Creates strategies for brand promotion across digital channels.",
        "salary": "5-18 LPA",
        "minimum_qualification": "Bachelor's in Marketing with digital skills"
    }
]

# Courses in Media & Entertainment
media_courses = [
    {
        "name": "Bachelor of Journalism and Mass Communication",
        "description": "Comprehensive program covering news reporting, media ethics, communication theory, broadcasting, and digital journalism techniques."
    },
    {
        "name": "Bachelor of Fine Arts",
        "description": "Creative degree program focusing on visual arts, design principles, artistic techniques, and creative expression across various media."
    },
    {
        "name": "Film and Television Production Course",
        "description": "Specialized program covering cinematography, direction, editing, sound design, and all aspects of film and television production."
    },
    {
        "name": "Digital Marketing Certification",
        "description": "Professional training in online marketing strategies, social media marketing, content creation, and digital advertising techniques."
    },
    {
        "name": "Graphic Design Diploma",
        "description": "Technical program covering design software, visual communication, typography, branding, and commercial design applications."
    },
    {
        "name": "Photography Certification",
        "description": "Professional training in camera techniques, lighting, composition, photo editing, and commercial photography practices."
    },
    {
        "name": "Radio and Television Broadcasting",
        "description": "Program covering broadcasting techniques, voice training, program production, and media technology for radio and television."
    },
    {
        "name": "Creative Writing Course",
        "description": "Training in various writing forms including fiction, non-fiction, screenwriting, and content creation for different media platforms."
    },
    {
        "name": "Animation and Multimedia",
        "description": "Technical program covering 2D/3D animation, visual effects, multimedia production, and digital content creation."
    },
    {
        "name": "Public Relations Certification",
        "description": "Professional program in communication strategies, media relations, crisis management, and brand reputation management."
    }
]

# Skills in Media & Entertainment
media_skills = [
    {
        "name": "Creative Writing",
        "description": "Ability to produce engaging written content across various formats including articles, scripts, stories, and marketing copy."
    },
    {
        "name": "Video Production",
        "description": "Technical skills in filming, editing, sound recording, and post-production work for creating professional video content."
    },
    {
        "name": "Adobe Creative Suite",
        "description": "Proficiency in professional design and editing software including Photoshop, Illustrator, Premiere Pro, and After Effects."
    },
    {
        "name": "Social Media Marketing",
        "description": "Strategy development and execution for brand promotion across various social media platforms and online communities."
    },
    {
        "name": "Photography",
        "description": "Technical and artistic skills in capturing professional images, understanding lighting, composition, and photo editing."
    },
    {
        "name": "Content Strategy",
        "description": "Planning and development of content marketing strategies aligned with brand objectives and audience engagement."
    },
    {
        "name": "Broadcasting",
        "description": "Communication skills for radio, television, and digital media presentation including voice training and audience engagement."
    },
    {
        "name": "Graphic Design",
        "description": "Visual design skills for creating logos, advertisements, layouts, and branding materials using design principles."
    },
    {
        "name": "Storytelling",
        "description": "Ability to create compelling narratives across different media formats that engage and connect with audiences."
    },
    {
        "name": "Media Production",
        "description": "Comprehensive skills in planning, producing, and managing media projects from concept to final delivery."
    }
]

# Add media data to main collections
roles_data.extend(media_roles)
courses_data.extend(media_courses)
skills_data.extend(media_skills)

print(f"Added Media Sector - Roles: {len(media_roles)}, Courses: {len(media_courses)}, Skills: {len(media_skills)}")
print(f"Total so far - Roles: {len(roles_data)}, Courses: {len(courses_data)}, Skills: {len(skills_data)}")