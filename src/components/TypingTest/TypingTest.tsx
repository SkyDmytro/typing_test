import { createContext, useState } from "react";

import { Stats } from "../Stats/Stats";
import { TypingField } from "../TypingField/TypingField";
import "./typingTest.style.scss";
import { ResultType } from "../../types/results";
 
export type ResultsContextType = {
  results: ResultType;
  setResults: React.Dispatch<React.SetStateAction<ResultType>>;
}; 

export const ResultsContext = createContext({} as ResultsContextType);

export const TypingTest = () => {
  const [countDownStart, setCountDownStart] = useState(false);
  const [results, setResults] = useState({
    correctChars: 0,
    incorrectChars: 0,
    wordsTyped: 0,
    time: 15,
    isFinished: false,
  });

  return (
    <ResultsContext.Provider value={{ results, setResults }}>
      <section className="main-section">
        <TypingField onStart={setCountDownStart} />
        <Stats start={countDownStart} time={results.time} />
      </section>
    </ResultsContext.Provider>
  );
};
