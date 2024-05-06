import { createContext, useMemo, useState } from "react";
import "./typingTest.style.scss";
import { TypingField } from "../TypingField/TypingField";
import { Menu } from "../Menu/Menu";
import { useGetRandomWords } from "../../hooks/useGetRandomWords";
import { LanguageSelect } from "../LanguageSelect/LanguageSelect";
import { Stats } from "../Stats/Stats";
import {
  IdContextForRemountType,
  ResultsContextType,
  modesContextType,
  modesSpecificSettingsContextType,
  modesSpecificSettingsType,
  modesType,
} from "../../types/contextTypes";

export type currentLanguage = "EN" | "UA";

export const ResultsContext = createContext({} as ResultsContextType);
export const IdContextForRemount = createContext({} as IdContextForRemountType);
export const ModesContext = createContext({} as modesContextType);
export const ModesSpecificSettingsContext = createContext(
  {} as modesSpecificSettingsContextType
);
export const TypingTest = () => {
  const [currentLanguage, setCurrentLanguage] = useState<currentLanguage>("EN");
  const [countDownStart, setCountDownStart] = useState(false);
  const [typingFieldId, setTypingFieldId] = useState(1);
  const [countDownId, setcountDownId] = useState(2);
  const [currentMode, setCurrentMode] = useState<modesType>("time");
  const [modesSpecificSettings, setModesSpecificSettings] =
    useState<modesSpecificSettingsType>({ words: 50, time: 30 });

  const [results, setResults] = useState({
    correctChars: 0,
    incorrectChars: 0,
    wordsTyped: 0,
    isFinished: false,
  });
  const [resetKey, setResetKey] = useState(new Date().getDate());

  const words = useGetRandomWords(currentLanguage, modesSpecificSettings.words);
  const memoizedWords = useMemo(
    () => words,
    [resetKey, currentLanguage, modesSpecificSettings.words]
  );

  return (
    <ResultsContext.Provider value={{ results, setResults }}>
      <ModesSpecificSettingsContext.Provider
        value={{ modesSpecificSettings, setModesSpecificSettings }}
      >
        <ModesContext.Provider
          value={{ mode: currentMode, setMode: setCurrentMode }}
        >
          <IdContextForRemount.Provider
            value={{
              typingFieldId,
              countDownId,
              setcountDownId,
              setTypingFieldId,
            }}
          >
            <section className="main-section">
              <LanguageSelect
                currentLanguage={currentLanguage}
                setCurrentLanguage={setCurrentLanguage}
              />
              <div key={resetKey}>
                <TypingField
                  onStart={setCountDownStart}
                  key={typingFieldId}
                  words={memoizedWords}
                  setResetKey={setResetKey}
                />
                <Stats
                  start={countDownStart}
                  time={modesSpecificSettings.time}
                  key={countDownId}
                />
              </div>
              <Menu onReset={setCountDownStart} />
            </section>
          </IdContextForRemount.Provider>
        </ModesContext.Provider>
      </ModesSpecificSettingsContext.Provider>
    </ResultsContext.Provider>
  );
};
