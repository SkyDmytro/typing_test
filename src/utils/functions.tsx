import { ReactNode } from "react";
import { Character } from "../components/TypingField/components/Character";

const getAmountOfWords = (text: string): number => {
  return text.trim().split(" ").length;
};

const getWordsPerMinute = (words: number, time: number): number => {
  console.log(time);
  return (words / time) * 60;
};

const getAccuracy = (
  amountOfCorrectChars: number,
  amountOfIncorrectCharacters: number
) => {
  return Math.floor(
    (amountOfCorrectChars /
      (amountOfCorrectChars + amountOfIncorrectCharacters)) *
      100
  );
};

const getCorrectnIncorrectCharacters = (
  inputText: string,
  correctText: string
) => {
  const correctCharacters = inputText
    .split("")
    .filter((char, idx) => char === correctText.charAt(idx)).length;
  const incorrectCharacters = inputText.length - correctCharacters;

  return { correctCharacters, incorrectCharacters };
};

const getStyledWords = (inputText: string, text: string): ReactNode => {
  const inputArray = inputText.split("");
  const otherText = text.slice(inputText.length, text.length);
  return (
    <>
      {inputArray.map((character, idx) => (
        <Character
          key={idx}
          character={character}
          isCorrect={character === text.charAt(idx)}
        />
      ))}
      <span className="caret-right"></span>
      {otherText}
    </>
  );
};

export {
  getAmountOfWords,
  getWordsPerMinute,
  getAccuracy,
  getCorrectnIncorrectCharacters,
  getStyledWords,
};
