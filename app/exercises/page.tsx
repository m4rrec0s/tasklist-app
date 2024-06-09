"use client";

import { notFound, useSearchParams } from "next/navigation";
import Header from "../_components/header";
import ExerciseItem from "../_components/exercise-item";
import { Exercise } from "@prisma/client";
import { useEffect, useState } from "react";
import { searchForExercises } from "./_actions/search";

const Exercises = () => {
  const searchParams = useSearchParams();
  const [exercises, setexercises] = useState<Exercise[]>([]);
  const searchFor = searchParams.get("search");

  useEffect(() => {
    const fetchExercises = async () => {
      if (!searchFor) return;
      const foundExercises = await searchForExercises(searchFor);
      setexercises(foundExercises);
    };

    fetchExercises();
  }, [searchFor]);

  if (!searchFor) {
    return notFound();
  }

  return (
    <>
      <div className="px-2 py-2">
        <Header />
      </div>
      <div className="px-5 py-6">
        {exercises.length > 0 ? (
          <>
            <h2 className="mb-5 text-lg font-semibold">
              Exercícios Encontrados
            </h2>
            <div className="flex flex-col gap-6">
              {exercises.map((exercise) => (
                <ExerciseItem
                  key={exercise.id}
                  exercise={exercise}
                  className="min-w-full max-w-full"
                />
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-center items-center h-[800px]">
            <h2 className="mb-5 text-sm font-normal text-muted-foreground ">
              Nenhum exercício encontrado
            </h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Exercises;
