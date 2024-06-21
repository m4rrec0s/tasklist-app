"use server";
import { db } from "../_lib/prisma";

export async function createAdditionalData(data: FormData) {
  const date = data.get("age") as unknown as number;
  const birthDate = new Date(date);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  const gender = data.get("gender") as string;

  const height = parseFloat(data.get("height") as string);
  const weight = parseFloat(data.get("weight") as string);

  const u = await db.user.update({
    where: { id: data.get('id') as string },
    data: {
      age,
      gender,
      height,
      weight,
    },
  });

  console.log(u)
}