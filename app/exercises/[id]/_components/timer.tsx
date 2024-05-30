import { Button } from "@/app/_components/ui/button";
import { PauseIcon, PlayIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

interface TimerProps {
  seconds: number;
  restSeconds: number;
  series: number;
}

const Timer: React.FC<TimerProps> = ({ seconds, restSeconds, series }) => {
  const [countdown, setCountdown] = useState(seconds);
  const [paused, setPaused] = useState(true);
  const [isRestTime, setIsRestTime] = useState(false);
  const [initialCountdown, setInitialCountdown] = useState(3);
  const [showInitialCountdown, setShowInitialCountdown] = useState(true);
  const [showRestMessage, setShowRestMessage] = useState(false);
  const [currentSeries, setCurrentSeries] = useState(1);
  const [showSeriesMessage, setShowSeriesMessage] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (showSeriesMessage) {
      const seriesTimer = setTimeout(() => {
        setShowSeriesMessage(false);
        setShowInitialCountdown(true);
      }, 2000);

      return () => clearTimeout(seriesTimer);
    }
  }, [showSeriesMessage]);

  useEffect(() => {
    if (showInitialCountdown && !showSeriesMessage) {
      const initialTimer = setInterval(() => {
        setInitialCountdown((prevCountdown) => {
          if (prevCountdown > 1) {
            return prevCountdown - 1;
          } else {
            setShowInitialCountdown(false);
            setPaused(false);
            clearInterval(initialTimer);
            return 0;
          }
        });
      }, 1000);

      return () => clearInterval(initialTimer);
    }
  }, [showInitialCountdown, showSeriesMessage]);

  useEffect(() => {
    if (!showInitialCountdown && !paused && !showRestMessage) {
      const timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown > 0) {
            return prevCountdown - 1;
          } else {
            if (!isRestTime) {
              setPaused(true);
              setShowRestMessage(true);
              setTimeout(() => {
                setShowRestMessage(false);
                setIsRestTime(true);
                setCountdown(restSeconds);
                setPaused(false);
              }, 2000);
            } else {
              if (currentSeries < series) {
                setCurrentSeries(currentSeries + 1);
                setIsRestTime(false);
                setCountdown(seconds);
                setShowSeriesMessage(true);
                setInitialCountdown(3);
                setPaused(true);
              } else {
                setIsCompleted(true);
              }
            }
            return prevCountdown;
          }
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [
    paused,
    showInitialCountdown,
    isRestTime,
    restSeconds,
    showRestMessage,
    currentSeries,
    series,
    seconds,
  ]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

return (
    <div className="animate-fadeIn flex flex-col justify-center items-center w-full">
        {!isRestTime && !showRestMessage && !showSeriesMessage && !isCompleted && (
            <h2 className="text-xl font-normal text-center mb-4">
                Vamos lá! Você consegue!
            </h2>
        )}
        {showSeriesMessage ? (
            <p className="text-2xl text-muted-foreground animate-fadeIn text-center">
                Série: {currentSeries} de {series}
            </p>
        ) : showInitialCountdown ? (
            <p className="text-9xl text-muted-foreground animate-in">
                {initialCountdown > 0 ? initialCountdown : "Já!"}
            </p>
        ) : showRestMessage ? (
            <p className="text-2xl text-muted-foreground animate-fadeInOut text-center">
                Descanse!
            </p>
        ) : isCompleted ? (
            <p className="text-2xl text-muted-foreground animate-fadeIn text-center">
                Parabéns! Você completou o exercício! Continue assim 🦾😯
            </p>
        ) : (
            <p className="text-9xl text-muted-foreground animate-in text-center">
                {formatTime(countdown)}
            </p>
        )}
        {!showSeriesMessage && !showInitialCountdown && !showRestMessage && !isCompleted && !isRestTime && (
            <Button
                onClick={() => setPaused((prevPaused) => !prevPaused)}
                className="text-sm text-muted-foreground underline mt-2 hover:bg-hover rounded-lg"
            >
                {paused ? (
                    <PlayIcon size={16} color="#fff" fill="#fff" />
                ) : (
                    <PauseIcon size={16} color="#fff" fill="#fff" />
                )}
            </Button>
        )}
        {isRestTime && !isCompleted && (
            <Button
                onClick={() => setCountdown((prevCountdown) => prevCountdown + 10)}
                className="text-sm mt-2 hover:bg-hover animate-fadeIn rounded-lg"
            >
                <span className="text-white">+ 10s</span>
            </Button>
        )}
    </div>
);
};

export default Timer;