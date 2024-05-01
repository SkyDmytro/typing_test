import { useContext } from "react";
import {
  IdContextForRemount,
  ModeContext,
  ResultsContext,
} from "../components/TypingTest/TypingTest";
import resetIcon from "../assets/reset-svgrepo-com.svg";
import { menuButton } from "../types/menuTypes";
import { modesType } from "../types/contextsTypes";

export const useGetMenuButtons = (
  onReset: (_: boolean) => void
): menuButton[] => {
  const { results, setResults } = useContext(ResultsContext);
  const { time, words } = results;
  const { mode, setMode } = useContext(ModeContext);
  const { setTypingFieldId, setcountDownId } = useContext(IdContextForRemount);

  const handleTimeClick = (time: number) => () => {
    setResults((prevResults) => ({ ...prevResults, time }));
  };

  const handleReset = () => {
    setTypingFieldId(Math.random() * 100);
    setcountDownId(Math.random() * 100);
    onReset(false);
  };

  const handleChangeAmountOfWords = (amountOfWords: number) => () => {
    setResults((prevResults) => ({ ...prevResults, words: amountOfWords }));
  };

  const handleChangeMode = (mode: modesType) => () => {
    setMode(mode);
  };
  return mode === "time"
    ? [
        {
          text: "words",
          icon: "",
          isActive: false,
          onClick: handleChangeMode("words"),
        },
        {
          text: "time",
          icon: "",
          isActive: true,
          onClick: handleChangeMode("time"),
        },
        {
          text: "|",
          icon: "",
          isActive: true,
          onClick: () => {},
        },
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
      ]
    : [
        {
          text: "words",
          icon: "",
          isActive: true,
          onClick: handleChangeMode("words"),
        },
        {
          text: "time",
          icon: "",
          isActive: false,
          onClick: handleChangeMode("time"),
        },
        {
          text: "|",
          icon: "",
          isActive: true,
          onClick: () => {},
        },
        {
          text: "",
          icon: resetIcon,
          isActive: true,
          onClick: handleReset,
        },
        {
          text: "10",
          icon: "",
          isActive: words === 10,
          onClick: handleChangeAmountOfWords(10),
        },
        {
          text: "25",
          icon: "",
          isActive: words === 25,

          onClick: handleChangeAmountOfWords(25),
        },
        {
          text: "50",
          icon: "",
          isActive: words === 50,
          onClick: handleChangeAmountOfWords(50),
        },
        {
          text: "100",
          icon: "",
          isActive: words === 100,
          onClick: handleChangeAmountOfWords(100),
        },
      ];
};
