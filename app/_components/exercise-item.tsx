import { Exercise, Prisma } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface ExerciseItemProps {
  exercise: Prisma.ExerciseGetPayload<{
    include: {
      category: {
        select: {
          name: true;
        };
      };
    };
  }>;
}

const ExerciseItem = ({ exercise }: ExerciseItemProps) => {
  return (
    <Link className={"w-[150px] min-w-[150px]"} href={`/exercises/${exercise.id}`}>
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
            <span className="text-xs text-gray-400 first-letter:uppercase">{exercise.category.name}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExerciseItem;
