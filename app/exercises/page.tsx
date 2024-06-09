"use client";

import { notFound, useSearchParams } from "next/navigation";
import Header from "../_components/header";
import ExerciseItem from "../_components/exercise-item";
import { Exercise } from "@prisma/client";
import { useEffect, useState } from "react";
import { searchForExercises } from "./_actions/search";
import Search from "../_components/search";

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
      <div className="px-2 pt-2">
        <Header />
        <Search />
      </div>
      <div className="px-5 py-6">
        <h2 className="mb-5 text-lg font-semibold">Exercícios Encontrados</h2>
        <div className="flex flex-col gap-6">
          {exercises.map((exercise) => (
            <ExerciseItem
              key={exercise.id}
              exercise={exercise}
              className="min-w-full max-w-full"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Exercises;
