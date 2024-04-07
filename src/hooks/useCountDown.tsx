import React, { useEffect, useState } from "react";
import { ResultType } from "../types/results";

export const useCountDown = ({
  start,
  time,
  setResults,
}: {
  time: number;
  start: boolean;
  setResults: React.Dispatch<React.SetStateAction<ResultType>>;
}) => {
  const [timer, setTimer] = useState(time);

  useEffect(() => {
    let timerID: number;

    if (start && timer > 0) {
      timerID = setInterval(() => tick(), 1000);
    }

    return function cleanup() {
      clearInterval(timerID);
    };
  }, [start, timer]);

  useEffect(() => {
    setTimer(time);
  }, [time]);

  const tick = () => {
    if (timer === 1) {
      setResults((prevResults) => ({ ...prevResults, isFinished: true }));
    }
    setTimer((prevTimer) => prevTimer - 1);
  };

  return { timer };
};
