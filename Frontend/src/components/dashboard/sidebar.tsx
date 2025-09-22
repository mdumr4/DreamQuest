
"use client";

import { useState } from 'react';
import { GraduationCap, Leaf, Dumbbell, Heart, RefreshCw } from 'lucide-react';
import RemovableBadge from './removable-badge';
import { ScrollArea } from '../ui/scroll-area';
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';
import { Separator } from '../ui/separator';
import SidebarInputView from './sidebar-input-view';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '../ui/tooltip';


export type ProfileData = {
  role: string[];
  organization: string;
  tasks: string;
  level: string;
  qualification: string[];
  subjects: string[];
  skills: string[];
  interests: string[];
};

type SidebarProps = {
  profile: ProfileData;
  isStudent: boolean;
  onUpdateItems: (itemType: 'role' | 'qualification' | 'skills' | 'subjects' | 'interests' | 'level', values: string[]) => void;
  onRemoveItem: (itemType: 'role' | 'qualification' | 'skills' | 'subjects' | 'interests' | 'level', value: string) => void;
  isDirty: boolean;
  onRegenerate: () => void;
};

export type Category = 'role' | 'qualification' | 'skills' | 'interests';

type SectionProps = {
    icon: React.ReactNode;
    title: string;
    items: string[];
    onRemove: (value: string) => void;
    badgeClassName: string;
    category: Category;
    onAddClick: () => void;
    validationMessage?: string;
}

const sectionVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

const Section = ({ icon, title, items, onRemove, badgeClassName, category, onAddClick, validationMessage }: SectionProps) => {
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-3">
                {icon}
                <h3 className="text-2xl font-semibold text-foreground/90">{title}</h3>
            </div>
            <div className="pl-10 space-y-3">
                <div className="flex flex-wrap gap-3 items-center">
                  {items.map((item, index) => (
                      <RemovableBadge key={`${item}-${index}`} value={item} onRemove={() => onRemove(item)} className={badgeClassName} />
                  ))}
                  <Badge
                    onClick={onAddClick}
                    className={cn("cursor-pointer py-2.5 px-5 text-base rounded-full", "badge-add")}
                    role="button"
                  >
                    + Add {category}
                  </Badge>
                </div>
                {validationMessage && (
                  <p className="text-sm text-destructive animate-in fade-in-0">{validationMessage}</p>
                )}
            </div>
        </div>
    )
}

