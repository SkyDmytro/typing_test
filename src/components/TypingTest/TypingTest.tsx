import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
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
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";

export type currentLanguage = "EN" | "UA";

export const ResultsContext = createContext({} as ResultsContextType);
export const IdContextForRemount = createContext({} as IdContextForRemountType);
export const ModesContext = createContext({} as modesContextType);
export const ModesSpecificSettingsContext = createContext(
  {} as modesSpecificSettingsContextType
);

export const TypingTest = () => {
  console.log("Typing test render");
  const [currentLanguage, setCurrentLanguage] = useState<currentLanguage>("EN");
  console.log("currentLanguage changed", currentLanguage);

  const [countDownStart, setCountDownStart] = useState(false);
  console.log("countDownStart changed", countDownStart);

  const onStart = useCallback((value: boolean) => setCountDownStart(value), []);

  const [idForRemount, setIdForRemount] = useState(2);
  console.log("idForRemount changed", idForRemount);

  const [currentMode, setCurrentMode] = useState<modesType>("time");
  console.log("currentMode changed", currentMode);

  const [modesSpecificSettings, setModesSpecificSettings] =
    useState<modesSpecificSettingsType>({
      words: 50,
      time: 30,
      defaultValues: { words: 50, time: 30 },
    });
  console.log("modesSpecificSettings changed", modesSpecificSettings);

  const [results, setResults] = useState({
    correctChars: 0,
    incorrectChars: 0,
    wordsTyped: 0,
    isFinished: false,
  });
  console.log("results changed", results);

  const words = useGetRandomWords(currentLanguage, modesSpecificSettings.words);

  const memoizedWords = useMemo(() => {
    return words;
  }, [idForRemount, currentLanguage, modesSpecificSettings.words]);
  console.log("memowords changed", memoizedWords);
  useEffect(() => {
    console.log("useEffect", countDownStart);
  }, [countDownStart]);

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
              <ThemeSwitcher />
              <div key={idForRemount}>
                <TypingField
                  hasStarted={countDownStart}
                  onStart={onStart}
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
