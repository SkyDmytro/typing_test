import { useEffect, useState } from "react";
import { useResults } from "./useResult";

export const useReverseCountDown = ({
  start,
  time,
  onFinish,
}: {
  time: number;
  start: boolean;
  onFinish: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [timer, setTimer] = useState(time);
  const { finish } = useResults();

  useEffect(() => {
    let timerID: number;

    if (start && timer > 0) {
      timerID = window.setInterval(
        () => setTimer((prevTimer) => prevTimer - 1),
        1000
      );
    }

    return function cleanup() {
      window.clearInterval(timerID);
    };
  }, [start, timer]);

  useEffect(() => {
    setTimer(time);
  }, [time]);

  useEffect(() => {
    if (timer === 0) {
      finish();
      onFinish(false);
    }
  }, [timer, finish]);

  return { timer };
};
