import Banner from "./_components/banner";
import ExerciseList from "./_components/exercise-list";
import Header from "./_components/header";
import Link from "next/link";
import { db } from "./_lib/prisma";

export default async function Home() {
  const exercises = await db.exercise.findMany({
    take: 10,
    include: {
      category: {
        select: {
          name: true,
        },
      },
    },
  });

  const legExercises = await db.exercise.findMany({
    where: {
      category: {
        name: "legs",
      },
    },
    take: 10,
    include: {
      category: {
        select: {
          name: true,
        },
      },
    },
  });

  const gluteExercises = await db.exercise.findMany({
    where: {
      category: {
        name: "glute",
      },
    },
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
        <Link href="/" className="text-gray-400 text-sm">
          Ver mais
        </Link>
      </div>

      <div className="mt-6 px-2">
        <ExerciseList exercises={exercises} />
      </div>

      <div className="mt-6 px-2 flex justify-between items-center">
        <h2 className="font-semibold text-lg">Rendimento</h2>
        <Link href="/" className="text-gray-400 text-sm">
          Ver mais
        </Link>
      </div>

      <div className="mt-6 px-2 flex justify-between items-center">
        <h2 className="font-semibold text-lg">Leg Day</h2>
        <Link href="/" className="text-gray-400 text-sm">
          Ver mais
        </Link>
      </div>

      <div className="mt-6 px-2">
        <ExerciseList exercises={legExercises} />
      </div>

      <div className="mt-6 px-2 flex justify-between items-center">
        <h2 className="font-semibold text-lg">Exercícios para o Glúteo</h2>
        <Link href="/" className="text-gray-400 text-sm">
          Ver mais
        </Link>
      </div>

      <div className="mt-6 px-2">
        <ExerciseList exercises={gluteExercises} />
      </div>
    </>
  );
}
