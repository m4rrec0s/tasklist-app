import ExerciseItem from "./exercise-item";

type Exercise = {
  id: string;
  name: string;
  description: string;
  image: string;
  duration: number;
  rest: number;
  sets: number;
  reps: number;
  subcategoryId: number;
  categoryId: number;
  category: string;
  subcategory: {
    name: string;
  };
};

type ExerciseListProps = {
  exercises: Exercise[];
};

const ExerciseList: React.FC<ExerciseListProps> = ({ exercises }) => {
  return (
    <div className="flex items-center gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
      {Array.isArray(exercises) && exercises.map((exercise: Exercise) => (
        <ExerciseItem key={exercise.id} exercise={exercise}  />
      ))}
    </div>
  );
};

export default ExerciseList;
