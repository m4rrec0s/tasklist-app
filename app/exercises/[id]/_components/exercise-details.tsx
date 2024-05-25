"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { convertDuration } from "@/app/_helpers/timer";
import { Prisma } from "@prisma/client";
import { Clock, Dumbbell, Repeat } from "lucide-react";

interface ExerciseDetailsProps {
  exercise: Prisma.ExerciseGetPayload<{
    include: {
      category: {
        select: {
          name: true;
        };
      };
    };
  }>;
}

const ExerciseDetails = ({ exercise }: ExerciseDetailsProps) => {
  return (
    <div className="py-5 px-3">
      <h1 className="font-semibold text-xl">{exercise.name}</h1>
      <div>
        <p className="text-sm text-muted-foreground bg-gray-800 w-fit px-2 py-1 rounded-lg mt-2">
          {exercise.category.name}
        </p>
      </div>
      <div className="mt-6">
        <p className="text-sm text-muted-foreground text-center">
          {exercise.description}
        </p>
      </div>
      <div className="mt-6 w-full">
        <h3 className="text-sm ">Sobre o exercício</h3>
        <Card className="mt-3 p-6 pb-0">
          <CardContent>
            <div className="flex items-center justify-around">
              <div className="flex flex-col gap-1 items-center">
                <Repeat size={24} color="#6B7280" />
                <span className="font-normal text-xs">Séries</span>
                <span>{exercise.sets}</span>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <Clock size={24} color="#6B7280" />
                <span className="font-normal text-xs">Tempo P/S.</span>
                <span>{convertDuration(exercise.duration)}</span>
              </div>
              {exercise.reps > 0 && (
                <div className="flex flex-col gap-1 items-center">
                  <Dumbbell size={24} color="#6B7280" />
                  <span className="font-normal text-xs">Repetições</span>
                  <span>{exercise.reps}</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExerciseDetails;
