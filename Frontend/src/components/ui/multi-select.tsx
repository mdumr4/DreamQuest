
"use client";

import * as React from "react";
import { X, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";
import { cn } from "@/lib/utils";

type ItemCategory = 'role' | 'qualification' | 'skills' | 'interests';

type MultiSelectProps = {
    category: ItemCategory;
    onValueChange: (value: string[]) => void;
    defaultValue?: string[];
    placeholder?: string;
    className?: string;
    triggerClassName?: string;
    placeholderClassName?: string;
    popoverClassName?: string;
};

// Debounce function
function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
    let timeout: NodeJS.Timeout;
    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

const exampleSuggestions: Record<ItemCategory, string[]> = {
    role: ["Software Engineer", "Product Manager", "UX Designer", "Data Scientist", "Marketing Manager"],
    qualification: ["Bachelor of Technology", "Master of Business Administration", "PMP Certification", "Google Certified Professional Cloud Architect"],
    skills: ["JavaScript", "React", "Node.js", "Python", "SQL", "Communication", "Leadership"],
    interests: ["Artificial Intelligence", "Blockchain", "Sustainable Technology", "Creative Writing", "Photography"]
};

export function MultiSelect({
  category,
  onValueChange,
  defaultValue = [],
  placeholder = "Select options",
  className,
  triggerClassName,
  placeholderClassName,
  popoverClassName,
}: MultiSelectProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [suggestions, setSuggestions] = React.useState<string[]>([]);
  const [isSuggesting, setIsSuggesting] = React.useState(false);

  const handleSelect = React.useCallback((value: string) => {
    setInputValue("");
    onValueChange([value]);
    setSuggestions([]);
  }, [onValueChange]);

  const fetchSuggestions = React.useCallback(async (query: string) => {
    if (query.trim().length < 1) {
      setSuggestions([]);
      return;
    }
    setIsSuggesting(true);
    // Use hardcoded example data instead of AI generation
    setTimeout(() => {
        const filteredSuggestions = exampleSuggestions[category]
            .filter(s => s.toLowerCase().includes(query.toLowerCase()) && !defaultValue.includes(s));
        setSuggestions(filteredSuggestions);
        setIsSuggesting(false);
    }, 150);
  }, [category, defaultValue]);

  const debouncedFetchSuggestions = React.useMemo(
    () => debounce(fetchSuggestions, 300),
    [fetchSuggestions]
  );

  React.useEffect(() => {
    debouncedFetchSuggestions(inputValue);
  }, [inputValue, debouncedFetchSuggestions]);


  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === "Escape") {
          input.blur();
        }
        if (e.key === 'Enter' && inputValue.trim()) {
            e.preventDefault();
            const newValues = inputValue.split(',').map(v => v.trim()).filter(v => v && !defaultValue.includes(v));
            if (newValues.length > 0) {
                onValueChange(newValues);
            }
            setInputValue("");
            setSuggestions([]);
        }
      }
    },
    [defaultValue, inputValue, onValueChange]
  );

  return (
    <Command
      onKeyDown={handleKeyDown}
      className={cn("overflow-visible bg-transparent", className)}
    >
      <div
        className={cn(
            "group rounded-md border-input px-0 py-0 text-sm ring-offset-background",
            triggerClassName,
        )}
      >
        <div className="flex flex-wrap gap-1">
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder={placeholder}
            className={cn(
                "ml-2 flex-1 bg-transparent outline-none w-auto",
                "placeholder:text-sm",
                placeholderClassName
            )}
          />
        </div>
      </div>
      <div className="relative mt-2">
        {open && (isSuggesting || suggestions.length > 0) ? (
          <div className={cn("absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in", popoverClassName)}>
            <CommandList>
              <CommandGroup className="h-full overflow-auto">
                {isSuggesting ? (
                    <CommandItem disabled className="flex justify-center items-center py-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                    </CommandItem>
                ) : (
                    suggestions.map((suggestion) => (
                        <CommandItem
                            key={suggestion}
                            onMouseDown={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                            }}
                            onSelect={() => handleSelect(suggestion)}
                            className={"cursor-pointer"}
                        >
                            {suggestion}
                        </CommandItem>
                    ))
                )}
              </CommandGroup>
            </CommandList>
          </div>
        ) : null}
      </div>
    </Command>
  );
}
