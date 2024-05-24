import { db } from "@/app/_lib/prisma";
import { notFound } from "next/navigation";
import ExerciseImage from "./_components/exercise-image";

interface ExercisePageProps {
    params: {
        id: number,
    };
}

const ExercisePage = async ({ params: { id } }: ExercisePageProps) => {
    const exercise = await db.exercise.findUnique({
        where: {
            id: Number(id),
        },
        include: {
            category: {
                select: {
                    name: true,
                },
            },
        },
    });

    if (!exercise) {
        return notFound();
    }

    return (
        <div>
            <ExerciseImage exercise={exercise} />
        </div>
    );
}
 
export default ExercisePage;