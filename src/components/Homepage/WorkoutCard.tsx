import Link from "next/link";
import Image from "next/image";
import { Clock, Flame, Star } from "lucide-react";
import { WorkoutType } from "@/types/Types";

type Props = {
  workout: WorkoutType;
};

const WorkoutCard = ({ workout }: Props) => {
  return (
    <Link href={`/Library/${workout.id}`}
      className="group block overflow-hidden rounded-2xl border border-slate-800 bg-[#121824] font-sans text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#ccff00]">
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"/>
        
</div>
      <div className="p-4 flex flex-col gap-4">
        <div className="flex flex-wrap gap-1.5">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#ccff00] px-2.5 py-1 text-[11px] font-extrabold tracking-wide text-black uppercase"
            >
              {muscle}
            </span>
          ))}
        </div>
        <h3 className="text-base font-extrabold tracking-wide uppercase text-white transition-colors group-hover:text-[#ccff00]">
          {workout.name}
        </h3>
        <p className="mt-1 text-xs text-slate-400">
          {workout.equipment}
        </p>
<div className="mt-4 flex items-center justify-between border-t border-slate-800/80 pt-3 text-xs font-medium text-slate-400">
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            <span>{workout.duration} min</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Flame className="h-3.5 w-3.5" />
            <span>{workout.caloriesBurned} kcal</span>
          </div>
        <div className="flex items-center gap-1.5">
            <Star className="h-3.5 w-3.5" />
            <span>{workout.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;