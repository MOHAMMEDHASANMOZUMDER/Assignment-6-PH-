"use client"
import React, { useContext } from 'react';
import Link from 'next/link';
import { Square, BookBookmark } from 'lucide-react';
import { WorkoutType } from '@/types/Types';
import { Gymcontext } from '@/Context/WorkoutContext';
import { toast } from 'react-toastify';


const SaveButton = ({workout}:{workout:WorkoutType}) => {
    const {addWorkout}=useContext(Gymcontext)
    const handlePlan = () => {
     addWorkout(workout, "saved")
    }
    return (
        <div>
            <div className='text-text-gry p-[12px] rounded-2xl flex items-center gap-2 border-[1px] border-text-gry hover:-translate-y-1'
            onClick={handlePlan}>
  <BookBookmark className='h-3.5 w-3.5'/>
    <Link href="" >Save for later</Link>
  </div>
        </div>
    );
};

export default SaveButton;