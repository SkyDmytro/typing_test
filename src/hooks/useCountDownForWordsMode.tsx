import { useEffect, useState } from "react";

export const useCountDownForWordsMode = ({
  start,
  isFinished,
}: {
  start: boolean;
  isFinished: boolean;
}) => {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    let timerID: NodeJS.Timeout;

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
