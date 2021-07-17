import React from "react";

interface Goal { 
    id: string; 
    text: string
}

export interface Course  {
    id: string;
    title: string;
    enrolled: Date;
    goals: Goal[];
   
}

interface Context {
    courses: Course[];
    addCourse: (courseTitle: string, courseDate: Date) => void;
    addGoal: ( goalText: string) => void;
    deleteGoal: () => void;
    updateGoal: () => void;
    
}

const CoursesContext = React.createContext<Context>({
    courses: [], 
    addCourse: () => {},
    addGoal: (text: string) => {},
    deleteGoal: () => {},
    updateGoal: () => {},
    
});

export default CoursesContext;