export default function Sidebar({ profile, onUpdateItems, onRemoveItem, isDirty, onRegenerate }: SidebarProps) {
  const [editingSection, setEditingSection] = useState<Category | null>(null);
  const [showSkillsWarning, setShowSkillsWarning] = useState(false);

  const combinedSkills = Array.from(new Set([...profile.skills, ...profile.subjects]));
  const professionalExperience = profile.role.filter(r => r.toLowerCase() !== 'student');
  const hasExperienceOrEducation = professionalExperience.length > 0 || profile.qualification.length > 0;
  const hasEnoughSkills = combinedSkills.length >= 3;

  const handleUpdate = (
    category: Category,
    values: string[],
    level?: string,
    interests?: string,
    subjects?: string[]
  ) => {
    if (category === 'qualification') {
      if (level) onUpdateItems('level', [level]);
    }
    if (interests) {
      // This is for Class 12 or below student flow
      onUpdateItems('interests', interests.split(',').map(s => s.trim()));
    }
    if (subjects) {
      onUpdateItems('subjects', subjects);
    }
    if(category === 'interests') {
      onUpdateItems('interests', values);
    } else {
      onUpdateItems(category, values);
    }
    setEditingSection(null);
  }

  const handleSkillsRemove = (value: string) => {
    if (combinedSkills.length <= 3) {
      setShowSkillsWarning(true);
      setTimeout(() => setShowSkillsWarning(false), 3000);
      return;
    }
    if (profile.subjects.includes(value)) {
      onRemoveItem('subjects', value);
    } else {
      onRemoveItem('skills', value);
    }
  }
  
  const handleQualificationRemove = (value: string) => {
    onRemoveItem('qualification', value);
    if (profile.qualification.length === 1) {
      onRemoveItem('level', profile.level);
    }
  }

  const isRegenerateDisabled = () => {
    return !hasExperienceOrEducation || !hasEnoughSkills;
  }

  const disabled = isRegenerateDisabled();

  const getTooltipContent = () => {
    if (disabled) {
        if (!hasExperienceOrEducation && !hasEnoughSkills) {
            return "Please add at least 1 experience/education and 3 skills.";
        }
        if (!hasExperienceOrEducation) {
            return "Please add at least 1 experience or education.";
        }
        if (!hasEnoughSkills) {
            return "Please add at least 3 skills.";
        }
    }
    return null;
  }

  const renderDisplayMode = () => (
    <motion.div 
        key="display-mode"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={cn(
            "p-10 flex flex-col gap-12",
            isDirty && "pb-28" // Add padding to bottom when button is visible
        )}
    >
        <motion.div custom={0} initial="hidden" animate="visible" variants={sectionVariants}>
            <Section 
                icon={<Leaf className="h-6 w-6 text-green-500" />} 
                title="Experiences"
                items={professionalExperience}
                onRemove={(value) => onRemoveItem('role', value)}
                badgeClassName="badge-experience capitalize"
                category='role'
                onAddClick={() => setEditingSection('role')}
                validationMessage={isDirty && !hasExperienceOrEducation ? "Please add at least one experience or education." : undefined}
            />
        </motion.div>

        <motion.div custom={1} initial="hidden" animate="visible" variants={sectionVariants}>
            <Section 
                icon={<GraduationCap className="h-6 w-6 text-purple-500" />} 
                title="Education"
                items={profile.qualification}
                onRemove={handleQualificationRemove}
                badgeClassName="badge-education"
                category='qualification'
                onAddClick={() => setEditingSection('qualification')}
                validationMessage={isDirty && professionalExperience.length === 0 && profile.qualification.length === 0 ? "Please add at least one experience or education." : undefined}
            />
        </motion.div>

        <motion.div custom={2} initial="hidden" animate="visible" variants={sectionVariants}>
            <Section 
                icon={<Dumbbell className="h-6 w-6 text-yellow-500" />} 
                title="Skills"
                items={combinedSkills}
                onRemove={handleSkillsRemove}
                badgeClassName="badge-skills"
                category='skills'
                onAddClick={() => setEditingSection('skills')}
                validationMessage={showSkillsWarning ? "At least 3 skills are required." : undefined}
            />
        </motion.div>
        
        <motion.div custom={3} initial="hidden" animate="visible" variants={sectionVariants}>
            <Section 
                icon={<Heart className="h-6 w-6 text-red-500" />} 
                title="Interests"
                items={profile.interests}
                onRemove={(value) => onRemoveItem('interests', value)}
                badgeClassName="badge-interests"
                category='interests'
                onAddClick={() => setEditingSection('interests')}
            />
        </motion.div>
    </motion.div>
  );

  return (
    <>
      <aside className="hidden w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl md:flex flex-col relative">
        <ScrollArea className="h-full">
            <AnimatePresence mode="wait">
                {editingSection ? (
                    <motion.div
                        key="input-mode"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="h-full"
                    >
                        <SidebarInputView 
                            category={editingSection}
                            onComplete={(values, level, interests, subjects) => handleUpdate(editingSection, values, level, interests, subjects)}
                            onCancel={() => setEditingSection(null)}
                        />
                    </motion.div>
                ) : (
                    renderDisplayMode()
                )}
            </AnimatePresence>
        </ScrollArea>
        <AnimatePresence>
            {isDirty && !editingSection && (
                <motion.div
                    className="absolute bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-sm border-t"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="w-full">
                            <Button 
                                size="lg" 
                                className="w-full button-gradient font-bold"
                                onClick={onRegenerate}
                                disabled={disabled}
                            >
                                <RefreshCw className="mr-2 h-4 w-4" />
                                Apply Changes & Regenerate
                            </Button>
                           </div>
                        </TooltipTrigger>
                        {disabled && (
                          <TooltipContent>
                            <p>{getTooltipContent()}</p>
                          </TooltipContent>
                        )}
                      </Tooltip>
                    </TooltipProvider>
                </motion.div>
            )}
        </AnimatePresence>
      </aside>
      <div className="block md:hidden p-4">
        <h2 className="text-lg font-semibold mb-4">Your Profile</h2>
        <Separator />
         <p className="text-muted-foreground py-4 text-sm">View and edit your profile details on a larger screen.</p>
      </div>
    </>
  );
}
