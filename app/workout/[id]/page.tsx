import { db } from "@/app/_lib/prisma";
import { notFound } from "next/navigation";
import WorkoutTop from "./_componentes/workout-top";
import WorkoutDetails from "./_componentes/workout-details";

interface WorkoutPageProps {
  params: {
    id: string;
  };
}

const WorkoutPage = async ({ params: { id } }: WorkoutPageProps) => {
  const workout = await db.workout.findUnique({
    where: {
      id,
    },
    include: {
      exercises: {
        include: {
          subcategory: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  if (!workout) {
    return notFound();
  }
  return (
    <div className="mt-3 pb-3 px-2">
      <WorkoutTop workout={workout} />
      <WorkoutDetails exercises={workout.exercises} />
    </div>
  );
};

export default WorkoutPage;
