import React from 'react';
import Link from 'next/link';
import { Oswald } from 'next/font/google';
const oswald = Oswald({
  subsets: ["latin"]
});
const NotFound = () => {
    return (
        <div className={`${oswald.className} min-h-screen bg-black flex flex-col items-center justify-center text-center px-6`}>
    <h1 className="text-text-grn text-8xl font-extrabold">
        404
      </h1>
 <h2 className="text-white text-2xl font-bold mt-4">
        PAGE NOT FOUND
      </h2>
      <Link href="/" className="mt-6 bg-text-grn text-black px-6 py-3 rounded-full font-bold hover:-translate-y-1 transition">
        Back to Workouts
      </Link>
    </div>
    );
};

export default NotFound;