import { useContext, useEffect } from "react";
import "./typingField.style.scss";
import { IdContextForRemount, ResultsContext } from "../TypingTest/TypingTest";
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
  const { modify } = useResults();
  console.log(correctCharacters, incorrectCharacters);

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
    if (inputText === words) {
      resetInputText();
      setIdForRemount(new Date().getMilliseconds());
      modify(
        correctCharacters,
        incorrectCharacters,
        getAmountOfWords(inputText)
      );
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
