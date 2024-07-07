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
      timerID = setInterval(() => tick(), 1000);
    }

    return function cleanup() {
      console.log("cleanup");
      clearInterval(timerID);
    };
  }, [start, timer]);

  useEffect(() => {
    setTimer(time);
  }, [time]);
  console.log(timer);
  const tick = () => {
    if (timer === 1) {
      console.log("blblblblblbl", start);
      finish();
      onFinish(false);
    }
    setTimer((prevTimer) => prevTimer - 1);
  };
  console.log(start);

  return { timer };
};
