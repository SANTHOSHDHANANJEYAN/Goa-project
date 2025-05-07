"use client";

import { useState, useEffect } from 'react';
import { format, parseISO, startOfWeek, addDays, isSameDay } from 'date-fns';
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ClassFilters from '@/components/class-filters';

const MOCK_CLASSES = [
  {
    id: 1,
    name: "Morning Vinyasa Flow",
    instructor: "Maya Wilson",
    time: "2025-06-24T07:00:00",
    duration: 75, // minutes
    category: "Yoga",
    level: "All Levels",
    capacity: 20,
    booked: 12,
  },
  {
    id: 2,
    name: "Mindfulness Meditation",
    instructor: "David Chen",
    time: "2025-06-24T12:30:00",
    duration: 45, // minutes
    category: "Meditation",
    level: "Beginner",
    capacity: 15,
    booked: 8,
  },
  {
    id: 3,
    name: "Sound Bath",
    instructor: "Leila Patel",
    time: "2025-06-24T18:00:00",
    duration: 60, // minutes
    category: "Sound Healing",
    level: "All Levels",
    capacity: 25,
    booked: 20,
  },
  {
    id: 4,
    name: "Restorative Yoga",
    instructor: "Maya Wilson",
    time: "2025-06-24T20:00:00",
    duration: 90, // minutes
    category: "Yoga",
    level: "All Levels",
    capacity: 18,
    booked: 10,
  },
  {
    id: 5,
    name: "Gentle Hatha",
    instructor: "James Thompson",
    time: "2025-06-25T09:00:00",
    duration: 60, // minutes
    category: "Yoga",
    level: "Beginner",
    capacity: 20,
    booked: 7,
  },
  {
    id: 6,
    name: "Power Yoga",
    instructor: "Maya Wilson",
    time: "2025-06-25T17:30:00",
    duration: 75, // minutes
    category: "Yoga",
    level: "Intermediate",
    capacity: 15,
    booked: 12,
  },
  {
    id: 7,
    name: "Walking Meditation",
    instructor: "David Chen",
    time: "2025-06-25T12:00:00",
    duration: 45, // minutes
    category: "Meditation",
    level: "All Levels",
    capacity: 12,
    booked: 5,
  },
  {
    id: 8,
    name: "Yin Yoga",
    instructor: "Leila Patel",
    time: "2025-06-26T19:00:00",
    duration: 90, // minutes
    category: "Yoga",
    level: "All Levels",
    capacity: 20,
    booked: 15,
  },
  {
    id: 9,
    name: "Vinyasa Flow",
    instructor: "Maya Wilson",
    time: "2025-06-27T07:00:00",
    duration: 75,
    category: "Yoga",
    level: "All Levels",
    capacity: 20,
    booked: 11,
  },
  {
    id: 10,
    name: "Gong Bath",
    instructor: "Leila Patel",
    time: "2025-06-27T19:30:00",
    duration: 60,
    category: "Sound Healing",
    level: "All Levels",
    capacity: 25,
    booked: 18,
  },
  {
    id: 11,
    name: "Restorative Yoga",
    instructor: "James Thompson",
    time: "2025-06-28T10:00:00",
    duration: 90,
    category: "Yoga",
    level: "All Levels",
    capacity: 18,
    booked: 9,
  },
  {
    id: 12,
    name: "Mantra Meditation",
    instructor: "David Chen",
    time: "2025-06-28T12:00:00",
    duration: 45,
    category: "Meditation",
    level: "All Levels",
    capacity: 15,
    booked: 7,
  },
];

