"use client"
import { usePathname } from "next/navigation";
import Link from 'next/link';
import React from 'react';
import Image from "next/image";
const Navbar = () => {
    const path= usePathname();
    return (
        <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-black text-white shadow-[0px_4px_25px_0px_#0000000D] transition-all">
    <div className="flex gap-3">
        <Image
    src="/logo.png"
    width={20}
    height={20}
    alt=""
    ></Image>    
    <p className='text-[18px] font-[700]'>FITLOG</p>
    </div>

    <ul className="md:flex hidden items-center gap-10">
        <Link href="/" className={`text-[12px] font-[500] ${path==="/" ? "text-text-grn bg-[#364727] rounded-2xl p-3" : "text-text-gry"}`}>
         Workouts
        </Link>
        <Link href="/myplan" className={`text-[12px] font-[500] ${path==="/myplan" ? "text-text-grn bg-[#364727] rounded-2xl p-3" : "text-text-gry"}`}>My Plan</Link>
    </ul>

    <div className='flex gap-4 text-[12px] font-[500]'>
        <p>
        Plan
    </p>
    <p>
        Saved
    </p>
    </div>
    <button aria-label="menu-btn" type="button" className="menu-btn inline-block md:hidden active:scale-90 transition">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#000">
            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
        </svg>
    </button>

    <div className="mobile-menu absolute top-[70px] left-0 w-full bg-white p-6 hidden md:hidden">
        <ul className="flex flex-col space-y-4 text-lg">
            <Link href="/" className={`text-[12px] font-[500] ${path==="/" ? "text-[#c2f800FF] bg-[#364727] rounded-2xl p-3" : "text-[#9ca3afFF]"}`}>
         Workouts
        </Link>
        <Link href="/myplan" className={`text-[12px] font-[500] ${path==="/myplan" ? "text-[#c2f800FF] bg-[#364727] rounded-2xl p-3" : "text-[#9ca3afFF]"}`}>My Plan</Link>
        </ul>

        <div className='flex gap-4 text-[12px] font-[500]'>
        <p>
        Plan
    </p>
    <p>
        Saved
    </p>
    </div>
    </div>
</nav>
    );
};

export default Navbar;