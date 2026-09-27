"use client";
import { WorkoutType } from '@/types/Types';
import React from 'react';
import { ReactNode, useState, createContext, useEffect } from 'react';
import { toast } from 'react-toastify';
export const Gymcontext=createContext({})


const WorkoutContext = ({children}:{children:ReactNode}) => {
    const [Plan, SetPlan]=useState<WorkoutType[]>([]);
    const[Load,SetLoad]=useState(false)
    const [Saved, SetSaved] = useState<WorkoutType[]>([]);
        useEffect(() => {
    const savedPlan = localStorage.getItem("plannedWorkouts");
  const savedWorkouts = localStorage.getItem("savedWorkouts");
  if (savedPlan) {
    SetPlan(JSON.parse(savedPlan));
  }
  if (savedWorkouts) {
    SetSaved(JSON.parse(savedWorkouts));
  }
    SetLoad(true);
  }, []);

  useEffect(() => {
    if (Load) {
      localStorage.setItem("plannedWorkouts", JSON.stringify(Plan));
    localStorage.setItem("savedWorkouts", JSON.stringify(Saved));
    }
  }, [Plan,Saved, Load]);
const addWorkout = (workout: WorkoutType, type: string) => {
    if (type === "plan"){
        if(Plan.some(item=>item.id===workout.id)){
            toast.error("Data already exists in plans!!")
        }
        else{
            SetPlan([...Plan, workout]);
      toast.success("Planned successfully!")
        }
      
    }

    if (type === "saved") {
      if(Saved.some(item => item.id === workout.id)){
        toast.error("Data already exists in saved ones!!")
      }
      else{
        SetSaved([...Saved, workout]);
        toast.success("Plan saved successfully!")
      }
    }
  };
  const removeWorkout = (id: number, type: string) => {
  if (type === "saved") {
    SetSaved(Saved.filter(workout=>workout.id!==id));
  }
  if (type === "plan") {
    SetPlan(Plan.filter(workout=>workout.id!==id));
  }
};

  const SharedData = {
    Plan,
    SetPlan,
    Saved,
    SetSaved,
    addWorkout,
    removeWorkout
  };

    
    return (
       <Gymcontext.Provider value={SharedData}>{children}</Gymcontext.Provider>
       );
};

export default WorkoutContext;