import { useContext } from "react";
import {
  IdContextForRemount,
  ResultsContext,
} from "../components/TypingTest/TypingTest";
import resetIcon from "../assets/reset-svgrepo-com.svg";
import { menuButton } from "../types/menuTypes";

export const useGetMenuButtons = (
  onReset: (_: boolean) => void,
): menuButton[] => {
  const { results, setResults } = useContext(ResultsContext);
  const { time } = results;
  const { setTypingFieldId, setcountDownId } = useContext(IdContextForRemount);

  const handleTimeClick = (time: number) => () => {
    setResults((prevResults) => ({ ...prevResults, time }));
  };

  const handleReset = () => {
    setTypingFieldId(Math.random() * 100);
    setcountDownId(Math.random() * 100);
    onReset(false);
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
