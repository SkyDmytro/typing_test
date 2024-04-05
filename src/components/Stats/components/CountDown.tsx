import { useCountDown } from "../../../hooks/useCountDown";
import { ResultType } from "../../../types/results";

export const CountDown = ({
  time,
  start,
  setResults,
}: {
  time: number;
  start: boolean;
  setResults: React.Dispatch<React.SetStateAction<ResultType>>;
}) => {
  const { timer } = useCountDown({ time, start, setResults });

  return (
    <div className="wrapper">
      <div id="current-time">{timer > 0 ? timer : 0}s</div>
    </div>
  );
};
