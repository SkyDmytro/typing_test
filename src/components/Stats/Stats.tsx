import { useContext } from "react";
import { CountDown } from "./components/CountDown";
import { StatsBlock } from "./components/StatsBlock";
import { ModesContext, ResultsContext } from "../TypingTest/TypingTest";
import "./components/styles/stats.style.scss";
import { ThemeContext } from "../../pages/MainPage/MainPage";
import styled from "styled-components";

interface StatsProps {
  time: number;
  start: boolean;
  onFinish: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Stats = ({ time, start, onFinish }: StatsProps) => {
  const { results } = useContext(ResultsContext);
  const { mode } = useContext(ModesContext);
  const { theme } = useContext(ThemeContext);
  const StyledContainer = styled.div`
    color: ${theme.secondaryColor};
  `;
  return (
    <StyledContainer className="stats-container">
      {mode === "time" && (
        <CountDown start={start} time={time} onFinish={onFinish} />
      )}
      {results.isFinished && <StatsBlock results={results} />}
    </StyledContainer>
  );
};
