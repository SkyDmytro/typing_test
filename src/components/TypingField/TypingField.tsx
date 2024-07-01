import { useContext, useEffect } from "react";
import "./typingField.style.scss";
import {
  IdContextForRemount,
  ModesContext,
  ModesSpecificSettingsContext,
  ResultsContext,
} from "../TypingTest/TypingTest";
import {
  getAmountOfWords,
  getCorrectnIncorrectCharacters,
} from "../../utils/functions";
import { useInput } from "../../hooks/useInput";
import { useResults } from "../../hooks/useResult";
import InputComponent from "./components/InputComponent";
import { useCountDownForWordsMode } from "../../hooks/useCountDownForWordsMode";

interface TypingFieldProps {
  onStart: (_: boolean) => void;
  words: string;
  hasStarted: boolean;
}

export const TypingField = ({
  onStart,
  words,
  hasStarted,
}: TypingFieldProps) => {
  const { results } = useContext(ResultsContext);
  const { handleInputChange, inputText, resetInputText } = useInput(onStart);
  const { setIdForRemount } = useContext(IdContextForRemount);
  const { correctCharacters, incorrectCharacters } =
    getCorrectnIncorrectCharacters(inputText, words);
  const { modify, finish } = useResults();
  const { mode } = useContext(ModesContext);
  const { modesSpecificSettings, setModesSpecificSettings } = useContext(
    ModesSpecificSettingsContext
  );
  const { timer } = useCountDownForWordsMode({
    start: hasStarted,
    isFinished: results.isFinished,
  });

  console.log(timer);

  useEffect(() => {
    if (results.isFinished) {
      if (mode === "words") {
        setModesSpecificSettings((prevState) => ({
          ...prevState,
          time: timer,
        }));
      }
      modify(
        correctCharacters,
        incorrectCharacters,
        getAmountOfWords(inputText)
      );
    }
  }, [results.isFinished]);

  useEffect(() => {
    if (inputText.length === words.length) {
      if (
        mode === "words" &&
        modesSpecificSettings.words === inputText.split(" ").length
      ) {
        finish();
      } else {
        resetInputText();
        setIdForRemount(new Date().getMilliseconds());
        modify(
          correctCharacters,
          incorrectCharacters,
          getAmountOfWords(inputText)
        );
      }
    }
  }, [inputText]);

  useEffect(() => {
    setModesSpecificSettings((prevState) => {
      return {
        ...prevState,
        words: modesSpecificSettings.defaultValues.words,
        time: modesSpecificSettings.defaultValues.time,
      };
    });
  }, [mode]);

  return (
    <>
      <div className="field">
        {InputComponent({
          words: words,
          inputText: inputText,
          onChange: handleInputChange,
          isDisabled: results.isFinished,
        })}
      </div>
    </>
  );
};
