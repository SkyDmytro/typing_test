import { useEffect, useState } from "react";
import { useResults } from "./useResult";

export const useReverseCountDown = ({
  start,
  time,
}: {
  time: number;
  start: boolean;
}) => {
  const [timer, setTimer] = useState(time);
  const { finish } = useResults();
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
  console.log(timer);
  const tick = () => {
    if (timer === 1) {
      finish();
    }
    setTimer((prevTimer) => prevTimer - 1);
  };

  return { timer };
};
