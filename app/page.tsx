import Banner from "./_components/banner";
import ExerciseList from "./_components/exercise-list";
import Link from "next/link";
import { db } from "./_lib/prisma";
import WorkoutList from "./_components/workout-list";
import Header from "./_components/header";
import Menu from "./_components/menu";
import Modal from "./_components/modal";

export default async function Home() {
  const exercises = await db.exercise.findMany({
    take: 10,
    include: {
      subcategory: {
        select: {
          name: true,
          id: true,
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
    <>
    <Modal />
      <div className="h-[100vh] flex lg:hidden flex-col justify-between">
        <div className="mt-2 mb-8 px-2">
          <Header />
        </div>
        <div className="flex flex-col px-2 py-2 mb-2 overflow-y-scroll [&::-webkit-scrollbar]:hidden animate-fadeIn">
          <div className="h-[100vh]">
            <div className="mb-8 px-2">
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
            <div className="mt-6 px-2">
              <WorkoutList workouts={workouts} />
            </div>
            {/* <div className="mt-6 px-2 flex justify-between items-center">
                <h2 className="font-semibold text-lg">Rendimento</h2>
                <Link href="/" className="text-gray-400 text-sm">
                  Ver mais
                </Link>
              </div> */}
            {/* <div className="mt-6 px-2">
                <PerformanceList />
              </div> */}
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
        </div>
        <Menu />
      </div>

      {/* Tablets e Computadores */}

      <div className="hidden lg:flex max-h-[100vh]">
        <div>
          <Menu />
        </div>
        <div className="w-[100vw] h-[100vh] flex flex-col px-2 py-2 mb-2 overflow-y-scroll [&::-webkit-scrollbar]:hidden animate-fadeIn">
          <div className="mt-4 mb-8 px-2">
            <Header />
          </div>
          <div>
            <div className="mb-8 px-2">
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
            <div className="mt-6 px-2">
              <WorkoutList workouts={workouts} />
            </div>
            {/* <div className="mt-6 px-2 flex justify-between items-center">
                <h2 className="font-semibold text-lg">Rendimento</h2>
                <Link href="/" className="text-gray-400 text-sm">
                  Ver mais
                </Link>
              </div> */}
            {/* <div className="mt-6 px-2">
                <PerformanceList />
              </div> */}
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
        </div>
      </div>

    </>
  );
}
