
"use client";

import React, { useMemo, useState, useRef, useEffect, useCallback } from 'react';
import { Briefcase, BookOpen, Check } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";

import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

// Inlined type definition
type CareerPath = {
  title: string;
  description: string;
};

type ExploreType = 'jobs' | 'courses';

type Position = { x: number; y: number };

type Node = {
  id: string;
  path: CareerPath;
  position: Position;
  width: number;
  height: number;
};

const ExplorePathsLoader = () => {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[70vh] bg-[#F8F9FA] animate-in fade-in-50 duration-500">
        <div className="relative flex items-center justify-center">
          <div 
            className="absolute w-64 h-64 rounded-full blur-3xl opacity-60 animate-pulse-loader"
            style={{
              background: 'radial-gradient(circle, #A9D6E5 0%, #A8DAB5 100%)',
            }}
          />
          <div className="relative flex flex-col items-center text-center">
            <p className="text-base font-medium text-[#5f6368]">Supplementing with AI results...</p>
          </div>
        </div>
      </div>
    );
};

const ExploreBubble = ({ node, delay, type, onNavigate }: { node: Node, delay: number, type: ExploreType, onNavigate: () => void }) => {
    const slug = node.path.title.toLowerCase().replace(/[\s/]+/g, '-').replace(/[^a-z0-9-]/g, '');
    const href = `/explore/${slug}?type=${type}`;
    const router = useRouter();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onNavigate();
        router.push(href);
    };

    return (
        <motion.div
            className="explore-bubble absolute group cursor-pointer z-20"
            initial={{ opacity: 0, scale: 0.5, x: '50vw', y: '50vh' }}
            animate={{
                opacity: 1,
                scale: 1,
                x: node.position.x,
                y: node.position.y,
                transition: { delay, duration: 1, ease: [0.16, 1, 0.3, 1] }
            }}
            exit={{
                opacity: 0,
                scale: 0.5,
                x: '50vw',
                y: '50vh',
                transition: { duration: 0.5, ease: 'easeOut' }
            }}
            whileHover={{ scale: 1.1, zIndex: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            style={{
                width: node.width,
                height: node.height,
            }}
        >
            <Link href={href} onClick={handleClick} className="flex items-center gap-2 p-2">
                <div className="h-2 w-2 rounded-full bg-blue-500 transition-all duration-300 group-hover:scale-150 flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-700 group-hover:text-gray-900 font-medium transition-colors duration-300 text-center">
                    {node.path.title}
                </span>
            </Link>
        </motion.div>
    );
};

const FilterModal = ({ onApply, onCancel, initialType }: { onApply: (type: ExploreType) => void; onCancel: () => void; initialType: ExploreType }) => {
    const [selectedType, setSelectedType] = useState<ExploreType>(initialType);

    return (
        <div className="flex flex-col items-center justify-center p-6 text-center w-full h-full">
            <h2 className="text-xl font-bold text-gray-800">What would you like to explore?</h2>
            <div className="flex flex-col gap-4 w-full max-w-xs mt-6">
                <button
                    onClick={() => setSelectedType('jobs')}
                    className={cn(
                        "flex items-center w-full p-4 rounded-lg border-2 transition-all duration-200",
                        selectedType === 'jobs' ? "bg-blue-50 border-blue-500" : "bg-gray-50 border-gray-200 hover:border-gray-300"
                    )}
                >
                    <Briefcase className="h-6 w-6 mr-4 text-blue-600" />
                    <span className="font-semibold text-gray-700">Explore Jobs</span>
                    {selectedType === 'jobs' && <Check className="ml-auto h-5 w-5 text-blue-600" />}
                </button>
                <button
                    onClick={() => setSelectedType('courses')}
                    className={cn(
                        "flex items-center w-full p-4 rounded-lg border-2 transition-all duration-200",
                        selectedType === 'courses' ? "bg-green-50 border-green-500" : "bg-gray-50 border-gray-200 hover:border-gray-300"
                    )}
                >
                    <BookOpen className="h-6 w-6 mr-4 text-green-600" />
                    <span className="font-semibold text-gray-700">Explore Courses</span>
                    {selectedType === 'courses' && <Check className="ml-auto h-5 w-5 text-green-600" />}
                </button>
            </div>
             <div className="flex items-center gap-4 mt-8">
                <Button onClick={() => onApply(selectedType)} className="bg-blue-600 hover:bg-blue-700 px-6 py-2 h-auto">Apply</Button>
                <Button variant="link" onClick={onCancel}>Cancel</Button>
            </div>
        </div>
    );
};


export default function ExplorePathsView({ isLoading, jobPaths, coursePaths, educationLevel }: { isLoading: boolean, jobPaths: CareerPath[], coursePaths: CareerPath[], educationLevel: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const getDefaultExploreType = () => {
        return educationLevel === 'Class 12 or Below' ? 'courses' : 'jobs';
    };

    const [exploreType, setExploreType] = useState<ExploreType>(getDefaultExploreType());
    const [nodes, setNodes] = useState<Node[]>([]);
    const [key, setKey] = useState(Date.now());

    useEffect(() => {
        setExploreType(getDefaultExploreType());
    }, [educationLevel]);

    const pathsToDisplay = useMemo(() => {
        const sourcePaths = exploreType === 'jobs' ? jobPaths : coursePaths;
        return sourcePaths.sort(() => 0.5 - Math.random()).slice(0, 30);
    }, [jobPaths, coursePaths, exploreType]);

    const handleNavigate = () => {
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

    const handleApplyFilter = (type: ExploreType) => {
        setIsModalOpen(false);
        if (type !== exploreType) {
            setExploreType(type);
            setKey(Date.now());
        }
    };
    
    const layoutEngine = useCallback((containerWidth: number, containerHeight: number, paths: CareerPath[]) => {
        if (containerWidth === 0 || containerHeight === 0) return [];
        
        const centralHubRadius = Math.min(containerWidth, containerHeight) * 0.25 + 80;
        const nodePadding = 20;
        const placedNodes: Node[] = [];

        paths.forEach((path) => {
            const nodeWidth = 100 + path.title.length * 5; 
            const nodeHeight = 40;

            let validPosition = false;
            let x = 0, y = 0;
            let attempts = 0;

            while (!validPosition && attempts < 1000) {
                attempts++;
                
                x = Math.random() * (containerWidth - nodeWidth);
                y = Math.random() * (containerHeight - nodeHeight);

                const nodeBox = {
                    left: x - nodePadding,
                    right: x + nodeWidth + nodePadding,
                    top: y - nodePadding,
                    bottom: y + nodeHeight + nodePadding
                };
                
                const distToCenterSq = Math.pow(x + nodeWidth/2 - containerWidth / 2, 2) + Math.pow(y + nodeHeight/2 - containerHeight / 2, 2);
                if (distToCenterSq < Math.pow(centralHubRadius, 2)) {
                    continue;
                }

                let hasCollision = false;
                for (const existingNode of placedNodes) {
                    const existingNodeBox = {
                        left: existingNode.position.x - nodePadding,
                        right: existingNode.position.x + existingNode.width + nodePadding,
                        top: existingNode.position.y - nodePadding,
                        bottom: existingNode.position.y + existingNode.height + nodePadding,
                    };

                    if (
                        nodeBox.left < existingNodeBox.right &&
                        nodeBox.right > existingNodeBox.left &&
                        nodeBox.top < existingNodeBox.bottom &&
                        nodeBox.bottom > existingNodeBox.top
                    ) {
                        hasCollision = true;
                        break;
                    }
                }

                if (!hasCollision) {
                    validPosition = true;
                }
            }

            if (validPosition) {
                placedNodes.push({
                    id: path.title,
                    path,
                    position: { x, y },
                    width: nodeWidth,
                    height: nodeHeight,
                });
            }
        });
        return placedNodes;
    }, []);

    useEffect(() => {
        if (isLoading || !containerRef.current) return;
        
        const observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                const { width, height } = entry.contentRect;
                setNodes(layoutEngine(width, height, pathsToDisplay));
            }
        });

        observer.observe(containerRef.current);
        
        return () => observer.disconnect();
    }, [isLoading, pathsToDisplay, layoutEngine, key]);
    
    
    if (isLoading) {
        return <ExplorePathsLoader />;
    }

    if (!pathsToDisplay || pathsToDisplay.length === 0) {
        return (
            <div className="flex flex-col h-full min-h-[400px] items-center justify-center rounded-xl bg-background p-8 text-center animate-in fade-in-50 duration-500">
                <h3 className="text-xl font-semibold">No Suggestions Found</h3>
                <p className="text-muted-foreground mt-2">
                    We couldn't find any suggestions for your profile right now.
                </p>
            </div>
        );
    }

    return (
        <div ref={containerRef} className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-[#F8F9FA]">
            <motion.div 
              className="relative z-30 flex items-center justify-center"
              layout
            >
                <div className="central-hub-gradient z-0" />
                <motion.div
                  className="relative bg-white flex flex-col items-center justify-center text-center p-4 shadow-2xl cursor-pointer z-10"
                  layout
                  initial={{ borderRadius: '50%' }}
                  animate={{
                    width: isModalOpen ? 380 : 192,
                    height: isModalOpen ? 380 : 192,
                    borderRadius: isModalOpen ? 32 : '50%',
                  }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  onClick={() => !isModalOpen && setIsModalOpen(true)}
                >
                    <AnimatePresence>
                        {isModalOpen ? (
                            <motion.div
                                key="modal-content"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { delay: 0.2 } }}
                                exit={{ opacity: 0, transition: {duration: 0.1} }}
                                className="w-full h-full"
                            >
                                <FilterModal onApply={handleApplyFilter} onCancel={() => setIsModalOpen(false)} initialType={exploreType} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="hub-content"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { delay: 0.2 } }}
                                exit={{ opacity: 0, transition: { duration: 0.1 } }}
                                className="text-center"
                            >
                                <p className="text-gray-600 text-sm">Explore paths based on...</p>
                                <div className="flex items-center gap-4 mt-2 justify-center">
                                    <Briefcase className={cn("h-6 w-6 transition-colors", exploreType === 'jobs' ? "text-primary" : "text-gray-500")} />
                                    <BookOpen className={cn("h-6 w-6 transition-colors", exploreType === 'courses' ? "text-primary" : "text-gray-500")} />
                                </div>
                           </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.div>

            <AnimatePresence>
                {!isModalOpen && (
                    <motion.div className="absolute inset-0 z-10" key={key}>
                        {nodes.map((node, index) => (
                            <ExploreBubble
                                key={`${key}-${node.id}`}
                                node={node}
                                delay={0.3 + index * 0.03}
                                type={exploreType}
                                onNavigate={handleNavigate}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

    