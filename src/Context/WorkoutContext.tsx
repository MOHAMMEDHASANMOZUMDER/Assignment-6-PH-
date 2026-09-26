"use client";
import { WorkoutType } from '@/types/Types';
import React from 'react';
import { ReactNode, useState, createContext, useEffect } from 'react';
export const Gymcontext=createContext({})


const WorkoutContext = ({children}:{children:ReactNode}) => {
    const [Plan, SetPlan]=useState<WorkoutType[]>([]);
    const [Saved, SetSaved] = useState<WorkoutType[]>(() => {
    if (typeof window !== "undefined") {
        const data = localStorage.getItem("savedWorkouts");
        return data ? JSON.parse(data) : [];
    }

    return [];
});
 useEffect(() => {
        localStorage.setItem("savedWorkouts", JSON.stringify(Saved));
    }, [Saved]);
const addWorkout = (workout: WorkoutType, type: string) => {
    if (type === "plan") {
      SetPlan([...Plan, workout]);
    }

    if (type === "saved") {
      SetSaved([...Saved, workout]);
    }
  };

  const SharedData = {
    Plan,
    SetPlan,
    Saved,
    SetSaved,
    addWorkout,
  };

    
    return (
       <Gymcontext.Provider value={SharedData}>{children}</Gymcontext.Provider>
       );
};

export default WorkoutContext;