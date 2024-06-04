import { Prisma } from "@prisma/client";
import WorkoutItem from "./workout-item";

interface WorkoutListProps {
    workouts: Prisma.WorkoutGetPayload<{
        include: {
            exercises: {
                select: {
                    id: true;
                    name: true;
                    image: true;
                    subcategory: {
                        select: {
                            name: true;
                        };
                    };
                };
            };
        };
    }>[];
}

const WorkoutList = ({workouts}: WorkoutListProps) => {
    return <div className="flex items-center gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
        {workouts.map((workout) => (
            <WorkoutItem key={workout.id} workout={workout} />
        ))}
    </div>;
};

export default WorkoutList;
