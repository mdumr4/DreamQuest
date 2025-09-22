
'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { Briefcase, BookOpen, ExternalLink, GraduationCap, IndianRupee, Lightbulb, UserCheck, TrendingUp, PanelLeftOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import * as LucideIcons from 'lucide-react';

import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from "framer-motion";
import ExploreSidebar from './explore-sidebar';

// Inlined type definition
type CareerPath = {
  title: string;
  description: string;
};

// Mock data since Genkit flows are removed
const mockJobDetails = {
    slide1: { title: "Mock Job", description: "This is a mock description for a job. It outlines responsibilities and impact.", avgSalary: "₹12 Lakhs per annum", minQualification: "Bachelor's degree" },
    slide2: { title: "A Day in the Life", routine: [{ task: "Attend meetings", icon: "Users" }, { task: "Write code", icon: "Code" }, { task: "Review designs", icon: "Palette" }, { task: "Deploy features", icon: "Server" }, { task: "Drink coffee", icon: "Coffee" }] },
    slide3: { title: "Skill Gap Analysis", skillGap: { yourSkills: ["React", "JavaScript"], skillsToBuild: ["Node.js", "GraphQL", "DevOps"] } },
    slide4: { title: "Industry Relevance", relevance: "This role is currently in high demand due to the growth of the tech industry and digital transformation." }
};

const mockCourseDetails = {
    slide1: { title: "Mock Course", description: "This mock course covers fundamental concepts and advanced topics for aspiring professionals." },
    slide2: { title: "Skills You Will Gain", skills: ["Critical Thinking", "Problem Solving", "Data Analysis", "Project Management", "Communication"] },
    slide3: { title: "Industry Relevance", relevance: "Graduates of this course are prepared for a variety of roles in today's competitive job market." }
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
];

const LoadingSkeleton = () => (
    <div className="flex h-full items-center justify-center">
        <div className="w-full max-w-3xl flex flex-col items-center text-center space-y-8 animate-in fade-in-50">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-16 w-3/4" />
            <div className="space-y-3 w-full max-w-2xl">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-5/6 mx-auto" />
            </div>
        </div>
    </div>
);

const Slide = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <section className={cn("h-full w-full flex-shrink-0 snap-center flex flex-col items-center justify-center p-8 md:p-16", className)}>
    {children}
  </section>
);

const Icon = ({ name, ...props }: { name: string } & LucideIcons.LucideProps) => {
    const LucideIcon = (LucideIcons as any)[name];
    if (!LucideIcon) {
      return <LucideIcons.HelpCircle {...props} />;
    }
    return <LucideIcon {...props} />;
};


