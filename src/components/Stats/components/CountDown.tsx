import { useReverseCountDown } from "../../../hooks/useReverseCountDown";

export const CountDown = ({
  time,
  start,
}: {
  time: number;
  start: boolean;
}) => {
  const { timer } = useReverseCountDown({ time, start });
  console.log("timer", timer);

  return (
    <div className="wrapper">
      <div id="current-time">{timer > 0 ? timer : 0}s</div>
    </div>
  );
};
