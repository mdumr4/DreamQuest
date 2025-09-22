
"use client"

import { useState, useEffect } from "react"
import ItemSelection from "./item-selection"

const ALL_SKILLS = [
  "Machine Learning",
  "Deep Learning",
  "Data Preprocessing",
  "Python Programming",
  "Algorithm Design",
  "Statistical Analysis",
  "Data Visualization",
  "Software Engineering",
  "Cloud Computing",
  "DevOps",
  "Agile Methodologies",
  "Project Management",
]

// Simple shuffle function
const shuffleArray = (array: string[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

type SkillsSelectionProps = {
  selectedSkills: string[]
  onSelectedSkillsChange: (skills: string[]) => void
}

export default function SkillsSelection({ selectedSkills, onSelectedSkillsChange }: SkillsSelectionProps) {
  const [shuffledSkills, setShuffledSkills] = useState<string[]>([]);

  useEffect(() => {
    // Shuffling on the client side after mount to avoid hydration errors
    setShuffledSkills(shuffleArray([...ALL_SKILLS]));
  }, []);

  const handleRegenerate = () => {
    setShuffledSkills(shuffleArray([...ALL_SKILLS]));
  };

  return (
    <ItemSelection
      allItems={shuffledSkills}
      selectedItems={selectedSkills}
      onSelectedSkillsChange={onSelectedSkillsChange}
      title="Select at least 3 skills that apply to you."
      onRegenerate={handleRegenerate}
    />
  )
}
