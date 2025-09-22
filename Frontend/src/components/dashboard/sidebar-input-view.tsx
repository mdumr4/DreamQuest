
'use client';

import { useState, useEffect, useCallback } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Check, X, ArrowRight, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Category } from './sidebar';
import ItemSelection from '../aspirant/item-selection';
import { Textarea } from '../ui/textarea';
import GeneratingInsights from '../shared/generating-insights';

type SidebarInputViewProps = {
  category: Category;
  onComplete: (values: string[], level?: string, interests?: string, subjects?: string[]) => void;
  onCancel: () => void;
};

const educationLevels = [
    "Class 12 or Below",
    "Diploma",
    "Bachelor’s Degree",
    "Master’s Degree",
    "Doctorate",
    "Professional Degree",
    "Professional Certificate (e.g., NPTEL, Coursera)",
    "Other",
];

const categoryConfig = {
    role: { title: "Add a new role", placeholder: "e.g., Software Engineer" },
    qualification: { title: "Add a new qualification", placeholder: "e.g., B.Tech in Computer Science" },
    skills: { title: "Add new skills", placeholder: "e.g., React, Python, SQL" },
    interests: { title: "Add new interests", placeholder: "e.g., AI, Hiking, Photography" },
};

const QUALIFICATION_PLACEHOLDERS = ["AI", "Machine Learning", "Data Science", "Web Development", "Robotics", "Bioinformatics", "Digital Marketing", "Graphic Design"];
const ROLE_PLACEHOLDERS = ["Student", "Clerk", "Project Manager", "Artist", "Engineer", "Researcher", "Writer", "Sales Associate"];

const ALL_SKILLS = ["JavaScript", "React", "Node.js", "Python", "SQL", "Communication", "Leadership", "Teamwork", "Problem Solving", "Data Analysis", "Project Management", "UI/UX Design"];

