"use client";

import { notFound, useRouter, useSearchParams } from "next/navigation";
import ExerciseItem from "../_components/exercise-item";
import { Exercise } from "@prisma/client";
import { useEffect, useState } from "react";
import { searchForExercises } from "./_actions/search";
import { Button } from "../_components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import React, { Suspense } from "react";

const Exercises = () => {
  const router = useRouter();
  const handBackClick = () => router.back();

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
    <Suspense fallback={<div>Loading...</div>}>
      <div className="px-5 py-2 w-[100vw] flex flex-col items-center ">
        {exercises.length > 0 ? (
          <>
            <div className="flex mt-3 gap-2 items-center mb-5 w-full">
              <Button
                className="rounded-full bg-menu text-foreground hover:bg-hover"
                size="icon"
                onClick={handBackClick}
              >
                <ChevronLeftIcon />
              </Button>

              <h1 className="text-lg font-semibold">
                Resultados para `{searchFor}`
              </h1>
            </div>

            <div className="flex flex-col gap-6 w-full max-w-[500px]">
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
    </Suspense>
  );
};

export default Exercises;
