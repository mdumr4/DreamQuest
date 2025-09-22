
"use client"

import { useState, KeyboardEvent, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Sparkles, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"

type ItemSelectionProps = {
  allItems: string[]
  selectedItems: string[]
  onSelectedItemsChange: (items: string[]) => void
  title: string
  onRegenerate?: () => void
  isRegenerating?: boolean
  moreItemsText?: string
}

const ITEMS_TO_SHOW = 8

export default function ItemSelection({
  allItems,
  selectedItems,
  onSelectedItemsChange,
  title,
  onRegenerate,
  isRegenerating = false,
}: ItemSelectionProps) {
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [otherValue, setOtherValue] = useState("");

  useEffect(() => {
    const unselectedItems = allItems.filter(item => !selectedItems.includes(item));
    const itemsToShow = unselectedItems.slice(0, ITEMS_TO_SHOW);
    setVisibleItems(Array.from(new Set([...selectedItems, ...itemsToShow])));
  }, [allItems, selectedItems]);


  const handleItemToggle = (item: string) => {
    const newSelectedItems = selectedItems.includes(item)
      ? selectedItems.filter((s) => s !== item)
      : [...selectedItems, item]
    onSelectedItemsChange(newSelectedItems)
  }

  const handleOtherKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && otherValue.trim()) {
        event.preventDefault();
        const newSelectedItems = [otherValue.trim(), ...selectedItems];
        onSelectedItemsChange(newSelectedItems);
        setOtherValue('');
        setShowOtherInput(false);
    }
  }

  const unselectedVisibleItems = visibleItems.filter(item => !selectedItems.includes(item));

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-muted-foreground">{title}</h3>
        {onRegenerate && (
            <Button variant="ghost" size="sm" onClick={onRegenerate} disabled={isRegenerating}>
                {isRegenerating ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <Sparkles className="mr-2 h-4 w-4" />
                )}
                Regenerate
            </Button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {selectedItems.map((item) => (
             <Badge
                key={item}
                variant="outline"
                onClick={() => handleItemToggle(item)}
                className={cn(
                  "cursor-pointer px-4 py-2 text-base rounded-full transition-all duration-200 border-2",
                  "selected-badge-gradient"
                )}
              >
                {item}
              </Badge>
        ))}
        {unselectedVisibleItems.map((item) => (
          <Badge
            key={item}
            variant="outline"
            onClick={() => handleItemToggle(item)}
            className={cn(
              "cursor-pointer px-4 py-2 text-base rounded-full transition-all duration-200 border-2",
              "bg-background text-foreground hover:bg-accent/50 border-border"
            )}
          >
            {item}
          </Badge>
        ))}
        {showOtherInput ? (
            <Input 
                type="text"
                placeholder="Type & press Enter"
                value={otherValue}
                onChange={(e) => setOtherValue(e.target.value)}
                onKeyDown={handleOtherKeyDown}
                onBlur={() => setShowOtherInput(false)}
                className="h-auto px-4 py-2 text-base rounded-full w-48 border-2 border-primary"
                autoFocus
            />
        ) : (
            <Badge
                variant="default"
                className="cursor-pointer px-4 py-2 text-base rounded-full border-dashed border-2 border-primary bg-primary text-primary-foreground"
                onClick={() => setShowOtherInput(true)}
            >
                Other
            </Badge>
        )}
      </div>
    </div>
  )
}
