import { Prisma } from "@prisma/client";
import ExerciseItem from "./exercise-item";

interface Exercise {
  id: number;
  name: string;
  description: string;
  image: string;
  duration: number;
  rest: number;
  categoryId: number;
  sets: number;
  reps: number;
  category: {
    name: string;
  };
}

interface ExerciseListProps {
  exercises: Prisma.ExerciseGetPayload<{
    include: {
      category: {
        select: {
          name: true;
        };
      };
    };
  }>;
}

const ExerciseList = ({exercises}: ExerciseListProps) => {
  return (
    <div className="flex items-center gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
      {Array.isArray(exercises) && exercises.map((exercise: Exercise) => (
        <ExerciseItem key={exercise.id} exercise={exercise}  />
      ))}
    </div>
  );
};

export default ExerciseList;
