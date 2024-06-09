"use server";

import { db } from "@/app/_lib/prisma";

export const searchForExercises = async (search: string) => {
  const exercises = await db.exercise.findMany({
    where: {
        name: {
          contains: search,
          mode: "insensitive",
        },
      },
    });


  return exercises;
};
