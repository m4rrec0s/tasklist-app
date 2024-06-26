"use client";

import { Button } from "@/app/_components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { convertDuration } from "@/app/_helpers/timer";
import { Prisma } from "@prisma/client";
import { Clock, Dumbbell, Repeat } from "lucide-react";
import { useState } from "react";
import Timer from "./timer";

interface ExerciseDetailsProps {
  exercise: Prisma.ExerciseGetPayload<{
    include: {
      subcategory: {
        include: {
          category: true;
        };
      };
    };
  }>;
}

const ExerciseDetails = ({ exercise }: ExerciseDetailsProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="py-5 px-3">
      <h1 className="font-semibold text-xl">{exercise.name}</h1>
      <div className="flex gap-2">
        <p className="text-sm text-muted-foreground bg-slate-900 w-fit px-2 py-1 rounded-lg mt-2">
          {exercise.subcategory.category.name}
        </p>
        <p className="text-sm text-muted-foreground bg-gray-800 w-fit px-2 py-1 rounded-lg mt-2 first-letter:uppercase">
          {exercise.subcategory.name}
        </p>
      </div>
      <div className="mt-6">
        <p className="text-sm text-muted-foreground text-center">
          {exercise.description}
        </p>
      </div>
      <div className="mt-6 w-full">
        <h3 className="text-sm">Sobre o exercício</h3>
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
      <div className="fixed bottom-2 left-0 w-full flex justify-center mt-6 px-5">
        <Button
          className="w-full hover:bg-hover rounded-lg"
          onClick={handleButtonClick}
        >
          Iniciar exercício
        </Button>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
        <DialogContent className="bg-menu h-full">
          <DialogHeader>
            <DialogTitle>{exercise.name}</DialogTitle>
          </DialogHeader>
          <div>
            <div className="flex justify-center items-center">
              <Timer
                seconds={exercise.duration}
                restSeconds={exercise.rest}
                series={exercise.sets}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ExerciseDetails;