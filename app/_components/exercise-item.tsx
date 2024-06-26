import { Prisma } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "../_lib/utils";
import { convertDuration } from "../_helpers/timer";

interface ExerciseItemProps {
  exercise: Prisma.ExerciseGetPayload<{
  }>;
  className?: string;
}

const ExerciseItem = ({ exercise, className }: ExerciseItemProps) => {
  return (
    <Link className={cn("w-[150px] min-w-[150px]", className)} href={`/exercises/${exercise.id}`}>
      <div className="w-full space-y-2">
        <div className="relative aspect-square w-full">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            className="rounded-lg object-cover shadow-md"
          />
        </div>
        <div>
          <h2 className="truncate text-sm">{exercise.name}</h2>
          <div className="flex items-center gap-1">
            {exercise.duration && (
              <span className="text-xs text-gray-400 first-letter:uppercase">Duração Média: {convertDuration(exercise.duration * exercise.reps)}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExerciseItem;
