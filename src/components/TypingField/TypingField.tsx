import { ReactNode, useContext, useEffect, useState } from "react";
import "./typingField.style.scss";
import { ResultsContext } from "../TypingTest/TypingTest";
import { getAmountOfWords } from "../../utils/functions";

interface TypingFieldProps {
  onStart: (_: boolean) => void;
}

export const TypingField = ({ onStart }: TypingFieldProps) => {
  const [inputText, setInputText] = useState("");
  const { results, setResults } = useContext(ResultsContext);

  let correctCharacters = 0,
    incorrectCharacters = 0;
  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut pariatur assumenda ex suscipit corrupti error ullam itaque deserunt. Recusandae earum maiores cumque id, itaque ea quae molestias temporibus error libero.";

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length === 1) {
      onStart(true);
    }
    setInputText(event.target.value);
  };

  useEffect(() => {
    const wordsCount = getAmountOfWords(inputText);
    if (results.isFinished) {
      setResults((prevResults) => ({
        ...prevResults,
        correctChars: correctCharacters,
        incorrectChars: incorrectCharacters,
        wordsTyped: wordsCount,
      }));
    }
  }, [results.isFinished]);

  const getStyledWords = (): ReactNode => {
    const inputArray = inputText.split("");
    const otherText = text.slice(inputText.length, text.length);
    return (
      <>
        {inputArray.map((character, idx) => {
          if (character === text.charAt(idx)) {
            correctCharacters++;
            return <span className="correct">{text.charAt(idx)}</span>;
          } else {
            incorrectCharacters++;
            return <span className="incorrect">{text.charAt(idx)}</span>;
          }
        })}
        <span className="caret-right"></span>
        {otherText}
      </>
    );
  };

  return (
    <>
      <div className="field">
        <div className="words-container">{getStyledWords()}</div>
        <input className="input" onChange={handleInputChange} autoFocus />
      </div>
    </>
  );
};
