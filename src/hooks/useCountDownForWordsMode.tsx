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
      timerID = window.setInterval(
        () => setTimer((prevTimer) => prevTimer + 1),
        1000
      );
    }

    return () => {
      window.clearInterval(timerID);
    };
  }, [start, isFinished]);

  useEffect(() => {
    if (isFinished) {
      finish();
    }
  }, [isFinished, finish]);

  return { timer };
};
