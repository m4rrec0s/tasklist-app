import { Prisma } from "@prisma/client";
import Link from "next/link";
import { cn } from "../_lib/utils";
import Image from "next/image";

interface WorkoutItemProps {
  workout: Prisma.WorkoutGetPayload<{
    include: {
      exercises: {
        select: {
          id: true;
          name: true;
          image: true;
          subcategory: {
            select: {
              name: true;
            };
          };
        };
      };
    };
  }>;
  className?: string;
}
const WorkoutItem = ({ workout, className }: WorkoutItemProps) => {
  return (
    <div className="flex flex-col items-stretch">
      <Link
        className={cn("h-[180px] flex flex-col", className)}
        href={`/workout/${workout.id}`}
      >
        <div className="w-full h-0 flex-grow space-y-2">
          <div className="relative aspect-video bg-green-700 rounded-lg h-[120px] w-full">
            <Image
              src={workout.image}
              alt={workout.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg object-cover shadow-md"
            />
          </div>
          <div className="flex-shrink-0">
            <h2 className="truncate text-sm">{workout.name}</h2>
          </div>
          <span className="text-muted-foreground text-xs truncate flex-shrink-0">
            {workout.description}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default WorkoutItem;
