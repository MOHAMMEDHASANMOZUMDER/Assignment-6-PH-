"use client"
import React, { useState,useContext } from 'react';
import { Oswald } from 'next/font/google';
import SavedGym from './SavedGym';
import { ChevronDown } from 'lucide-react';
import { Gymcontext } from '@/Context/WorkoutContext';
import WorkoutCard from '@/components/Homepage/WorkoutCard';
import { WorkoutType } from '@/types/Types';
import Link from 'next/link';
const oswald = Oswald({
  subsets: ["latin"]
});

const Myplanpage = () => {
    const [Active,setActive]=useState("planned");
    const handleSaved = () => {
  setActive("saved");
};

const handlePlanned = () => {
  setActive("planned");
};
const [open, setOpen] = useState(false);
const [selected, setSelected] = useState("Duration");
const handleSelect = (option: string) => {
  setSelected(option);
  setOpen(false);
};
const {Saved,Plan}=useContext(Gymcontext)
const rawdata=Active==="saved"?Saved:Plan
const data=selected==="Duration"?[...rawdata].sort((a:WorkoutType,b:WorkoutType)=>(a.duration-b.duration)):
                selected==="Calories"?[...rawdata].sort((a:WorkoutType,b:WorkoutType)=>(a.caloriesBurned-b.caloriesBurned)):[...rawdata].sort((a:WorkoutType,b:WorkoutType)=>(a.rating-b.rating))

function calcCal(num: WorkoutType[]) {
  let count = 0;
  for (let i = 0; i < num.length; i++) {
    count = count + num[i].caloriesBurned;
  }
  return count;
}
function calcMin(num: WorkoutType[]) {
  let count = 0;
  for (let i = 0; i < num.length; i++) {
    count = count + num[i].duration;
  }
  return count;
}
function calcEx(num: WorkoutType[]) {
  return num.length;
}
    return (
        <div className='bg-black p-[48px] flex flex-col gap-9'>
            <div className='flex flex-col gap-4'>
            <p className={`${oswald.className} text-white text-[30px] font-[700]`}>MY PLAN</p>
            <p className='text-[14px] font-[400] text-text-gry'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <div className='flex justify-around text-white bg-slate-900 p-[24px] rounded-2xl'>
                <div >
                    <p className='text-[12px] font-[400] text-text-gry'>Exercise</p>
                    <p className={`${oswald.className} text-[36px] font-[700] text-text-grn`}>{calcEx(data)}</p>
                </div>
                <div>
                    <p className='text-[12px] font-[400] text-text-gry'>Minute</p>
                    <p className={`${oswald.className} text-[36px] font-[700]`}>{calcMin(data)}</p>
                </div>
                <div>
                    <p className='text-[12px] font-[400] text-text-gry'>Calories</p>
                    <p className={`${oswald.className} text-[36px] font-[700]`}>{calcCal(data)}</p>
                </div>
            </div>
            <div className='p-[4px] text-text-gry flex justify-between'>
                <div className='bg-slate-900 rounded-xl'>
                    <button className={`${Active==='planned'?"bg-slate-700 rounded-2xl font-semibold text-white":"bg-slate-900"} px-[36px] py-[7px]`}  onClick={() => setActive("planned")}>Today&apos;s Plan</button>
                    <button className={`${Active==='saved'?"bg-slate-700 rounded-2xl font-semibold text-white":"bg-slate-900"} px-[36px] py-[7px]`} onClick={() => setActive("saved")} >Saved</button>
                   
                </div>
                <div className='text-white flex gap-3 flex items-center'>
                    <p>Sort By</p>
                    <div className="relative">
  <div
    className="rounded-lg bg-slate-700 px-4 py-2 text-white flex gap-2 items-center cursor-pointer" onClick={() => setOpen(!open)}>
    <button>{selected}</button>
    <ChevronDown className="h-3.5 w-3.5 text-white" />
  </div>
  {open && (
    <div className="absolute mt-2 w-full rounded-lg bg-slate-800 shadow-lg z-10">
        <button onClick={() => handleSelect("Duration")} className="block w-full px-4 py-2 text-left text-text-gry hover:bg-black">
        Duration
      </button>
      <button onClick={() => handleSelect("Calories")} className="block w-full px-4 py-2 text-left text-text-gry hover:bg-black">
        Calories
      </button>

      <button onClick={() => handleSelect("Rating")} className="block w-full px-4 py-2 text-left text-text-gry hover:bg-black">
        Rating
      </button>
    </div>
  )}
</div>
           </div>
            </div>
            <div className="flex flex-col gap-6">
        {
            data.length===0? <div className='bg-slate-900 rounded-2xl flex flex-col gap-6 justify-center items-center py-[98px]'>
               <p className={`${oswald.className} text-[20px] font-[700] text-white`}>NOTHING HERE YET</p>
               <p className='text-[12px] font-[400] text-text-gry'>Browse the library and add a lift to get today moving.</p>
               <Link href="/#Library" className='bg-text-grn px-3 py-2 rounded-full font-semibold hover:-translate-y-1'>Go to Workouts</Link>
            </div>
            :
            data.map((workout:WorkoutType) => (
          <SavedGym key={workout.id} workout={workout} type={Active}/>
        ))
        }
      </div>
        </div>
    );
};

export default Myplanpage;