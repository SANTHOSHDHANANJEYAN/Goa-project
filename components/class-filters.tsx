"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Unique values for filters
const categories = ["Yoga", "Meditation", "Sound Healing"];
const levels = ["Beginner", "Intermediate", "Advanced", "All Levels"];
const instructors = ["Maya Wilson", "David Chen", "Leila Patel", "James Thompson"];

type FiltersProps = {
  filters: {
    category: string;
    level: string;
    instructor: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    category: string;
    level: string;
    instructor: string;
  }>>;
};

export default function ClassFilters({ filters, setFilters }: FiltersProps) {
  const handleCategoryChange = (value: string) => {
    setFilters(prev => ({ ...prev, category: value }));
  };

  const handleLevelChange = (value: string) => {
    setFilters(prev => ({ ...prev, level: value }));
  };

  const handleInstructorChange = (value: string) => {
    setFilters(prev => ({ ...prev, instructor: value }));
  };

  const resetFilters = () => {
    setFilters({
      category: 'all',
      level: 'all',
      instructor: 'all',
    });
  };

  const hasActiveFilters = 
    filters.category !== 'all' || 
    filters.level !== 'all' || 
    filters.instructor !== 'all';

  return (
    <div className="bg-muted p-6 rounded-lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
        <h3 className="font-medium">Filter Classes</h3>
        {hasActiveFilters && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={resetFilters}
            className="flex items-center"
          >
            <X size={14} className="mr-1" />
            Clear Filters
          </Button>
        )}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label className="text-sm text-muted-foreground mb-1.5 block">
            Class Type
          </label>
          <Select 
            value={filters.category} 
            onValueChange={handleCategoryChange}
          >
            <SelectTrigger>
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="text-sm text-muted-foreground mb-1.5 block">
            Experience Level
          </label>
          <Select 
            value={filters.level} 
            onValueChange={handleLevelChange}
          >
            <SelectTrigger>
              <SelectValue placeholder="All Levels" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              {levels.map(level => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="text-sm text-muted-foreground mb-1.5 block">
            Instructor
          </label>
          <Select 
            value={filters.instructor} 
            onValueChange={handleInstructorChange}
          >
            <SelectTrigger>
              <SelectValue placeholder="All Instructors" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Instructors</SelectItem>
              {instructors.map(instructor => (
                <SelectItem key={instructor} value={instructor}>
                  {instructor}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}