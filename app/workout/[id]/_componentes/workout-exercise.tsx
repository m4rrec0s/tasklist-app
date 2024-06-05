"use client"

import { Button } from "@/app/_components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { Checkbox } from "@/app/_components/ui/checkbox";
import { Prisma } from "@prisma/client";
import Link from "next/link";
import { useState } from "react";

interface WorkoutExerciseProps {
  exercises: Prisma.WorkoutGetPayload<{
    include: {
      exercises: {
        select: {
          id: true;
          name: true;
          description: true;
        };
      };
    };
  }>;
}
const WorkoutExercise = ({ exercises }: WorkoutExerciseProps) => {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleCheckboxChange = () => {
      setIsCompleted(!isCompleted);
    };
  
    return (
      <Card className={isCompleted ? "opacity-50" : ""}>
        <CardHeader>
          <CardTitle>{exercises.name}</CardTitle>
          <CardDescription>{exercises.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <Link href={`/exercises/${exercises.id}`} className="outline-none p-0 underline text-sm">
            Ver Exercício
          </Link>
          <Checkbox checked={isCompleted} onClick={handleCheckboxChange} />
        </CardContent>
      </Card>
    );
  };
  
  export default WorkoutExercise;
