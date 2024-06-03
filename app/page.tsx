import Banner from "./_components/banner";
import ExerciseList from "./_components/exercise-list";
import Header from "./_components/header";
import Link from "next/link";
import { db } from "./_lib/prisma";
import Menu from "./_components/menu";

export default async function Home() {
  const exercises = await db.exercise.findMany({
    take: 10,
    include: {
      subcategory: {
        select: {
          name: true,
        },
      },
    },
  });

  const legExercises = await db.exercise.findMany({
    where: {
      subcategory: {
        category: {
          name: "Inferiores",
        },
      },
    },
    take: 10,
    include: {
      subcategory: {
        select: {
          name: true,
        },
      },
    },
  });

  const topExercises = await db.exercise.findMany({
    where: {
      subcategory: {
        category: {
          name: "Superiores",
        },
      },
    },
    take: 10,
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

      <div className="py-2 px-2">
        <Header />
      </div>

      <div className="px-2 py-2 mb-2 overflow-y-scroll [&::-webkit-scrollbar]:hidden animate-fadeIn">
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
          <h2 className="font-semibold text-lg">Seus treinos</h2>
          <Link href="/" className="text-gray-400 text-sm">
            Ver mais
          </Link>
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
          <h2 className="font-semibold text-lg">Superiores</h2>
          <Link href="/" className="text-gray-400 text-sm">
            Ver mais
          </Link>
        </div>
        <div className="mt-6 px-2">
          <ExerciseList exercises={topExercises} />
        </div>
      </div>

      <div className="z-10">
        <Menu />
      </div>
    </div>
  );
}
