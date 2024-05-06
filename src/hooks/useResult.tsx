import { useContext } from "react";
import { ResultsContext } from "../components/TypingTest/TypingTest";

export const useResults = () => {
  const { setResults } = useContext(ResultsContext);

  const handleReset = () => {
    setResults(() => ({
      correctChars: 0,
      incorrectChars: 0,
      isFinished: false,
      wordsTyped: 0,
    }));
  };

  const handleModifyResults = (
    correctCharacters = 0,
    incorrectCharacters = 0,
    wordsTyped = 0
  ) => {
    setResults((prevResults) => ({
      ...prevResults,
      correctChars: prevResults.correctChars + correctCharacters,
      incorrectChars: prevResults.incorrectChars + incorrectCharacters,
      wordsTyped: prevResults.wordsTyped + wordsTyped,
    }));
  };

  const handleStart = () => {
    setResults((prevResults) => ({
      ...prevResults,
      isFinished: false,
    }));
  };

  const handleFinish = () => {
    setResults((prevResults) => ({
      ...prevResults,
      isFinished: true,
    }));
  };
  return {
    reset: handleReset,
    modify: handleModifyResults,
    start: handleStart,
    finish: handleFinish,
  };
};