export default function SchedulePage() {
  const [mounted, setMounted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [filters, setFilters] = useState({
    category: 'all',
    level: 'all',
    instructor: 'all',
  });

  useEffect(() => {
    setMounted(true);
    setSelectedDate(new Date());
  }, []);

  if (!mounted || !selectedDate) {
    return null;
  }
  
  const weekStart = startOfWeek(selectedDate, { weekStartsOn: 1 });
  const weekDates = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
  
  const filteredClasses = MOCK_CLASSES.filter(classItem => {
    const classDate = parseISO(classItem.time);
    const matchesDate = isSameDay(classDate, selectedDate);
    
    const matchesCategory = filters.category === 'all' || classItem.category === filters.category;
    const matchesLevel = filters.level === 'all' || classItem.level === filters.level;
    const matchesInstructor = filters.instructor === 'all' || classItem.instructor === filters.instructor;
    
    return matchesDate && matchesCategory && matchesLevel && matchesInstructor;
  });
  
  const morningClasses = filteredClasses.filter(c => {
    const hour = parseISO(c.time).getHours();
    return hour >= 6 && hour < 12;
  });
  
  const afternoonClasses = filteredClasses.filter(c => {
    const hour = parseISO(c.time).getHours();
    return hour >= 12 && hour < 17;
  });
  
  const eveningClasses = filteredClasses.filter(c => {
    const hour = parseISO(c.time).getHours();
    return hour >= 17 && hour < 22;
  });

  return (
    <div className="pt-24">
      <section className="py-16 md:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">Class Schedule</h1>
            <p className="text-lg text-muted-foreground animate-fade-in animation-delay-300">
              Find the perfect class to support your wellness journey
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-2xl md:text-3xl">Weekly Schedule</h2>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Previous week</span>
              </Button>
              <span className="text-sm text-muted-foreground hidden md:inline">
                {format(weekDates[0], 'MMM d')} - {format(weekDates[6], 'MMM d, yyyy')}
              </span>
              <Button variant="outline" size="icon">
                <ArrowRight className="h-4 w-4" />
                <span className="sr-only">Next week</span>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-2 mb-8">
            {weekDates.map((date) => {
              const isSelected = isSameDay(date, selectedDate);
              const isToday = isSameDay(date, new Date());
              
              return (
                <Button
                  key={date.toISOString()}
                  variant={isSelected ? "default" : "outline"}
                  className={`flex flex-col items-center py-3 ${isToday && !isSelected ? 'border-accent text-accent' : ''}`}
                  onClick={() => setSelectedDate(date)}
                >
                  <span className="text-xs font-normal">{format(date, 'EEE')}</span>
                  <span className="text-xl font-medium mt-1">{format(date, 'd')}</span>
                </Button>
              );
            })}
          </div>
          
          <ClassFilters filters={filters} setFilters={setFilters} />
          
          <div className="mt-8">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="morning">Morning</TabsTrigger>
                <TabsTrigger value="afternoon">Afternoon</TabsTrigger>
                <TabsTrigger value="evening">Evening</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="animate-fade-in">
                {filteredClasses.length > 0 ? (
                  <div className="space-y-6">
                    {filteredClasses.map((classItem) => (
                      <ClassCard key={classItem.id} classItem={classItem} />
                    ))}
                  </div>
                ) : (
                  <EmptySchedule />
                )}
              </TabsContent>
              
              <TabsContent value="morning" className="animate-fade-in">
                {morningClasses.length > 0 ? (
                  <div className="space-y-6">
                    {morningClasses.map((classItem) => (
                      <ClassCard key={classItem.id} classItem={classItem} />
                    ))}
                  </div>
                ) : (
                  <EmptySchedule />
                )}
              </TabsContent>
              
              <TabsContent value="afternoon" className="animate-fade-in">
                {afternoonClasses.length > 0 ? (
                  <div className="space-y-6">
                    {afternoonClasses.map((classItem) => (
                      <ClassCard key={classItem.id} classItem={classItem} />
                    ))}
                  </div>
                ) : (
                  <EmptySchedule />
                )}
              </TabsContent>
              
              <TabsContent value="evening" className="animate-fade-in">
                {eveningClasses.length > 0 ? (
                  <div className="space-y-6">
                    {eveningClasses.map((classItem) => (
                      <ClassCard key={classItem.id} classItem={classItem} />
                    ))}
                  </div>
                ) : (
                  <EmptySchedule />
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
}

function ClassCard({ classItem }: { classItem: any }) {
  const classDate = parseISO(classItem.time);
  const startTimeFormatted = format(classDate, 'h:mm a');
  const endTimeFormatted = format(
    new Date(classDate.getTime() + classItem.duration * 60000),
    'h:mm a'
  );
  
  const spotsLeft = classItem.capacity - classItem.booked;
  const isFull = spotsLeft === 0;
  const isAlmostFull = spotsLeft <= 3 && !isFull;
  
  return (
    <Card className="overflow-hidden transition hover:shadow-md">
      <div className="flex flex-col md:flex-row">
        <div className={`p-6 md:p-8 md:w-3/4 border-b md:border-b-0 md:border-r border-border`}>
          <CardHeader className="p-0 mb-4">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="font-serif text-xl mb-1">{classItem.name}</CardTitle>
                <CardDescription className="flex items-center">
                  <User size={14} className="mr-1" />
                  {classItem.instructor}
                </CardDescription>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                classItem.category === 'Yoga' 
                  ? 'bg-accent/10 text-accent'
                  : classItem.category === 'Meditation'
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                    : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
              }`}>
                {classItem.category}
              </span>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center text-muted-foreground">
                <Clock size={16} className="mr-2" />
                <span>{startTimeFormatted} - {endTimeFormatted} ({classItem.duration} min)</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Calendar size={16} className="mr-2" />
                <span>{classItem.level}</span>
              </div>
            </div>
          </CardContent>
        </div>
        
        <div className="p-6 md:p-8 md:w-1/4 flex flex-col justify-center items-center md:items-stretch">
          {isFull ? (
            <div className="text-center md:text-left mb-4">
              <p className="text-destructive font-medium">Class Full</p>
              <p className="text-sm text-muted-foreground">Join waitlist</p>
            </div>
          ) : (
            <div className="text-center md:text-left mb-4">
              <p className={`font-medium ${isAlmostFull ? 'text-orange-600 dark:text-orange-400' : ''}`}>
                {spotsLeft} {spotsLeft === 1 ? 'spot' : 'spots'} left
              </p>
              <p className="text-sm text-muted-foreground">
                {classItem.booked}/{classItem.capacity} booked
              </p>
            </div>
          )}
          
          <Button className="w-full" variant={isFull ? "outline" : "default"}>
            {isFull ? "Join Waitlist" : "Book Class"}
          </Button>
        </div>
      </div>
    </Card>
  );
}

function EmptySchedule() {
  return (
    <div className="text-center py-12">
      <p className="text-muted-foreground mb-4">No classes available with the current filters.</p>
      <Button variant="outline">Reset Filters</Button>
    </div>
  );
}