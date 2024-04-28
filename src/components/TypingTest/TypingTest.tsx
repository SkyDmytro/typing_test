import { createContext, useState } from "react";

import { ResultType } from "../../types/results";
import { TypingField } from "../TypingField/TypingField";
import { Menu } from "../Menu/Menu";
import { useGetRandomWords } from "../../hooks/useGetRandomWords";
import { LanguageSelect } from "../LanguageSelect/LanguageSelect";
import { Stats } from "../Stats/Stats";

export type ResultsContextType = {
  results: ResultType;
  setResults: React.Dispatch<React.SetStateAction<ResultType>>;
};
export type IdContextForRemountType = {
  typingFieldId: number;
  countDownId: number;
  setTypingFieldId: React.Dispatch<React.SetStateAction<number>>;
  setcountDownId: React.Dispatch<React.SetStateAction<number>>;
};
export type currentLanguage = "EN" | "UA";

export const ResultsContext = createContext({} as ResultsContextType);
export const IdContextForRemount = createContext({} as IdContextForRemountType);

export const TypingTest = () => {
  const [currentLanguage, setCurrentLanguage] = useState<currentLanguage>("EN");
  const [countDownStart, setCountDownStart] = useState(false);
  const [typingFieldId, setTypingFieldId] = useState(1);
  const [countDownId, setcountDownId] = useState(2);
  const [results, setResults] = useState({
    correctChars: 0,
    incorrectChars: 0,
    wordsTyped: 0,
    time: 30,
    isFinished: false,
  });
  const words = useGetRandomWords(currentLanguage);

  return (
    <ResultsContext.Provider value={{ results, setResults }}>
      <IdContextForRemount.Provider
        value={{ typingFieldId, countDownId, setcountDownId, setTypingFieldId }}
      >
        <section className="main-section">
          <LanguageSelect
            currentLanguage={currentLanguage}
            setCurrentLanguage={setCurrentLanguage}
          />
          <TypingField onStart={setCountDownStart} key={typingFieldId} words={words} />
          <Stats start={countDownStart} time={results.time} key={countDownId} />
          <Menu onReset={setCountDownStart} />
        </section>
      </IdContextForRemount.Provider>
    </ResultsContext.Provider>
  );
};
