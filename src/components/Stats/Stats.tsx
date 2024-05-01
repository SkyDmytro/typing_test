import { useContext } from "react";
import { CountDown } from "./components/CountDown";
import { StatsBlock } from "./components/StatsBlock";
import { ModeContext, ResultsContext } from "../TypingTest/TypingTest";
import "./components/styles/stats.style.scss";

interface StatsProps {
  time: number;
  start: boolean;
}

export const Stats = ({ time, start }: StatsProps) => {
  const { results, setResults } = useContext(ResultsContext);
  const { mode } = useContext(ModeContext);
  return (
    <div className="stats-container">
      {mode === "time" && (
        <CountDown setResults={setResults} start={start} time={time} />
      )}
      {results.isFinished && <StatsBlock results={results} />}
    </div>
  );
};