export default function CareerDetailClientPage({ slug }: { slug: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 'jobs'; 
  
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const [details, setDetails] = useState<any | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const [jobPaths, setJobPaths] = useState<CareerPath[]>([]);
  const [coursePaths, setCoursePaths] = useState<CareerPath[]>([]);

  const displayedPaths = useMemo(() => {
    return type === 'jobs' ? jobPaths : coursePaths;
  }, [type, jobPaths, coursePaths]);


  useEffect(() => {
    const fetchDetails = async () => {
        setIsLoading(true);
        // Simulate fetching details
        await new Promise(resolve => setTimeout(resolve, 500));
        if (type === 'jobs') {
            setDetails({ ...mockJobDetails, slide1: { ...mockJobDetails.slide1, title } });
        } else {
            setDetails({ ...mockCourseDetails, slide1: { ...mockCourseDetails.slide1, title } });
        }
        setIsLoading(false);
    };
    
    fetchDetails();

    try {
        const storedJobPaths = localStorage.getItem('jobPaths');
        setJobPaths(storedJobPaths ? JSON.parse(storedJobPaths) : exampleJobPaths.slice(0,12));

        const storedCoursePaths = localStorage.getItem('coursePaths');
        setCoursePaths(storedCoursePaths ? JSON.parse(storedCoursePaths) : exampleCoursePaths.slice(0,12));
    } catch (error) {
        console.error("Failed to read from localStorage", error);
        setJobPaths(exampleJobPaths.slice(0,12));
        setCoursePaths(exampleCoursePaths.slice(0,12));
    }

  }, [title, type]);

  useEffect(() => {
    const handleBeforeUnload = () => {
        try {
            if (jobPaths.length > 0) {
                localStorage.setItem('jobPaths', JSON.stringify(jobPaths));
            }
            if (coursePaths.length > 0) {
                localStorage.setItem('coursePaths', JSON.stringify(coursePaths));
            }
        } catch (error) {
            console.error("Could not save paths to localStorage", error);
        }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
        handleBeforeUnload(); // Also save on component unmount
    };
  }, [jobPaths, coursePaths]);

  useEffect(() => {
    const container = mainContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
        const slideHeight = container.clientHeight;
        const currentSlide = Math.round(container.scrollTop / slideHeight);
        setActiveSlide(currentSlide);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);
  
  const renderJobSlides = (data: any) => [
    // Slide 1: Job Overview
    {
      content: (
        <div className="w-full max-w-4xl text-center flex flex-col items-center justify-center relative h-full">
            <div className="flex flex-col items-center">
              <p className='text-muted-foreground'>Imagine yourself as:</p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight animated-text-gradient bg-clip-text text-transparent mt-4">
                {data.slide1.title}
              </h1>
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto mt-6">
                {data.slide1.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-10">
                  <div className="info-card">
                      <IndianRupee className="h-5 w-5 text-green-500" />
                      <span className="font-medium text-sm">Avg. Salary: {data.slide1.avgSalary}</span>
                  </div>
                  <div className="info-card">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <span className="font-medium text-sm">Typical Degree: {data.slide1.minQualification}</span>
                  </div>
              </div>
            </div>
        </div>
      )
    },
    // Slide 2: A Day in the Life
    {
      content: (
        <div className="text-center max-w-3xl w-full flex flex-col items-center">
            <div className="p-4 bg-orange-400/20 rounded-full text-primary mb-4">
                <Briefcase className="h-8 md:h-10 w-8 md:w-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">{data.slide2.title}</h2>
            <p className="text-muted-foreground mt-2">A glimpse into the daily responsibilities of a {data.slide1.title}.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 w-full">
                {data.slide2.routine.map((item: any, index: number) => (
                    <Card key={index} className='text-center items-center flex flex-col p-4 justify-center'>
                        <Icon name={item.icon} className="h-8 w-8 mb-2 text-primary"/>
                        <p className='text-sm font-medium text-foreground/80'>{item.task}</p>
                    </Card>
                ))}
            </div>
        </div>
      )
    },
    // Slide 3: Skill Gap
    {
      content: (
        <div className="text-center max-w-5xl w-full flex flex-col items-center">
            <div className="p-4 bg-blue-400/20 rounded-full text-blue-500 mb-4">
                <UserCheck className="h-8 md:h-10 w-8 md:w-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">{data.slide3.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full max-w-4xl">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold">Your Current Skills</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                        {data.slide3.skillGap.yourSkills.length > 0 ? (
                           data.slide3.skillGap.yourSkills.map((skill: string) => <Badge key={skill} variant="secondary">{skill}</Badge>)
                        ) : <p className="text-sm text-muted-foreground">No relevant skills from your profile.</p>}
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg font-semibold">Skills to Build</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                         {data.slide3.skillGap.skillsToBuild.map((skill: string) => <Badge key={skill} variant="outline">{skill}</Badge>)}
                    </CardContent>
                </Card>
            </div>
        </div>
      )
    },
    // Slide 4: Industry Relevance
    {
      content: (
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <div className="text-center max-w-3xl w-full flex flex-col items-center">
              <div className="p-4 bg-purple-400/20 rounded-full text-purple-500 mb-4">
                  <TrendingUp className="h-8 md:h-10 w-8 md:w-10" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">{data.slide4.title}</h2>
              <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">{data.slide4.relevance}</p>
          </div>
        </div>
      )
    }
  ];
  
  const renderCourseSlides = (data: any) => [
      // Slide 1: Course Overview
      {
          content: (
              <div className="w-full max-w-4xl text-center flex flex-col items-center justify-center relative h-full">
                  <div className="flex flex-col items-center">
                    <p className='text-muted-foreground'>Course Details:</p>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight animated-text-gradient bg-clip-text text-transparent mt-4">
                        {data.slide1.title}
                    </h1>
                    <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto mt-6">
                        {data.slide1.description}
                    </p>
                  </div>
              </div>
          )
      },
      // Slide 2: Skills Gained
      {
          content: (
              <div className="text-center max-w-3xl w-full flex flex-col items-center">
                  <div className="p-4 bg-green-400/20 rounded-full text-green-500 mb-4">
                      <Lightbulb className="h-8 md:h-10 w-8 md:w-10" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">{data.slide2.title}</h2>
                  <div className="flex flex-wrap gap-3 justify-center mt-8 w-full max-w-2xl">
                      {data.slide2.skills.map((skill: string) => (
                          <Badge key={skill} className="text-base px-4 py-2" variant="secondary">{skill}</Badge>
                      ))}
                  </div>
              </div>
          )
      },
      // Slide 3: Industry Relevance
      {
          content: (
            <div className="relative w-full h-full flex flex-col items-center justify-center">
                <div className="text-center max-w-3xl w-full flex flex-col items-center">
                    <div className="p-4 bg-purple-400/20 rounded-full text-purple-500 mb-4">
                        <TrendingUp className="h-8 md:h-10 w-8 md:w-10" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">{data.slide3.title}</h2>
                    <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl">{data.slide3.relevance}</p>
                </div>
            </div>
          )
      }
  ];

  const slides = details
  ? type === 'jobs'
    ? renderJobSlides(details)
    : renderCourseSlides(details)
  : [];

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  const googleJobsUrl = `https://www.google.com/search?ibp=htl;jobs&q=${encodeURIComponent(title)}+jobs+near+me`;


  return (
    <div className="flex flex-1 h-full overflow-hidden">
        {type === 'jobs' && (
            <Button asChild size="default" className="fixed top-20 right-6 z-40 button-gradient rounded-lg font-semibold">
                <Link href={googleJobsUrl} target="_blank" rel="noopener noreferrer">
                    Find jobs near you <ExternalLink className="ml-1.5 h-4 w-4" />
                </Link>
            </Button>
        )}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="hidden md:block absolute top-0 left-0 h-full z-30"
          >
            <ExploreSidebar
              paths={displayedPaths}
              activePath={title}
              type={type as 'jobs' | 'courses'}
              onToggle={() => setIsSidebarOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex-1 bg-background overflow-hidden h-full flex relative">
        <AnimatePresence>
        {!isSidebarOpen && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute left-4 top-4 z-40 hidden md:block"
            >
                <Button 
                    onClick={() => setIsSidebarOpen(true)} 
                    variant="ghost" 
                    size="icon"
                    className="bg-background/50 backdrop-blur-sm border"
                >
                    <PanelLeftOpen className="h-5 w-5 text-muted-foreground" />
                </Button>
            </motion.div>
        )}
        </AnimatePresence>
        
        <main 
          ref={mainContainerRef}
          className="relative h-full flex-1 overflow-y-auto snap-y snap-mandatory"
        >
          {isLoading ? (
            <LoadingSkeleton />
          ) : !details ? (
              <div className="flex h-full items-center justify-center text-center p-4">
                  <div>
                      <h2 className="text-2xl font-semibold">Could not load details</h2>
                      <p className="text-muted-foreground mt-2">There was an error fetching the information for {title}.</p>
                  </div>
              </div>
          ) : (
            <>
              {slides.map((slide, index) => (
                  <Slide key={index}>
                      <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ root: mainContainerRef, amount: 0.6 }}
                          transition={{ duration: 0.5 }}
                          className="w-full h-full flex items-center justify-center"
                      >
                         {slide.content}
                      </motion.div>
                  </Slide>
              ))}
            </>
          )}
        </main>
      </div>
    </div>
  );
}
