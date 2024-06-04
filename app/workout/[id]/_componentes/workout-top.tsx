"use client";

import { Button } from "@/app/_components/ui/button";
import { Prisma } from "@prisma/client";
import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface WorkoutTopProps {
  workout: Pick<Prisma.WorkoutGetPayload<{}>, "name" | "description" | "image">;
}

const WorkoutTop = ({ workout }: WorkoutTopProps) => {
  return (
    <div className="relative h-[260px] w-full bg-green-700">
      <Image
        src={workout.image}
        alt={workout.name}
        fill
        className="object-cover"
      />

      <Button
        className="absolute left-4 top-4 rounded-full bg-menu text-foreground hover:bg-hover"
        size="icon"
      >
        <Link href={"/"}>
          <ChevronLeftIcon />
        </Link>
      </Button>
    </div>
  );
};

export default WorkoutTop;