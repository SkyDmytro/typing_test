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
  setResetKey: React.Dispatch<React.SetStateAction<Date>>;
}

export const TypingField = ({
  onStart,
  words,
  setResetKey,
}: TypingFieldProps) => {
  const { results, setResults } = useContext(ResultsContext);
  const { handleInputChange, inputText, resetInputText } = useInput(onStart);

  const { correctCharacters, incorrectCharacters } =
    getCorrectnIncorrectCharacters(inputText, words);

  console.log(correctCharacters, incorrectCharacters);

  useEffect(() => {
    if (results.isFinished) {
      setResults((prevResults) => ({
        ...prevResults,
        correctChars: prevResults.correctChars + correctCharacters,
        incorrectChars: prevResults.incorrectChars + incorrectCharacters,
        wordsTyped: prevResults.wordsTyped + getAmountOfWords(inputText),
      }));
    }
  }, [results.isFinished]);

  useEffect(() => {
    if (inputText === words) {
      setResetKey(new Date());
      resetInputText();
      setResults((prevResults) => ({
        ...prevResults,
        correctChars: prevResults.correctChars + correctCharacters,
        incorrectChars: prevResults.incorrectChars + incorrectCharacters,
        wordsTyped: prevResults.wordsTyped + getAmountOfWords(inputText),
      }));
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
