import { Prisma } from "@prisma/client";
import ExerciseItem from "./exercise-item";

interface exerciseListProps {
  exercises: Prisma.ExerciseGetPayload<{
    include: {
      subcategory: {
        select: {
          name: true;
        };
      };
    };
  }>[]
}

const ExerciseList = ({exercises}: exerciseListProps) => {
  return (
    <div className="flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
      {exercises.map((exercise) => (
        <ExerciseItem key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
};

export default ExerciseList;
