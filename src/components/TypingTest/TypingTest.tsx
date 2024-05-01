import { createContext, useMemo, useState } from "react";

import { TypingField } from "../TypingField/TypingField";
import { Menu } from "../Menu/Menu";
import { useGetRandomWords } from "../../hooks/useGetRandomWords";
import { LanguageSelect } from "../LanguageSelect/LanguageSelect";
import { Stats } from "../Stats/Stats";
import {
  IdContextForRemountType,
  ResultsContextType,
  modesContextType,
  modesType,
} from "../../types/contextsTypes";
import "./typingTest.style.scss";
export type currentLanguage = "EN" | "UA";

export const ModeContext = createContext({} as modesContextType);
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
    words: 50,
  });
  const [mode, setMode] = useState<modesType>("time");
  const [resetKey, setResetKey] = useState(new Date());

  const words = useGetRandomWords(currentLanguage, results.words);
  const memoizedWords = useMemo(
    () => words,
    [resetKey, currentLanguage, results.words]
  );
  return (
    <ResultsContext.Provider value={{ results, setResults }}>
      <IdContextForRemount.Provider
        value={{ typingFieldId, countDownId, setcountDownId, setTypingFieldId }}
      >
        <ModeContext.Provider value={{ mode, setMode }}>
          <section className="main-section">
            <LanguageSelect
              currentLanguage={currentLanguage}
              setCurrentLanguage={setCurrentLanguage}
            />
            <TypingField
              onStart={setCountDownStart}
              key={typingFieldId}
              words={memoizedWords}
              setResetKey={setResetKey}
            />
            <Stats
              start={countDownStart}
              time={results.time}
              key={countDownId}
            />
            <Menu onReset={setCountDownStart} />
          </section>
        </ModeContext.Provider>
      </IdContextForRemount.Provider>
    </ResultsContext.Provider>
  );
};
