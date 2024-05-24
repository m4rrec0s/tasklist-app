"use client";

import { Button } from "@/app/_components/ui/button";
import { Exercise } from "@prisma/client";
import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ExerciseImageProps {
  exercise: Pick<Exercise, "name" | "image">;
}

const ExerciseImage = ({exercise}: ExerciseImageProps) => {
    const router = useRouter();

    const handBackClick = () => router.back();
  
    return (
      <div className="relative h-[360px] w-full">
        <Image
          src={exercise.image}
          alt={exercise.name}
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
 
export default ExerciseImage;