export default function SidebarInputView({ category, onComplete, onCancel }: SidebarInputViewProps) {
  const [step, setStep] = useState(0);
  const [role, setRole] = useState('');
  const [level, setLevel] = useState('');
  const [qualification, setQualification] = useState('');
  const [interests, setInterests] = useState('');
  const [subjects, setSubjects] = useState<string[]>([]);
  const [suggestedSubjects, setSuggestedSubjects] = useState<string[]>([]);
  const [items, setItems] = useState<string[]>([]);
  const [placeholder, setPlaceholder] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    let placeholderInterval: NodeJS.Timeout;
    if (category === 'qualification' && step === 1) {
      setPlaceholder(QUALIFICATION_PLACEHOLDERS[0]);
      let i = 0;
      placeholderInterval = setInterval(() => {
        i = (i + 1) % QUALIFICATION_PLACEHOLDERS.length;
        setPlaceholder(QUALIFICATION_PLACEHOLDERS[i]);
      }, 2000);
    }
    if (category === 'role') {
        setPlaceholder(ROLE_PLACEHOLDERS[0]);
        let i = 0;
        placeholderInterval = setInterval(() => {
          i = (i + 1) % ROLE_PLACEHOLDERS.length;
          setPlaceholder(ROLE_PLACEHOLDERS[i]);
        }, 2000);
    }
    return () => clearInterval(placeholderInterval);
  }, [category, step]);

  const handleSave = () => {
    let values: string[] = [];
    let educationLevel: string | undefined = undefined;
    let interestsValue: string | undefined = undefined;
    let subjectsValue: string[] | undefined = undefined;

    switch (category) {
      case 'role':
        values = role ? [role] : [];
        break;
      case 'qualification':
        educationLevel = level;
        if (level === 'Class 12 or Below') {
            interestsValue = interests;
            subjectsValue = subjects;
        } else {
            values = qualification ? [qualification] : [];
        }
        break;
      case 'skills':
        values = items;
        break;
      case 'interests':
        values = interests.split(',').map(s => s.trim()).filter(Boolean);
        break;
    }
    onComplete(values, educationLevel, interestsValue, subjectsValue);
  };
  
  const handleGenerateSubjects = useCallback(async () => {
    if (!interests.trim()) return;
    setIsGenerating(true);
    // Use hardcoded example data instead of AI generation
    setTimeout(() => {
        setSuggestedSubjects(["Physics", "Chemistry", "Mathematics", "Computer Science", "Engineering Basics", "History", "Geography", "Biology"]);
        setStep(2);
        setIsGenerating(false);
    }, 500);
  }, [interests]);

  const handleNextStep = () => {
      if (category === 'qualification' && step === 0) {
          if (level) {
              setStep(1);
          }
      } else if (category === 'qualification' && level === 'Class 12 or Below' && step === 1) {
          handleGenerateSubjects();
      }
  }

  const isSaveDisabled = () => {
    switch (category) {
      case 'role':
        return !role.trim();
      case 'qualification':
        if (step === 0) return !level;
        if (level === 'Class 12 or Below') {
            if (step === 1) return !interests.trim() || isGenerating;
            if (step === 2) return subjects.length < 1;
        }
        return !qualification.trim();
      case 'skills':
        return items.length < 1;
      case 'interests':
        return !interests.trim();
      default:
        return true;
    }
  };
  
  const getButtonAction = () => {
      if (category === 'qualification') {
          if (step === 0) return handleNextStep;
          if (level === 'Class 12 or Below') {
            if (step === 1) return handleGenerateSubjects;
          }
      }
      return handleSave;
  }
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !isSaveDisabled() && !e.shiftKey) {
      e.preventDefault();
      getButtonAction()();
    }
  };

  const renderSimpleInput = (cat: 'role' | 'qualification') => {
    const isRole = cat === 'role';
    const config = categoryConfig[cat];
    const value = isRole ? role : qualification;
    const setValue = isRole ? setRole : setQualification;
    const maxLength = isRole ? 50 : 60;

    return (
      <div className="w-full">
        <h3 className="text-3xl font-semibold text-foreground/90 mb-12">
          {cat === 'qualification' && step === 1 ? `Add ${level}` : config.title}
        </h3>
        <div className="mt-8">
          <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={placeholder || config.placeholder}
              maxLength={maxLength}
              className={cn(
                  "text-left text-6xl h-auto p-0 font-bold bg-transparent border-none text-foreground/90 focus-visible:ring-0 focus-visible:ring-offset-0",
                  "placeholder:text-muted-foreground/30"
              )}
              autoFocus
          />
          <p className="text-sm text-muted-foreground text-right mt-2 pr-1">
              {value.length}/{maxLength}
          </p>
        </div>
      </div>
    );
  };
  
  const renderItemSelection = (cat: 'skills') => {
    const allItems = ALL_SKILLS;
    const title = "Select skills or add your own";

    return (
        <div className="flex flex-col h-full w-full">
            <h3 className="text-3xl font-semibold text-foreground/90 flex-shrink-0">
                {categoryConfig[cat].title}
            </h3>
            <div className="flex-grow mt-12 overflow-y-auto pr-2">
                <ItemSelection
                    allItems={allItems}
                    selectedItems={items}
                    onSelectedItemsChange={setItems}
                    title={title}
                />
            </div>
        </div>
    );
  };

  const renderTextAreaInput = (cat: 'interests') => {
    const config = categoryConfig[cat];
    return (
      <div className='w-full'>
          <h3 className="text-3xl font-semibold text-foreground/90 mb-12">
              {config.title}
          </h3>
          <Textarea
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              placeholder="e.g., space exploration, building robots, creative writing..."
              className="min-h-[120px] text-base"
              maxLength={300}
              onKeyDown={handleKeyDown}
              autoFocus
          />
          <p className="text-sm text-muted-foreground text-right mt-2 pr-1">{interests.length}/300</p>
      </div>
    );
  };
  
  const renderQualificationFlow = () => {
    if (step === 0) {
      return (
        <div className='w-full'>
          <h3 className="text-3xl font-semibold text-foreground/90 mb-12">
            {categoryConfig.qualification.title}
          </h3>
          <div className="mt-8">
            <Select onValueChange={setLevel} value={level}>
                <SelectTrigger className="w-full text-left justify-start h-auto p-0 bg-transparent border-none text-6xl font-bold focus:ring-0 focus:ring-offset-0 data-[state=open]:text-foreground text-muted-foreground">
                    <SelectValue placeholder="Select a level" />
                </SelectTrigger>
                <SelectContent>
                    {educationLevels.map((lvl) => (
                        <SelectItem key={lvl} value={lvl}>{lvl}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
          </div>
        </div>
      );
    }

    if (level === 'Class 12 or Below') {
        if (step === 1) {
            return (
                <div className='w-full'>
                    <h3 className="text-xl font-semibold text-foreground/90 mb-8">
                        What are your interests?
                    </h3>
                    <Textarea
                        value={interests}
                        onChange={(e) => setInterests(e.target.value)}
                        placeholder="e.g., space exploration, building robots, creative writing..."
                        className="min-h-[120px] text-base"
                        maxLength={300}
                        onKeyDown={handleKeyDown}
                        autoFocus
                    />
                    <p className="text-sm text-muted-foreground text-right mt-2 pr-1">{interests.length}/300</p>
                </div>
            )
        }
        if (step === 2) {
             return (
                <div className="flex flex-col h-full w-full">
                    <h3 className="text-xl font-semibold text-foreground/90 flex-shrink-0 mb-8">
                        Select subjects you enjoy
                    </h3>
                    <div className="flex-grow overflow-y-auto pr-2">
                        <ItemSelection
                            allItems={suggestedSubjects}
                            selectedItems={subjects}
                            onSelectedItemsChange={setSubjects}
                            title="Select at least 1 subject"
                        />
                    </div>
                </div>
             );
        }
    }

    return renderSimpleInput('qualification');
  };

  const renderFormContent = () => {
      switch(category) {
          case 'role':
            return renderSimpleInput('role');
          case 'qualification':
            return renderQualificationFlow();
          case 'skills':
              return renderItemSelection('skills');
          case 'interests':
              return renderTextAreaInput('interests');
          default:
              return null;
      }
  }
  
  let actionButton;
  const currentAction = getButtonAction();
  const isDisabled = isSaveDisabled();
  
  const isMultiStepNext = category === 'qualification' && (step === 0 || (level === 'Class 12 or Below' && step === 1));

  if (isMultiStepNext) {
      actionButton = (
        <Button size="lg" onClick={currentAction} disabled={isDisabled} className="h-14 button-gradient">
            {isGenerating ? <Loader2 className="h-6 w-6 animate-spin" /> : <>Next <ArrowRight className="h-5 w-5 ml-2" /></>}
        </Button>
      );
  } else {
      actionButton = (
        <Button size="lg" onClick={handleSave} disabled={isDisabled} className="h-14 button-gradient px-8">
            Save
        </Button>
      );
  }

  return (
    <div className="p-10 h-full w-full flex flex-col">
        <div className="flex-grow flex flex-col justify-center">
          {renderFormContent()}
        </div>
        <div className="flex justify-start gap-4 mt-16 flex-shrink-0 pt-4 border-t">
            <Button variant="outline" size="lg" onClick={onCancel} className="h-14 px-8">
                Cancel
            </Button>
            {actionButton}
        </div>
    </div>
  );
}
