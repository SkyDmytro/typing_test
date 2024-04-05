import { createContext, useState } from "react";

import { ResultType } from "../../types/results";
import { TypingField } from "../TypingField/TypingField";
import { Stats } from "../Stats/Stats";
import { Menu } from "../Menu/Menu";

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
    time: 30,
    isFinished: false,
  });

  return (
    <ResultsContext.Provider value={{ results, setResults }}>
      <section className="main-section">
          <TypingField onStart={setCountDownStart} />
          <Stats start={countDownStart} time={results.time} />
          <Menu/>
      </section>
    </ResultsContext.Provider>
  );
};
