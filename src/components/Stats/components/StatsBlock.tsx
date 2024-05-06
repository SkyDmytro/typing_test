import { getAccuracy, getWordsPerMinute } from "../../../utils/functions";
import { ResultType } from "../../../types/results";
import "./styles/statsBlock.style.scss";
import { useContext } from "react";
import { ModesSpecificSettingsContext } from "../../TypingTest/TypingTest";

export const StatsBlock = ({ results }: { results: ResultType }) => {
  const { modesSpecificSettings } = useContext(ModesSpecificSettingsContext);
  return (
    <div className="stats-block">
      <div className="words-per-minute">
        WPM:
        {" " +
          getWordsPerMinute(results.wordsTyped, modesSpecificSettings.time)}
      </div>
      <div className="characters-statistic">
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
