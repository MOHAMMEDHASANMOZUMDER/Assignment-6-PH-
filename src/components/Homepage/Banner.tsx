import React from 'react';
import { Oswald } from 'next/font/google';
import Image from 'next/image';
const oswald = Oswald({
  subsets: ["latin"]
});

const Banner = () => {
    return (
        <div className="bg-black px-4 py-4 sm:px-6 sm:py-6 md:px-8 lg:px-12 lg:py-6">
  <div className="grid grid-cols-1 gap-8 rounded-2xl bg-[#20232c] p-6 sm:p-8 md:grid-cols-2 md:items-center md:gap-10 lg:gap-16 lg:p-14">
    <div className="flex flex-col gap-4">
      <p className="text-[11px] font-[700] text-text-grn">
        WORKOUT LIBRARY
      </p>
      <p className={`${oswald.className} text-[36px] leading-tight font-[700] text-white sm:text-[44px] md:text-[48px] lg:text-[60px]`}>
        TRAIN WITH INTENT. LOG EVERY SET
      </p>
      <p className="text-[14px] font-[400] leading-relaxed text-text-gry sm:text-[15px] md:text-[16px]">
        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
        today&apos;s plan, and watch the week&apos;s work add up
      </p>
      <a href="#Library" className="w-fit rounded-xl bg-text-grn px-6 py-3 text-[12px] font-[700] text-black">
        BROWSE WORKOUTS
      </a>
    </div>
    <div className="flex justify-center md:justify-end">
      <Image
        src="/banner.png"
        height={400}
        width={400}
        alt="Banner"
        className="h-auto w-full max-w-[280px] sm:max-w-[340px] md:max-w-[350px] lg:max-w-[400px]"
      />
    </div>
  </div>
</div>
    );
};

export default Banner;