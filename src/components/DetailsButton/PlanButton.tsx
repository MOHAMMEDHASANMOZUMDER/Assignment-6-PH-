"use client"
import {React,useContext} from 'react';
import Link from 'next/link';
import { Square, BookBookmark } from 'lucide-react';
import { Gymcontext } from '@/Context/WorkoutContext';
import { toast } from 'react-toastify';
const PlanButton = ({workout}:{workout:WorkerType}) => {
    const {addWorkout}=useContext(Gymcontext)
        const handlePlan = () => {
            console.log("Clicked!!!!")
            addWorkout(workout, "plan")
        }
    return (
        <div>
            <div  className='bg-text-grn p-[12px] rounded-2xl flex items-center gap-2 hover:-translate-y-1' onClick={handlePlan}><Square className="h-3.5 w-3.5" />
  <Link href=""> Add to today&apos;s plan</Link>
  </div>
        </div>
    );
};

export default PlanButton;