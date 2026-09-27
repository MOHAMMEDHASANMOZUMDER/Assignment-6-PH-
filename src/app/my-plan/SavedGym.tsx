"use client"
import { Gymcontext } from '@/Context/WorkoutContext';
import React, { useContext } from 'react';
import Image from 'next/image';
import { Circle,Flame,Star } from 'lucide-react';
import { WorkoutType } from '@/types/Types';
import { toast } from 'react-toastify';
import Link from 'next/link';
const SavedGym = ({workout, type}:{workout:WorkoutType,type:string})=>{
    const {removeWorkout}=useContext(Gymcontext)
   const handleDone=()=>{
    removeWorkout(workout.id,"plan")
    toast.success("Removed Successfully!")
    }
    if(type==="planned"){
      return(
        <div className="w-full bg-[#181c25] border border-[#232a38] rounded-xl p-4 md:px-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-lg transition-all hover:border-[#2e3545]">
          <div className="flex items-center gap-4 flex-1 min-w-0">
    <div className="relative w-[110px] h-[60px] flex-shrink-0 rounded-lg overflow-hidden bg-[#2a3140]">
      <Image src={workout.image} alt={workout.name} fill className="object-cover" sizes="110px" />
    </div>
    <div className="flex flex-col gap-1 min-w-0">
      <h3 className="text-white font-extrabold text-base md:text-lg tracking-wide uppercase line-clamp-2">{workout.name}</h3>
      <p className="text-[#788296] text-xs md:text-sm font-medium">{workout.equipment}</p>
      <div className="flex items-center gap-3 md:gap-4 mt-0.5 text-xs md:text-sm text-white font-semibold">
        <div className="flex items-center gap-1.5">
          <Circle className="w-3.5 h-3.5 text-[#ccff00] stroke-[2.5]" />
          <span>{workout.duration}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Flame className="w-3.5 h-3.5 text-[#ccff00] fill-[#ccff00]" />
          <span>{workout.caloriesBurned}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Star className="w-3.5 h-3.5 text-[#ccff00] fill-[#ccff00]" />
          <span>{workout.rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  </div>
  <div className="flex items-center gap-2.5 w-full md:w-auto justify-end flex-shrink-0">
    <Link href={`/Library/${workout.id}`} className="px-4 py-2 rounded-full text-xs md:text-sm font-bold text-white border border-[#2e3545] hover:bg-white/5 hover:border-gray-500 transition-colors hover:-translate-y-1" >View Details</Link>
    <button className="px-4 py-2 rounded-full text-xs md:text-sm font-bold text-black bg-[#ccff00] hover:bg-[#b3e600] active:scale-95 transition-all shadow-md hover:-translate-y-1 hover:cursor-pointer" onClick={handleDone}>Mark as Done</button>
  </div>
<div/>
        </div>
      )
    }
   else  return (
         <div className="w-full bg-[#181c25] border border-[#232a38] rounded-xl p-4 md:px-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-lg transition-all hover:border-[#2e3545]">
          <div className="flex items-center gap-4 flex-1 min-w-0">
    <div className="relative w-[110px] h-[60px] flex-shrink-0 rounded-lg overflow-hidden bg-[#2a3140]">
      <Image src={workout.image} alt={workout.name} fill className="object-cover" sizes="110px" />
    </div>
    <div className="flex flex-col gap-1 min-w-0">
      <h3 className="text-white font-extrabold text-base md:text-lg tracking-wide uppercase line-clamp-2">{workout.name}</h3>
      <p className="text-[#788296] text-xs md:text-sm font-medium">{workout.equipment}</p>
      <div className="flex items-center gap-3 md:gap-4 mt-0.5 text-xs md:text-sm text-white font-semibold">
        <div className="flex items-center gap-1.5">
          <Circle className="w-3.5 h-3.5 text-[#ccff00] stroke-[2.5]" />
          <span>{workout.duration}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Flame className="w-3.5 h-3.5 text-[#ccff00] fill-[#ccff00]" />
          <span>{workout.caloriesBurned}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Star className="w-3.5 h-3.5 text-[#ccff00] fill-[#ccff00]" />
          <span>{workout.rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  </div>
  <div className="flex items-center gap-2.5 w-full md:w-auto justify-end flex-shrink-0">
    <Link href={`/Library/${workout.id}`} className="px-4 py-2 rounded-full text-xs md:text-sm font-bold text-white border border-[#2e3545] hover:bg-white/5 hover:border-gray-500 transition-colors hover:-translate-y-1" >View Details</Link>
  </div>
<div/>
        </div>
    );
};

export default SavedGym;