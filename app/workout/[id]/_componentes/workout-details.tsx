import { Prisma } from "@prisma/client";
import WorkoutExercise from "./workout-exercise";

interface WorkoutDetailsProps {
  exercises: Prisma.WorkoutGetPayload<{
    include: {
      exercises: {
        select: {
          id: true;
          name: true;
          description: true;
        };
      };
    };
  }>[];
}

const WorkoutDetails = ({ exercises }: WorkoutDetailsProps) => {
  return (
    <div className="flex flex-col gap-4 overflow-y-scroll [&::-webkit-scrollbar]:hidden">
      {exercises.map((exercise) => (
        <WorkoutExercise key={exercise.id} exercises={exercise} />
      ))}
    </div>
  );
};

export default WorkoutDetails;
