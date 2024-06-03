import ExerciseItem from "@/app/_components/exercise-item";
import Header from "@/app/_components/header";
import Menu from "@/app/_components/menu";
import { db } from "@/app/_lib/prisma";

const AllExercises = async () => {
  const exercises = await db.exercise.findMany({
    include: {
      subcategory: {
        select: {
          name: true,
        },
      },
    },
  });

  return (
    <div className="h-[100vh] flex flex-col justify-between">
      <div className="py-2 px-2 sticky top-0">
        <Header />
      </div>

      <h2 className="mb-5 text-lg font-semibold">Treinos</h2>
      <div className="animate-fadeIn flex-grow overflow-y-scroll [&::-webkit-scrollbar]:hidden">
        <div className="px-2 py-2 mb-2">
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
      </div>

      <div className="z-10 sticky bottom-0">
        <Menu />
      </div>
    </div>
  );
};

export default AllExercises;
