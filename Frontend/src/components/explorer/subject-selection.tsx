
"use client"

import ItemSelection from "./item-selection"

const ALL_SUBJECTS = [
  "English",
  "Geography",
  "Biology",
  "History",
  "Physics",
  "Chemistry",
  "Mathematics",
  "Computer Science",
  "Art",
  "Music",
  "Economics",
  "Business Studies",
]

type SubjectSelectionProps = {
  selectedSubjects: string[]
  onSelectedSubjectsChange: (subjects: string[]) => void
}

export default function SubjectSelection({ selectedSubjects, onSelectedSubjectsChange }: SubjectSelectionProps) {
  return (
    <ItemSelection
      allItems={ALL_SUBJECTS}
      selectedItems={selectedSubjects}
      onSelectedItemsChange={onSelectedSubjectsChange}
      title="Subjects of Interest"
      moreItemsText="More subjects..."
    />
  )
}
