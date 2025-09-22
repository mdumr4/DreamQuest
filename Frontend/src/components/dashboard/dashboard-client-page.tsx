
"use client";

import { useEffect, useState, useMemo, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { union } from 'lodash';
import DashboardLayout from './dashboard-layout';
import Sidebar from './sidebar';
import MainContent from './main-content';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

// Inlined type definitions to remove dependencies
export type CareerPath = {
  title: string;
  description: string;
};

type NewsItem = {
    title: string;
    description: string;
    link: string;
    date: string;
};

const exampleJobPaths: CareerPath[] = [
    { title: "Data Scientist", description: "Analyze and interpret complex data to help organizations make better decisions." },
    { title: "Machine Learning Engineer", description: "Design and build machine learning and deep learning systems." },
    { title: "Full-Stack Developer", description: "Work on both the front-end and back-end of web applications." },
    { title: "Cloud Architect", description: "Design and oversee an organization's cloud computing strategy." },
    { title: "Security Analyst", description: "Protect computer networks and systems from cybersecurity threats." },
    { title: "UX Designer", description: "Create user-friendly and intuitive digital products and experiences." },
    { title: "Marketing Specialist", description: "Develop and execute marketing campaigns to promote products or services." },
    { title: "Product Manager", description: "Guide the success of a product and lead the cross-functional team that is responsible for improving it." },
    { title: "Software Engineer", description: "Apply engineering principles to the design, development, and maintenance of software." },
    { title: "AI Ethicist", description: "Ensure artificial intelligence is developed and used responsibly." },
    { title: "Robotics Engineer", description: "Build and program robots for automation in various industries." },
    { title: "Virtual Reality Developer", description: "Create immersive virtual experiences for various platforms." },
    { title: "Genetic Counselor", description: "Provide guidance on genetic diseases and inherited conditions." },
    { title: "Urban Planner", description: "Shape the development of cities, focusing on sustainability and community." },
    { title: "Financial Analyst", description: "Analyze financial data to help businesses make investment decisions." },
    { title: "Content Strategist", description: "Plan and oversee the creation and management of content." },
    { title: "Business Analyst", description: "Bridge the gap between IT and the business using data analytics." },
    { title: "Network Administrator", description: "Maintain computer infrastructures with an emphasis on networking." },
    { title: "Database Administrator", description: "Manage and maintain company databases, ensuring data integrity and security." },
    { title: "IT Support Specialist", description: "Provide technical assistance and support to users." },
    { title: "DevOps Engineer", description: "Work with developers and IT staff to oversee code releases." },
    { title: "Digital Marketer", description: "Use digital channels to generate leads and build brand awareness." },
    { title: "SEO Specialist", description: "Optimize websites to rank higher in search engine results." },
    { title: "UI Designer", description: "Focus on the visual layout and feel of a digital product." },
    { title: "Technical Writer", description: "Create clear and concise technical documentation." },
    { title: "Scrum Master", description: "Facilitate Agile development teams." },
    { title: "Data Engineer", description: "Develop and maintain data pipelines and architectures." },
    { title: "QA Engineer", description: "Ensure software quality through manual and automated testing." },
    { title: "Game Developer", description: "Create video games for various platforms." },
    { title: "Mobile App Developer", description: "Build applications for iOS and Android platforms." }
];

const exampleCoursePaths: CareerPath[] = [
    { title: "Big Data Analytics", description: "Learn to analyze large datasets to uncover patterns and insights." },
    { title: "Machine Learning", description: "Master algorithms that allow computers to learn from data." },
    { title: "Web Technology", description: "Understand the fundamentals of building and deploying web applications." },
    { title: "Cloud Computing", description: "Explore cloud services from providers like AWS, Azure, and Google Cloud." },
    { title: "Cybersecurity", description: "Learn techniques to protect systems and networks from digital attacks." },
    { title: "UX/UI Design", description: "Master the principles of creating user-centered and visually appealing designs." },
    { title: "Digital Marketing", description: "Study online marketing strategies, including SEO, SEM, and social media." },
    { title: "Project Management", description: "Learn methodologies like Agile and Scrum to lead projects effectively." },
    { title: "Blockchain Technology", description: "Understand the principles of decentralized ledgers and cryptocurrencies." },
    { title: "Artificial Intelligence", description: "Dive into the broad field of creating intelligent machines." },
    { title: "Data Visualization", description: "Learn to represent data graphically to communicate insights." },
    { title: "Mobile App Development", description: "Build applications for iOS and Android platforms." },
    { title: "Game Design", description: "Explore the creative and technical aspects of video game development." },
    { title: "Bioinformatics", description: "Apply computer science techniques to biological data." },
    { title: "Ethical Hacking", description: "Learn to find and fix security vulnerabilities in systems." },
    { title: "Advanced SQL", description: "Deepen your knowledge of database management and complex queries." },
    { title: "Python for Data Science", description: "Learn the most popular language for data analysis and machine learning." },
    { title: "React Native", description: "Build cross-platform mobile apps with a single codebase." },
    { title: "Advanced CSS and Sass", description: "Master modern styling techniques for beautiful web interfaces." },
    { title: "Go Programming", description: "Learn the fast and efficient language developed by Google." },
    { title: "Rust Programming", description: "Dive into a language focused on safety, speed, and concurrency." },
    { title: "Kotlin for Android", description: "Develop modern Android apps with Google's preferred language." },
    { title: "Swift for iOS", description: "Build native applications for Apple's ecosystem." },
    { title: "TensorFlow in Practice", description: "Get hands-on experience with Google's machine learning framework." },
    { title: "Kubernetes Administration", description: "Learn to deploy and manage containerized applications at scale." },
    { title: "Certified Information Systems Security Professional (CISSP)", description: "An advanced certification for cybersecurity professionals." },
    { title: "Unity Game Development", description: "Build 2D and 3D games with one of the most popular game engines." },
    { title: "Figma for UI/UX Design", description: "Master the collaborative design tool for modern product teams." },
    { title: "Agile with Atlassian Jira", description: "Learn to manage projects and track issues with a leading Agile tool." },
    { title: "Public Speaking Mastery", description: "Develop the confidence and skills to deliver compelling presentations." }
];

const exampleNewsItems: NewsItem[] = [
    { title: "Tech Industry Sees Surge in Demand for AI Specialists", description: "Companies are rapidly expanding their AI teams, creating new opportunities.", link: "#", date: "August 12, 2024" },
    { title: "The Rise of the 'Green-Collar' Workforce", description: "Sustainability roles are becoming mainstream across all sectors.", link: "#", date: "August 10, 2024" },
    { title: "Remote Work Here to Stay, But With a Hybrid Twist", description: "A new survey shows most companies are adopting flexible work policies.", link: "#", date: "August 9, 2024" },
    { title: "Why 'Soft Skills' Are Now Critical for Tech Roles", description: "Communication and collaboration are now as important as coding.", link: "#", date: "August 7, 2024" },
];

type DashboardClientPageProps = {
  profile: {
    name: string;
    roles: string[];
  }
};

export default function DashboardClientPage({ profile }: DashboardClientPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  
  const activeTab = (searchParams.get('tab') as 'identity' | 'explore' | 'news') || 'identity';
  const [statement, setStatement] = useState('');
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  
  const [isLoading, setIsLoading] = useState(true);
  const [isDirty, setIsDirty] = useState(false);

  const [profileData, setProfileData] = useState({
    role: profile?.roles || [],
    organization: '',
    tasks: '',
    level: '',
    qualification: [] as string[],
    skills: [] as string[],
    interests: [] as string[],
    subjects: [] as string[],
  });

  const isStudent = useMemo(() => 
    profileData.role.some(r => r.toLowerCase() === 'student'), 
    [profileData.role]
  );

  const fetchData = useCallback(() => {
    setIsLoading(true);
    // Simulate fetching data from a backend
    setTimeout(() => {
        setStatement("A creative and analytical individual with a background in [Your Field] and a strong passion for [Your Interests]. Eager to apply a robust skill set in [Your Skills] to tackle complex and challenging problems, with a focus on developing innovative solutions that create a meaningful and lasting impact. This professional is driven by a desire to continuously learn, adapt to new technologies, and collaborate with diverse teams to drive progress and achieve outstanding results in a dynamic environment.");
        setNewsItems(exampleNewsItems);
        setIsLoading(false);
        setIsDirty(false); // Reset dirty state after fetching
    }, 1000);
  }, []);
  
  useEffect(() => {
    const roleParam = searchParams.get('role');
    const qualificationParam = searchParams.get('qualification');
    
    setProfileData(prev => ({
        ...prev,
        role: union(prev.role, roleParam ? roleParam.split(',') : []),
        organization: searchParams.get('organization') || '',
        tasks: searchParams.get('tasks') || '',
        level: searchParams.get('level') || '',
        qualification: union(prev.qualification, qualificationParam ? qualificationParam.split(',') : []),
        subjects: union(prev.subjects, searchParams.get('subjects')?.split(',') || []),
        skills: union(prev.skills, searchParams.get('skills')?.split(',') || []),
        interests: union(prev.interests, searchParams.get('interests')?.split(',') || []),
    }));
    
    fetchData();
  }, [fetchData, searchParams]);

  const handleUpdateItems = (itemType: 'role' | 'qualification' | 'skills' | 'subjects' | 'interests' | 'level', values: string[]) => {
    if (!values || values.length === 0) return;
    
    setProfileData(prev => {
        if (itemType === 'level') {
            return { ...prev, level: values[0] };
        }
        const currentItems = prev[itemType as keyof typeof prev] as string[];
        const updatedItems = union(currentItems, values);
        
        return { ...prev, [itemType]: updatedItems };
    });
    setIsDirty(true);
  };

  const handleRemoveItem = (itemType: 'role' | 'qualification' | 'skills' | 'subjects' | 'interests' | 'level', value: string) => {
    setProfileData(prev => {
      if (itemType === 'level') {
        return { ...prev, level: '' };
      }
      const currentItems = prev[itemType as keyof typeof prev] as string[];
      const updatedProfile = {
          ...prev,
          [itemType]: currentItems.filter((item: string) => item.toLowerCase() !== value.toLowerCase())
      };
      return updatedProfile;
    });
    setIsDirty(true);
  };

  const triggerRegeneration = useCallback(() => {
    fetchData();
    toast({ title: "Content Regenerated", description: "Your dashboard has been updated." });
  }, [fetchData, toast]);

  const handleNavigateToExplore = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', 'explore');
    router.push(`/dashboard?${params.toString()}`);
  }, [router, searchParams]);

  const handleNavigateToMentor = useCallback(() => {
      router.push('/mentor');
  }, [router]);

  return (
    <DashboardLayout>
      <div className={cn("relative flex flex-1 flex-col md:flex-row overflow-hidden")}>
         <div 
            className="absolute inset-0 w-full h-full opacity-50"
            style={{
                backgroundImage: `
                    radial-gradient(circle at 10% 20%, hsl(var(--primary)/0.05), transparent 40%),
                    radial-gradient(circle at 90% 80%, hsl(var(--accent)/0.05), transparent 40%)
                `,
                animation: 'pulse-loader 10s infinite alternate'
            }}
          />
        {activeTab === 'identity' && (
          <Sidebar 
              profile={profileData} 
              isStudent={isStudent}
              onUpdateItems={handleUpdateItems}
              onRemoveItem={handleRemoveItem}
              isDirty={isDirty}
              onRegenerate={triggerRegeneration}
          />
        )}
        <MainContent
            activeTab={activeTab}
            statement={statement}
            isLoading={isLoading}
            onRegenerate={triggerRegeneration}
            newsItems={newsItems}
            isNewsLoading={isLoading}
            jobPaths={exampleJobPaths}
            coursePaths={exampleCoursePaths}
            isExploreLoading={isLoading}
            isSidebarVisible={activeTab === 'identity'}
            educationLevel={profileData.level}
            onNavigateToExplore={handleNavigateToExplore}
            onNavigateToMentor={handleNavigateToMentor}
        />
      </div>
    </DashboardLayout>
  );
}
