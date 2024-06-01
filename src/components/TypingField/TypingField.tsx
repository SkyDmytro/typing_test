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
  getStyledWords,
} from "../../utils/functions";
import { useInput } from "../../hooks/useInput";
import { useResults } from "../../hooks/useResult";

interface TypingFieldProps {
  onStart: (_: boolean) => void;
  words: string;
}

export const TypingField = ({ onStart, words }: TypingFieldProps) => {
  const { results } = useContext(ResultsContext);
  const { handleInputChange, inputText, resetInputText } = useInput(onStart);
  const { setIdForRemount } = useContext(IdContextForRemount);
  const { correctCharacters, incorrectCharacters } =
    getCorrectnIncorrectCharacters(inputText, words);
  const { modify, finish } = useResults();
  const { mode } = useContext(ModesContext);
  const { modesSpecificSettings } = useContext(ModesSpecificSettingsContext);

  useEffect(() => {
    if (results.isFinished) {
      modify(
        correctCharacters,
        incorrectCharacters,
        getAmountOfWords(inputText)
      );
    }
  }, [results.isFinished]);

  useEffect(() => {
    console.log(inputText.length, words.length);
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

  return (
    <>
      <div className="field">
        <div className="words-container">
          {getStyledWords(inputText, words)}
        </div>
        <input
          value={inputText}
          className="input"
          onChange={handleInputChange}
          autoFocus
          disabled={results.isFinished}
        />
      </div>
    </>
  );
};
