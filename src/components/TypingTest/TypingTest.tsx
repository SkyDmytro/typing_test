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
  const [idForRemount, setIdForRemount] = useState(2);
  const [currentMode, setCurrentMode] = useState<modesType>("time");
  const [modesSpecificSettings, setModesSpecificSettings] =
    useState<modesSpecificSettingsType>({
      words: 50,
      time: 30,
      defaultValues: { words: 50, time: 30 },
    });

  const [results, setResults] = useState({
    correctChars: 0,
    incorrectChars: 0,
    wordsTyped: 0,
    isFinished: false,
  });

  const words = useGetRandomWords(currentLanguage, modesSpecificSettings.words);
  const memoizedWords = useMemo(
    () => words,
    [
      idForRemount,
      currentLanguage,
      modesSpecificSettings.words,
      modesSpecificSettings.time,
    ]
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
              idForRemount,
              setIdForRemount,
            }}
          >
            <section className="main-section">
              <LanguageSelect
                currentLanguage={currentLanguage}
                setCurrentLanguage={setCurrentLanguage}
              />
              <div key={idForRemount}>
                <TypingField
                  onStart={setCountDownStart}
                  words={memoizedWords}
                />
                <Stats
                  start={countDownStart}
                  time={modesSpecificSettings.time}
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
