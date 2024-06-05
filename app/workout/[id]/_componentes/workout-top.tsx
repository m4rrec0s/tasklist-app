"use client";

import { Button } from "@/app/_components/ui/button";
import { Workout } from "@prisma/client";
import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface WorkoutTopProps {
  workout: Pick<Workout, "name" | "image">;
}

const WorkoutTop = ({workout}: WorkoutTopProps) => {
    const router = useRouter();

    const handBackClick = () => router.back();
  
    return (
      <div className="relative h-[360px] w-full">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
  
        <Button
          className="absolute left-4 top-4 rounded-full bg-menu text-foreground hover:bg-hover"
          size="icon"
          onClick={handBackClick}
        >
          <ChevronLeftIcon />
        </Button>
      </div>
    );
  };
 
export default WorkoutTop;