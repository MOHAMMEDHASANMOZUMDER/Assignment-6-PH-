import { WorkoutType } from '@/types/Types';
import React from 'react';
import { Oswald } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { Square, BookBookmark } from 'lucide-react';
const oswald = Oswald({
  subsets: ["latin"]
});


type Props = {
  params: Promise<{
    id: string;
  }>;
};

const LibraryDetails = async({params}:Props) => {
 const {id}=await params;
    const res= await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
    const data= await res.json();
    return (
      <div className='bg-black flex flex-col md:flex-row gap-6 sm:p-6 p-12 md:p-8'>
           <div>
          <figure>
            <Image
          src={data.image}
          height={588}
          width={735}
          alt=''
          className='rounded-2xl'
          >

          </Image>
          </figure>
           </div>
           <div className='flex flex-col gap-5'>
            <p className={`${oswald.className} text-[36px] font-[700] text-white`}>BARBELL BENCH PRESS</p>
            <p className='text-[16px] font-[400] text-text-gry'>A compound press that builds chest thickness, triceps, and pressing power
from a stable bench.</p>
          <div className="flex flex-wrap gap-1.5">
          {data.muscleGroups.map((muscle:string) => (
            <span
              key={muscle}
              className="rounded-full bg-[#ccff00] px-2.5 py-1 text-[11px] font-extrabold tracking-wide text-black uppercase"
            >
              {muscle}
            </span>
          ))}
        </div>
        

<div className="relative overflow-x-auto bg-[#151922] rounded-2xl">
    <table className="w-full text-sm text-left rtl:text-right text-body">
        <tbody>
            <tr className="bg-neutral-primary">
                <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap th">
                   EQUIPMENT
                </th>
                <td className="px-6 py-4 td">
                   {data.equipment}
                </td>
            </tr>
            <tr className="bg-neutral-primary">
                <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap th">
                  DIFFICULTY
                </th>
                <td className="px-6 py-4 td">
                    {data.difficulty}
                </td>
            </tr>
            <tr className="bg-neutral-primary">
                <th scope="row" className="th px-6 py-4 font-medium text-heading whitespace-nowrap">
                    SETS
                </th>
                <td className="px-6 py-4 td">
                    {data.sets}
                </td>
                  
            </tr>
            <tr className="bg-neutral-primary">
                <th scope="row" className="th px-6 py-4 font-medium text-heading whitespace-nowrap">
                  REPS
                </th>
                <td className="px-6 py-4 td">
                    {data.reps}
                </td>
                  
            </tr>
            <tr className="bg-neutral-primary">
                <th scope="row" className="th px-6 py-4 font-medium text-heading whitespace-nowrap">
                  DURATION
                </th>
                <td className="px-6 py-4 td">
                    {data.duration}
                </td>
                  
            </tr>
            <tr className="bg-neutral-primary">
                <th scope="row" className="th px-6 py-4 font-medium text-heading whitespace-nowrap">
                  CALORIES
                </th>
                <td className="px-6 py-4 td">
                    {data.caloriesBurned}
                </td>
                  
            </tr>
            <tr className="bg-neutral-primary">
                <th scope="row" className="th px-6 py-4 font-medium text-heading whitespace-nowrap">
                    RATING
                </th>
                <td className="px-6 py-4 td">
                   {data.rating}
                </td>
                  
            </tr>
        </tbody>
    </table>
</div>
<div className='text-white flex flex-col gap-4'>
  <p className='text-[16px] font-[800]'>INSTRUCTIONS</p>
  <ol className="list-decimal pl-6 text-text-gry text-[14px] font-[400] flex flex-col gap-4">
    {data.instructions.map((inst: string) => (
    <li key={inst}>
      {inst}
    </li>
  ))}
  </ol>
</div>
<div className='text-[14px] font-[600] flex gap-4'>
  <div  className='bg-text-grn p-[12px] rounded-2xl flex items-center gap-2'><Square className="h-3.5 w-3.5" />
  <Link href=""> Add to today&apos;s plan</Link>
  </div>
  <div className='text-text-gry p-[12px] rounded-2xl flex items-center gap-2 border-[1px] border-text-gry'>
  <BookBookmark className='h-3.5 w-3.5'/>
    <Link href="" >Save for later</Link>
  </div>
</div>

        
           </div>
        </div>  
    );
};

export default LibraryDetails;