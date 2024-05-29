import { Button } from '@/app/_components/ui/button';
import { PauseIcon, PlayIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface TimerProps {
    seconds: number;
    restSeconds: number; 
}

const Timer: React.FC<TimerProps> = ({ seconds, restSeconds }) => {
    const [countdown, setCountdown] = useState(seconds);
    const [paused, setPaused] = useState(false);
    const [isRestTime, setIsRestTime] = useState(false); // Add state for rest time

    useEffect(() => {
        const timer = setInterval(() => {
            if (!paused) {
                setCountdown((prevCountdown) => {
                    if (prevCountdown > 0) {
                        return prevCountdown - 1;
                    } else {
                        if (!isRestTime) {
                            setIsRestTime(true);
                            setCountdown(restSeconds); // Start rest time countdown
                        } else {
                            setPaused(true);
                        }
                        return prevCountdown;
                    }
                });
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [paused, isRestTime, restSeconds]);

    useEffect(() => {
        if (countdown === 0 && isRestTime) {
            // Mostrar 
            
        }
    }, [countdown, isRestTime]);

    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div>
            <p className='text-9xl text-muted-foreground animate-in'>{formatTime(countdown)}</p>
            <Button
                onClick={() => setPaused((prevPaused) => !prevPaused)}
                className='text-sm text-muted-foreground underline mt-2 hover:bg-hover'
            >
                {paused ? <PlayIcon size={16} color='#fff' fill='#fff' /> : <PauseIcon size={16} color='#fff' fill='#fff' />}
            </Button>
        </div>
    );
};

export default Timer;