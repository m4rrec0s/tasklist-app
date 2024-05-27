import { db } from "@/app/_lib/prisma";
import { notFound } from "next/navigation";
import ExerciseImage from "./_components/exercise-image";
import ExerciseDetails from "./_components/exercise-details";

interface ExercisePageProps {
    params: {
        id: string,
    };
}

const ExercisePage = async ({ params: { id } }: ExercisePageProps) => {
    const exercise = await db.exercise.findUnique({
        where: {
            id,
        },
        include: {
            subcategory: {
                include: {
                    category: true,
                }
            },
        },
    });

    if (!exercise) {
        return notFound();
    }

    return (
        <div>
            <ExerciseImage exercise={exercise} />

            <ExerciseDetails exercise={exercise} />
        </div>
    );
}
 
export default ExercisePage;