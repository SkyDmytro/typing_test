import { useCountDown } from "../../../hooks/useCountDown";

export const CountDown = ({
  time,
  start,
}: {
  time: number;
  start: boolean;
}) => {
  const { timer } = useCountDown({ time, start });

  return (
    <div className="wrapper">
      <div id="current-time">{timer > 0 ? timer : 0}s</div>
    </div>
  );
};
