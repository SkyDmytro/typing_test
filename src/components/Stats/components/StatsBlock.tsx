import { getAccuracy, getWordsPerMinute } from "../../../utils/functions";
import { ResultType } from "../../../types/results";
import "./styles/statsBlock.style.scss";
import { useContext } from "react";
import { ModesSpecificSettingsContext } from "../../TypingTest/TypingTest";
import { ThemeContext } from "../../../pages/MainPage/MainPage";

export const StatsBlock = ({ results }: { results: ResultType }) => {
  const { modesSpecificSettings } = useContext(ModesSpecificSettingsContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className="stats-block" style={{ color: theme.activeColor }}>
      <div className="words-per-minute">
        WPM:
        {" " +
          getWordsPerMinute(results.wordsTyped, modesSpecificSettings.time)}
      </div>
      <div className="characters-statistic">
        Time:{" " + modesSpecificSettings.time}s
        <br />
        Correct characters:{" " + results.correctChars}
        <br />
        Incorrect characters:{" " + results.incorrectChars}
      </div>
      <div className="accuracy">
        Accuracy:
        {" " + getAccuracy(results.correctChars, results.incorrectChars)}%
      </div>
    </div>
  );
};
