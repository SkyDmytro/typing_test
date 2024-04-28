import { useContext, useEffect } from "react";
import "./typingField.style.scss";
import { ResultsContext } from "../TypingTest/TypingTest";
import {
  getAmountOfWords,
  getCorrectnIncorrectCharacters,
  getStyledWords,
} from "../../utils/functions";
import { useInput } from "../../hooks/useInput";

interface TypingFieldProps {
  onStart: (_: boolean) => void;
  words: string;
}

export const TypingField = ({ onStart, words }: TypingFieldProps) => {
  const { results, setResults } = useContext(ResultsContext);
  const { handleInputChange, inputText } = useInput(onStart);

  const { correctCharacters, incorrectCharacters } =
    getCorrectnIncorrectCharacters(inputText, words);

  useEffect(() => {
    if (results.isFinished) {
      setResults((prevResults) => ({
        ...prevResults,
        correctChars: correctCharacters,
        incorrectChars: incorrectCharacters,
        wordsTyped: getAmountOfWords(inputText),
      }));
    }
  }, [results.isFinished]);

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
