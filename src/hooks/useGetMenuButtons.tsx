import { useContext } from "react";
import { ResultsContext } from "../components/TypingTest/TypingTest";
import resetIcon from "../assets/reset-svgrepo-com.svg";
import { menuButton } from "../types/menuTypes";

export const useGetMenuButtons = (): menuButton[] => {
  const { results, setResults } = useContext(ResultsContext);
  const { time } = results;

  const handleTimeClick = (time: number) => () => {
    setResults((prevResults) => ({ ...prevResults, time }));
  };

  const handleReset = () => {
    setResults((prevResults) => ({
      ...prevResults,
      correctChars: 0,
      incorrectChars: 0,
      isFinished: false,
      wordsTyped: 0,
    }));
  };

  return [
    {
      text: "",
      icon: resetIcon,
      isActive: true,
      onClick: handleReset,
    },
    {
      text: "15s",
      icon: "",
      isActive: time === 15,
      onClick: handleTimeClick(15),
    },
    {
      text: "30s",
      icon: "",
      isActive: time === 30,
      onClick: handleTimeClick(30),
    },
    {
      text: "45s",
      icon: "",
      isActive: time === 45,
      onClick: handleTimeClick(45),
    },
    {
      text: "60s",
      icon: "",
      isActive: time === 60,
      onClick: handleTimeClick(60),
    },
    
  ];
};
