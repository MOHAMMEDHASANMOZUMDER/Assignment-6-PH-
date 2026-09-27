import { Suspense } from "react";
import WorkoutCard from "../../components/Homepage/WorkoutCard";
import { WorkoutType } from "@/types/Types";
import { Oswald } from "next/font/google";
const oswald = Oswald({
  subsets: ["latin"]
});

const Workoutdata= async()=>{
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog");
  const data = await res.json();
  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((workout:WorkoutType) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
  )
 }

const LibraryPage = async () => {
  return (
    <div className="bg-black p-12 flex flex-col gap-4" id="Library">
        <div className="text-white text-[30px] font-[700]">THE LIBRARY</div>
      <div className="text-text-gry font-[400]">Twelve lifts covering every major muscle group.</div>
      <div>
    <Suspense fallback={<div className="flex flex-col gap-3 justify-center items-center text-white">
      <p className={`${oswald.className} td`}>Loading Data</p>
      <span className="loading loading-bars loading-md"></span>
    </div>}>
 <Workoutdata></Workoutdata>
      </Suspense>
    </div>
      

    </div>
  );
};

export default LibraryPage;