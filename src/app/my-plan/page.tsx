"use client"
import React, { useState,useContext } from 'react';
import { Oswald } from 'next/font/google';
import SavedGym from './SavedGym';
import { MoveDown } from 'lucide-react';
import { Gymcontext } from '@/Context/WorkoutContext';
import WorkoutCard from '@/components/Homepage/WorkoutCard';
import { WorkoutType } from '@/types/Types';
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
const data=Active==="saved"?Saved:Plan
    return (
        <div className='bg-black p-[48px] flex flex-col gap-9'>
            <div className='flex flex-col gap-4'>
            <p className={`${oswald.className} text-white text-[30px] font-[700]`}>MY PLAN</p>
            <p className='text-[14px] font-[400] text-text-gry'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <div className='flex justify-around text-white bg-slate-900 p-[24px] rounded-2xl'>
                <div >
                    <p className='text-[12px] font-[400] text-text-gry'>Exercise</p>
                </div>
                <div>
                    <p className='text-[12px] font-[400] text-text-gry'>Minute</p>
                </div>
                <div>
                    <p className='text-[12px] font-[400] text-text-gry'>Calories</p>
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
    <MoveDown className="h-3.5 w-3.5 text-white" />
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
        {data.map((workout:WorkoutType) => (
          <SavedGym
            key={workout.id}
            workout={workout}
          />
        ))}
      </div>
            <div></div>
        </div>
    );
};

export default Myplanpage;