import { db } from "@/app/_lib/prisma";
import { notFound } from "next/navigation";
import WorkoutTop from "./_componentes/workout-top";

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
        select: {
          id: true,
          name: true,
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
    <div>
        <WorkoutTop workout={workout} />
    </div>
  );
};

export default WorkoutPage;
