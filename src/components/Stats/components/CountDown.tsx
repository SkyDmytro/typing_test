import { useState, useEffect } from "react";
import { ResultType } from "../../../types/results";


export const CountDown = ({ time, start,setResults }: { time: number; start: boolean,setResults: React.Dispatch<React.SetStateAction<ResultType>>}) => {
  const [timer, setTimer] = useState(time);

  useEffect(() => {
    let timerID:number;

    if (start && timer > 0) { 
      timerID = setInterval(() => tick(), 1000);
    }

    return function cleanup() {
      clearInterval(timerID);
    };
  }, [start, timer]);

  const tick = () => {
    if(timer===1){
      setResults((prevResults)=>({...prevResults,isFinished:true}))
    }
    setTimer((prevTimer) => prevTimer - 1);
  };

  return (
    <div className="wrapper">
      <div id="current-time">{timer > 0 ? timer : 0}s</div>
    </div>
  );
};
