import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import Banner from "./_components/banner";
import ExerciseList from "./_components/exercise-list";
import Header from "./_components/header";

type Exercise = {
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
};

export default async function Home() {
  const exercises: Exercise[] = await prisma.exercise.findMany({
    take: 10,
    include: {
      category: {
        select: {
          name: true,
        },
      },
    },
  });

  return (
    <>
      <div className="pt-2 px-2">
        <Header />
      </div>

      <div className="mt-10 px-2">
        <Banner />
      </div>

      <h2 className="mt-6 px-2 font-semibold text-lg">Exercícios Recentes</h2>

      <div className="mt-6 px-2">
        <ExerciseList exercises={exercises} />
      </div>

      <h2 className="mt-6 px-2 font-semibold text-lg">Rendimento</h2>
    </>
  );
}