
'use client';

import { useState, useTransition, useEffect, useMemo, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowRight, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import FormHeader from './form-header';
import Footer from '@/components/landing/footer';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import ItemSelection from './item-selection';
import GeneratingInsights from '../shared/generating-insights';
import { Textarea } from '../ui/textarea';
import SkillsSelection from './skills-selection';

const educationLevels = [
  'Class 12 or Below',
  'Diploma',
  'Bachelor’s Degree',
  'Master’s Degree',
  'Doctorate',
  'Professional Degree',
  'Professional Certificate (e.g., NPTEL, Coursera)',
  'Other',
];

const qualificationPlaceholders: Record<string, string[]> = {
  Diploma: ['e.g., Diploma in AI', 'e.g., Diploma in ML', 'e.g., Diploma in Data Science'],
  'Bachelor’s Degree': ['e.g., Artificial Intelligence', 'e.g., Machine Learning', 'e.g., Data Science'],
  'Master’s Degree': ['e.g., Artificial Intelligence', 'e.g., Machine Learning', 'e.g., Data Science'],
  Doctorate: ['e.g., Ph.D. in AI', 'e.g., Ph.D. in Machine Learning'],
  'Professional Degree': ['e.g., AI/ML Certification', 'e.g., Full-Stack Development Bootcamp'],
  'Professional Certificate (e.g., NPTEL, Coursera)': [
    'e.g., AI/ML Certification',
    'e.g., Full-Stack Development Bootcamp',
  ],
  Other: ['Type your domain or course name'],
};

type FormStep = 'level' | 'qualification' | 'skills' | 'interests' | 'subjects';

export default function InterestsClientPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get('role');
  const organization = searchParams.get('organization');
  const tasks = searchParams.get('tasks');

  const [levelInput, setLevelInput] = useState('');

  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [qualificationInput, setQualificationInput] = useState('');

  const [interestsInput, setInterestsInput] = useState('');

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [suggestedSkills, setSuggestedSkills] = useState<string[]>([]);
  const [suggestedSubjects, setSuggestedSubjects] = useState<string[]>([]);

  const [formStep, setFormStep] = useState<FormStep>('level');
  const [isGenerating, setIsGenerating] = useState(false);

  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const isStudent = role?.trim().toLowerCase() === 'student';
  const isClass12OrBelow = useMemo(() => levelInput === 'Class 12 or Below', [levelInput]);

  const [qualificationPlaceholder, setQualificationPlaceholder] = useState(
    qualificationPlaceholders['Bachelor’s Degree'][0]
  );

  useEffect(() => {
    let placeholderInterval: NodeJS.Timeout;
    if (formStep === 'qualification' && levelInput && qualificationPlaceholders[levelInput]) {
      const placeholders = qualificationPlaceholders[levelInput];
      setQualificationPlaceholder(placeholders[0]);
      let i = 0;
      placeholderInterval = setInterval(() => {
        i = (i + 1) % placeholders.length;
        setQualificationPlaceholder(placeholders[i]);
      }, 2000);
    }
    return () => clearInterval(placeholderInterval);
  }, [formStep, levelInput]);

  const handleGenerateSkills = useCallback(async () => {
    if (!tasks) return;
    setIsGenerating(true);
    // Use hardcoded example data instead of AI generation
    setTimeout(() => {
      setSuggestedSkills([
        'Project Management',
        'Agile Methodologies',
        'Client Communication',
        'Budgeting',
        'Team Leadership',
        'Risk Assessment',
        'Stakeholder Management',
        'Data Analysis',
      ]);
      setIsGenerating(false);
    }, 500);
  }, [tasks]);

  useEffect(() => {
    if (!isStudent) {
      setFormStep('skills');
      if (tasks) {
        handleGenerateSkills();
      }
    }
  }, [isStudent, tasks, handleGenerateSkills]);

  useEffect(() => {
    setQualificationInput('');
    setSelectedSubjects([]);
    setInterestsInput('');
    setSelectedSkills([]);
  }, [levelInput]);

  const handleLevelChange = (value: string) => {
    setLevelInput(value);
  };

  const handleLevelNext = () => {
    if (levelInput) {
      setFormStep(isClass12OrBelow ? 'interests' : 'qualification');
    }
  };

  const handleGenerateSubjects = useCallback(async () => {
    if (!interestsInput.trim()) return;
    setIsGenerating(true);
    // Use hardcoded example data instead of AI generation
    setTimeout(() => {
        setSuggestedSubjects(["Physics", "Chemistry", "Mathematics", "Computer Science", "Engineering Basics", "History", "Geography", "Biology"]);
        setFormStep('subjects');
        setIsGenerating(false);
    }, 500);
  }, [interestsInput]);

  const handleNextStep = () => {
    if (isNextDisabled()) return;

    if (isStudent) {
      if (formStep === 'level') {
        handleLevelNext();
        return;
      }

      if (isClass12OrBelow) {
        if (formStep === 'interests') {
          handleGenerateSubjects();
        } else {
          handleSubmit();
        }
      } else {
        // Student > Class 12
        if (formStep === 'qualification') {
          setFormStep('skills');
        } else {
          handleSubmit();
        }
      }
    } else {
      // Professional
      handleSubmit();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleNextStep();
    }
  };

  const handleSubmit = () => {
    if (isNextDisabled()) return;
    startTransition(async () => {
      const params = new URLSearchParams();
      if (role) params.set('role', role);
      if (organization) params.set('organization', organization);
      if (tasks) params.set('tasks', tasks);
      if (isStudent) {
        if (levelInput) params.set('level', levelInput);
        if (isClass12OrBelow) {
          if (selectedSubjects.length > 0) params.set('subjects', selectedSubjects.join(','));
          if (interestsInput) params.set('interests', interestsInput);
        } else {
          if (qualificationInput) params.set('qualification', qualificationInput);
        }
      }
      if (selectedSkills.length > 0) params.set('skills', selectedSkills.join(','));

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      console.log('Simulating form submission with:', Object.fromEntries(params.entries()));
      router.push(`/dashboard?${params.toString()}`);
    });
  };

  const handleBack = () => {
    if (isStudent) {
      if (formStep === 'level') {
        router.back();
        return;
      }
      if (isClass12OrBelow) {
        if (formStep === 'subjects') {
          setFormStep('interests');
        } else if (formStep === 'interests') {
          setFormStep('level');
          setLevelInput('');
        } else {
          router.back();
        }
      } else {
        // Student > Class 12
        if (formStep === 'skills') {
          setFormStep('qualification');
        } else if (formStep === 'qualification') {
          setFormStep('level');
          setLevelInput('');
        } else {
          router.back();
        }
      }
    } else {
      // Professional
      router.back();
    }
  };

  const isNextDisabled = () => {
    if (isPending || isGenerating) return true;

    if (isStudent) {
      if (formStep === 'level') return !levelInput;

      if (isClass12OrBelow) {
        if (formStep === 'interests') return !interestsInput.trim();
        if (formStep === 'subjects') return selectedSubjects.length < 3;
      } else {
        if (formStep === 'qualification') return !qualificationInput.trim();
        if (formStep === 'skills') return selectedSkills.length < 3;
      }
    } else {
      // Professional
      if (formStep === 'skills') return selectedSkills.length < 3;
    }

    return false;
  };

  const getActionButtons = () => {
    const isSubmitAction = isStudent ? formStep === 'skills' || formStep === 'subjects' : formStep === 'skills';
    let clickHandler = isSubmitAction ? handleSubmit : handleNextStep;

    let buttonText = 'Next';
    if (isStudent) {
      if (isClass12OrBelow) {
        if (formStep === 'interests') {
          clickHandler = handleGenerateSubjects;
          buttonText = 'Next';
        } else if (formStep === 'subjects') {
          buttonText = 'Submit';
        }
      } else {
        if (formStep === 'skills') buttonText = 'Submit';
      }
    } else {
      if (formStep === 'skills') buttonText = 'Submit';
    }

    return (
      <div className="w-full mt-8 flex gap-4">
        <Button
          size="lg"
          variant="outline"
          className="font-bold text-lg py-6 rounded-lg transition-transform duration-300 hover:scale-105"
          onClick={handleBack}
        >
          Back
        </Button>
        <Button
          size="lg"
          className="button-gradient font-bold text-lg py-6 rounded-lg transition-transform duration-300 hover:scale-105"
          disabled={isNextDisabled()}
          onClick={clickHandler}
        >
          {isPending || (isGenerating && (formStep === 'interests' || (formStep === 'skills' && !isStudent))) ? (
            <Loader2 className="animate-spin" />
          ) : (
            <>
              {buttonText}
              {buttonText === 'Next' && <ArrowRight className="ml-2 h-5 w-5" />}
            </>
          )}
        </Button>
      </div>
    );
  };

  const renderStudentForm = () => (
    <div className="w-full max-w-3xl flex flex-col items-start text-left animate-in fade-in slide-in-from-bottom-5 duration-700">
      <div className="w-full">
        <h1 className="text-5xl md:text-6xl font-semibold capitalize">{role}</h1>
        {formStep === 'level' && (
          <div className="w-full max-w-md mt-8">
            <Select onValueChange={handleLevelChange} value={levelInput}>
              <SelectTrigger className="w-full text-left justify-start h-auto p-0 bg-transparent border-none text-2xl md:text-3xl focus:ring-0 focus:ring-offset-0 data-[state=open]:text-foreground text-muted-foreground transition-all duration-300">
                <SelectValue placeholder="Level" className="transition-all duration-300" />
              </SelectTrigger>
              <SelectContent>
                {educationLevels.map((level) => (
                  <SelectItem key={level} value={level} className="py-2">
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      {levelInput && formStep !== 'level' && (
        <div className="w-full mt-8">
          <h2 className="text-2xl md:text-3xl text-muted-foreground">{levelInput}</h2>
        </div>
      )}

      <div className="w-full mt-8">
        {formStep === 'qualification' && !isClass12OrBelow && (
          <div className="w-full">
            <Input
              id="qualification"
              type="text"
              placeholder={qualificationPlaceholder}
              value={qualificationInput}
              onChange={(e) => setQualificationInput(e.target.value)}
              onKeyDown={handleKeyDown}
              maxLength={60}
              className={cn(
                'text-left text-2xl md:text-3xl h-auto p-0 bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 transition-all',
                'placeholder:text-muted-foreground/30'
              )}
              autoFocus
            />
            <div className="text-sm text-muted-foreground mt-2 pr-1 h-4 text-left">
              {`${qualificationInput.length}/60 characters`}
            </div>
          </div>
        )}

        {formStep === 'skills' && !isClass12OrBelow && qualificationInput && (
          <div className="w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground transition-all duration-300">
              {qualificationInput}
            </h2>
          </div>
        )}

        {isClass12OrBelow && formStep === 'interests' && (
          <div className="w-full text-left">
             {isGenerating ? (
                <GeneratingInsights />
             ) : (
                <div className="space-y-2">
                  <Label htmlFor="interests" className="text-muted-foreground font-medium text-lg">
                    What do you love doing or dream of becoming in the future?
                  </Label>
                  <Textarea
                    id="interests"
                    value={interestsInput}
                    onChange={(e) => setInterestsInput(e.target.value)}
                    placeholder="e.g., I love dreaming of space travel and want to become an astronaut..."
                    className="mt-2 text-base min-h-[100px]"
                    maxLength={300}
                    onKeyDown={handleKeyDown}
                  />
                  <p className="text-sm text-muted-foreground mt-2 text-right">{interestsInput.length}/300</p>
                </div>
             )}
          </div>
        )}

        {isClass12OrBelow && formStep === 'subjects' && (
          <div className="w-full text-left space-y-8">
            {interestsInput && (
              <div className="space-y-2">
                <h3 className="font-medium text-muted-foreground">Your Interests &amp; Goals</h3>
                <div className="rounded-lg border p-4 whitespace-pre-wrap">
                  <p className="text-foreground/80">{interestsInput}</p>
                </div>
              </div>
            )}
            {isGenerating ? (
              <GeneratingInsights />
            ) : (
              <ItemSelection
                  allItems={suggestedSubjects}
                  selectedItems={selectedSubjects}
                  onSelectedItemsChange={setSelectedSubjects}
                  title="Select at least 3 subjects that interest you."
                  onRegenerate={handleGenerateSubjects}
                  isRegenerating={isGenerating}
              />
            )}
          </div>
        )}

        {formStep === 'skills' && !isClass12OrBelow && (
          <div className="w-full mt-8">
            <SkillsSelection selectedSkills={selectedSkills} onSelectedSkillsChange={setSelectedSkills} />
          </div>
        )}
      </div>

      {levelInput && (!isGenerating || (formStep !== 'subjects' && formStep !== 'interests')) && getActionButtons()}
    </div>
  );

  const renderProfessionalForm = () => (
    <div className="w-full animate-in fade-in slide-in-from-bottom-5 duration-700">
      <div>
        <h1 className="text-5xl md:text-6xl font-semibold capitalize">{role}</h1>
        {organization && (
          <h2 className="text-xl md:text-2xl text-muted-foreground capitalize mt-1">at {organization}</h2>
        )}
      </div>

      {tasks && (
        <div className="w-full mt-8">
          <h3 className="font-medium text-muted-foreground">Your Tasks</h3>
          <div className="mt-2 rounded-lg border border-input p-4">
            <p className="text-foreground/80 whitespace-pre-wrap">{tasks}</p>
          </div>
        </div>
      )}

      <div className="w-full text-left mt-8">
        {isGenerating ? (
          <GeneratingInsights />
        ) : (
          <ItemSelection
            allItems={suggestedSkills}
            selectedItems={selectedSkills}
            onSelectedItemsChange={setSelectedSkills}
            title="Select at least 3 skills that apply to you."
            onRegenerate={handleGenerateSkills}
            isRegenerating={isGenerating}
          />
        )}
      </div>

      {!isGenerating && <div className="mt-8">{getActionButtons()}</div>}
    </div>
  );

  return (
    <div className="flex flex-col min-h-dvh bg-transparent">
      <FormHeader />
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl p-8 md:p-12">{isStudent ? renderStudentForm() : renderProfessionalForm()}</div>
      </main>
      <Footer />
    </div>
  );
}
