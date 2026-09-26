import React from 'react';
import { Oswald } from 'next/font/google';
import SavedGym from './SavedGym';
const oswald = Oswald({
  subsets: ["latin"]
});
const Myplanpage = () => {
    return (
        <div className='bg-black'>
            <div>
            <p className={`${oswald.className} text-white text-[30px] font-[700]`}>MY PLAN</p>
            <p className='text-[14px] font-[400] text-text-gry'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <div>
                <div>
                    <p>Exercise</p>
                </div>
                <div>
                    <p>Minute</p>
                </div>
                <div>
                    <p>Calories</p>
                </div>
            </div>
            <div>
                <SavedGym></SavedGym>
            </div>
            <div></div>
        </div>
    );
};

export default Myplanpage;