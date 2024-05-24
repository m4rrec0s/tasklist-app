import ExerciseItem from "@/app/_components/exercise-item";
import ExerciseList from "@/app/_components/exercise-list";
import Header from "@/app/_components/header";
import { db } from "@/app/_lib/prisma";

const AllExercises = async () => {
  const exercises = await db.exercise.findMany({
    include: {
      category: {
        select: {
          name: true,
        },
      },
    },
  });
  return <div className="px-2 py-6">
    <Header />
      <div>
        <h2 className="mb-5 text-lg font-semibold">Exercícios</h2>
        <div className="grid grid-cols-2 gap-6">
          {exercises.map((exercises) => (
            <ExerciseItem
              key={exercises.id}
              exercise={exercises}
              className="w-full"
            />
          ))}
        </div>
      </div>
    </div>;
};

export default AllExercises;
