import { useEffect, useState } from "react";
import { useResults } from "./useResult";

export const useCountDownForWordsMode = ({
  start,
  isFinished,
}: {
  start: boolean;
  isFinished: boolean;
}) => {
  const [timer, setTimer] = useState(0);
  const { finish } = useResults();
  useEffect(() => {
    let timerID: number;

    if (start && !isFinished) {
      timerID = setInterval(() => tick(), 1000);
    }

    return function cleanup() {
      clearInterval(timerID);
    };
  }, [start, timer]);

  useEffect(() => {});

  const tick = () => {
    setTimer((prevTimer) => prevTimer + 1);
  };

  return { timer };
};
