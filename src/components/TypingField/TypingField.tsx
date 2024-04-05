import {  useContext, useEffect } from "react";
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
}

export const TypingField = ({ onStart }: TypingFieldProps) => {
  const { results, setResults } = useContext(ResultsContext);
  const {handleInputChange,inputText} = useInput(onStart) 
  
  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut pariatur assumenda ex suscipit corrupti error ullam itaque deserunt. Recusandae earum maiores cumque id, itaque ea quae molestias temporibus error libero.";
  
  const { correctCharacters, incorrectCharacters } =
    getCorrectnIncorrectCharacters(inputText, text);

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
        <div className="words-container">{getStyledWords(inputText,text)}</div>
        <input
          className="input"
          onChange={handleInputChange}
          autoFocus
          disabled={results.isFinished}
        />
      </div>
    </>
  );
};
