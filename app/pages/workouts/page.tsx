import WorkoutItem from "@/app/_components/workout-item";
import { db } from "@/app/_lib/prisma";

const AllExercises = async () => {
  const workouts = await db.workout.findMany({
    include: {
      exercises: {
        select: {
          id: true,
          name: true,
          image: true,
          subcategory: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  return (
    <div className="w-full">
      <h2 className="pl-3 mb-5 text-lg font-semibold">Treinos</h2>
      <div className="animate-fadeIn flex-grow overflow-y-scroll [&::-webkit-scrollbar]:hidden">
        <div className="px-2 py-2 mb-2">
          <div className="grid grid-cols-2 gap-6">
            {workouts.map((workouts) => (
              <WorkoutItem
                key={workouts.id}
                workout={workouts}
                className="w-full"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllExercises;
