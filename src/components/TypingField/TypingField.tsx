import { ReactNode, useContext, useEffect, useState } from "react";
import "./typingField.style.scss";
import { ResultsContext } from "../TypingTest/TypingTest";
import { getAmountOfWords } from "../../utils/functions";
import { Character } from "./components/Character";

interface TypingFieldProps {
  onStart: (_: boolean) => void;
}

export const TypingField = ({ onStart }: TypingFieldProps) => {
  const [inputText, setInputText] = useState("");
  const { results, setResults } = useContext(ResultsContext);

  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut pariatur assumenda ex suscipit corrupti error ullam itaque deserunt. Recusandae earum maiores cumque id, itaque ea quae molestias temporibus error libero.";
  const correctCharacters = inputText.split("").filter((char, idx) => char === text.charAt(idx)).length;
  const incorrectCharacters = inputText.length - correctCharacters;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length === 1) {
      onStart(true);
    }
    setInputText(event.target.value);
  };

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

  const getStyledWords = (): ReactNode => {
    const inputArray = inputText.split("");
    const otherText = text.slice(inputText.length, text.length);
    return (
      <>
        {inputArray.map((character, idx) => (
          <Character key={idx} character={character} isCorrect={character === text.charAt(idx)} />
        ))}
        <span className="caret-right"></span>
        {otherText}
      </>
    );
  };

  return (
    <>
      <div className="field">
        <div className="words-container">{getStyledWords()}</div>
        <input className="input" onChange={handleInputChange} autoFocus disabled={results.isFinished} />
      </div>
    </>
  );
};
