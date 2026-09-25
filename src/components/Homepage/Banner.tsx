import React from 'react';
import { Oswald } from 'next/font/google';
import Image from 'next/image';
const oswald = Oswald({
  subsets: ["latin"]
});

const Banner = () => {
    return (
        <div className='bg-black px-[48px] py-[24px]'>
            <div className='grid grid-cols-2 gap-[228px] p-[56px] bg-[#20232c] rounded-2xl'>
                <div className='flex flex-col gap-4'>
                    <p className='text-[11px] font-[700] text-text-grn'>WORKOUT LIBRARY</p>
                    <p className={`${oswald.className} text-[60px] font-[700] text-white`}>TRAIN WITH INTENT. LOG EVERY SET</p>
                    <p className='text-[16px] font-[400] text-text-gry'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up</p>
                    <a href="#library" className='text-[12px] bg-text-grn text-black px-[24px] py-[12px] rounded-xl font-[700] w-[180px]'>BROWSE WORKOUTS</a>
                </div>
                <div>
                    <Image
                    src="/banner.png"
                    height={400}
                    width={400}
                    alt='Banner'
                    ></Image>
                </div>
            </div>
        </div>
    );
};

export default Banner;