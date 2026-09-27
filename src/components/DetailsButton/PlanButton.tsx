"use client"
import {React,useContext} from 'react';
import Link from 'next/link';
import { Square, BookBookmark } from 'lucide-react';
import { Gymcontext } from '@/Context/WorkoutContext';
import toast from 'react-hot-toast';
const PlanButton = ({workout}:{workout:WorkerType}) => {
    const {addWorkout,Plan}=useContext(Gymcontext)
        const handlePlan = () => {
            if(Plan.length<5)
            addWorkout(workout, "plan")
        else{
            toast('Already 5 plans added, finish them first!',
  {
    icon: '⚠️',
    style: {
      background: "#292524",
    color: "#fbbf24",
    border: "1px solid #f59e0b",
    borderRadius: "10px",
    },
  }
);
        }
        }
    return (
        <div>
            <div  className='bg-text-grn p-[12px] rounded-2xl flex items-center gap-2 hover:-translate-y-1 cursor-pointer' onClick={handlePlan}><Square className="h-3.5 w-3.5" />
  <button className='cursor-pointer'> Add to today&apos;s plan</button>
  </div>
        </div>
    );
};

export default PlanButton;