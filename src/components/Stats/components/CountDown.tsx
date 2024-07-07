import { useReverseCountDown } from "../../../hooks/useReverseCountDown";

export const CountDown = ({
  time,
  start,
  onFinish,
}: {
  time: number;
  start: boolean;
  onFinish: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { timer } = useReverseCountDown({ time, start, onFinish });

  return (
    <div className="wrapper">
      <div id="current-time">{timer > 0 ? timer : 0}s</div>
    </div>
  );
};
