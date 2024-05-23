import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import Banner from "./_components/banner";
import ExerciseList from "./_components/exercise-list";
import Header from "./_components/header";
import Link from "next/link";

export default async function Home() {
  const exercises = await prisma.exercise.findMany({
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

      <div className="mt-6 px-2 flex justify-between items-center">
        <h2 className="font-semibold text-lg">Exercícios Recentes</h2>
        <Link href="/" className="text-gray-400 text-sm">Ver Todos</Link>
      </div>

      <div className="mt-6 px-2">
        <ExerciseList exercises={exercises} />
      </div>

      <h2 className="mt-6 px-2 font-semibold text-lg">Rendimento</h2>
    </>
  );
}