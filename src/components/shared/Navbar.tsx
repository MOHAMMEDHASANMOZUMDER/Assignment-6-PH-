"use client";
import { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Gymcontext } from "@/Context/WorkoutContext";
import { Menu } from "lucide-react";

const Navbar = () => {
    const path = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const {Saved,Plan}=useContext(Gymcontext)

    return (
        <nav className="h-[60px] sm:h-[65px] md:h-[70px] relative w-full px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-black text-white shadow-[0px_4px_25px_0px_#0000000D] transition-all">
            <div className="flex gap-2 sm:gap-3">
                <Image
                    src="/logo.png"
                    width={20}
                    height={20}
                    alt=""
                />
                <p className="text-[16px] sm:text-[18px] font-[700]">FITLOG</p>
       </div>
            <ul className="md:flex hidden items-center gap-5 lg:gap-10">
         <Link href="/" className={`text-[11px] lg:text-[12px] font-[500] ${path === "/" ? "text-text-grn bg-[#364727] rounded-2xl p-2 lg:p-3" : "text-text-gry"}`}>
                    Workouts
                </Link>
                <Link href="/my-plan" className={`text-[11px] lg:text-[12px] font-[500] ${path === "/my-plan" ? "text-text-grn bg-[#364727] rounded-2xl p-2 lg:p-3" : "text-text-gry"}`}>
                    My Plan
                </Link>
            </ul>
            <div >
                 <Link href="/my-plan" className="hidden sm:flex gap-3 md:gap-4 text-[11px] md:text-[12px] font-[500]">
                    <p className="flex gap-3 items-center">Plan <span className="inline-flex bg-text-grn rounded-full w-6 h-6 p-2 text-black items-center font-bold">{Plan.length}</span></p>
                    <p className="flex gap-3 items-center">Saved <span  className="inline-flex w-6 h-6 items-center text-text-gry border-text-gry border-[1px] rounded-full p-1.5 font-bold">{Saved.length}</span></p>
                    </Link>
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} className="menu-btn inline-block md:hidden active:scale-90 transition"><Menu className="w-3.5 h-3.5"/>
            </button>

            <div className={`${menuOpen ? "block" : "hidden"} mobile-menu absolute top-[60px] sm:top-[65px] left-0 w-full bg-black p-4 sm:p-6 md:hidden`}>
                <ul className="flex flex-col space-y-3 sm:space-y-4 text-lg">
                    <Link href="/" onClick={() => setMenuOpen(false)} className={`text-[12px] font-[500] ${path === "/" ? "text-[#c2f800FF] bg-[#364727] rounded-2xl p-3" : "text-[#9ca3afFF]"}`}>
                        Workouts
                    </Link>
                    <Link href="/my-plan" onClick={() => setMenuOpen(false)} className={`text-[12px] font-[500] ${path === "/my-plan" ? "text-[#c2f800FF] bg-[#364727] rounded-2xl p-3" : "text-[#9ca3afFF]"}`}>
                        My Plan
                    </Link>
                </ul>
                <div >
                    <Link href="/my-plan" className="flex gap-4 text-[12px] font-[500] mt-4">
                    <p className="flex gap-3 items-center">Plan <span className="inline-flex bg-text-grn rounded-full w-6 h-6 p-2 text-black items-center font-bold">{Plan.length}</span></p>
                    <p className="flex gap-3 items-center">Saved <span  className="inline-flex w-6 h-6 items-center text-text-gry border-text-gry border-[1px] rounded-full p-1.5 font-bold">{Saved.length}</span></p>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;