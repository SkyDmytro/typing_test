import { useContext } from "react";
import {
  IdContextForRemount,
  ModesContext,
  ModesSpecificSettingsContext,
} from "../components/TypingTest/TypingTest";
import resetIcon from "../assets/reset-svgrepo-com.svg";
import { menuButton } from "../types/menuTypes";
import { modesType } from "../types/contextTypes";
import { useResults } from "./useResult";

export const useGetMenuButtons = (
  onReset: (_: boolean) => void
): menuButton[] => {
  const { modesSpecificSettings, setModesSpecificSettings } = useContext(
    ModesSpecificSettingsContext
  );
  const { mode, setMode } = useContext(ModesContext);
  const { words, time } = modesSpecificSettings;
  const { setIdForRemount } = useContext(IdContextForRemount);
  const handleTimeClick = (time: number) => () => {
    setModesSpecificSettings((prevState) => ({ ...prevState, time }));
  };
  const { reset } = useResults();
  const handleReset = () => {
    setIdForRemount(new Date().getMilliseconds());
    reset();
    onReset(false);
  };

  const handleWordClick = (amountOfWords: number) => () => {
    setModesSpecificSettings((prevState) => ({
      ...prevState,
      words: amountOfWords,
    }));
  };

  const handleChangeMode = (newMode: modesType) => () => {
    setMode(newMode);
  };
  return mode === "words"
    ? [
        {
          text: "words",
          tooltipText: "Words mode ",
          icon: "",
          isActive: true,
          onClick: handleChangeMode("words"),
        },
        {
          text: "|",
          icon: "",
          isActive: true,
          onClick: () => {},
        },
        {
          text: "time",
          tooltipText: "Time mode",
          icon: "",
          isActive: false,
          onClick: handleChangeMode("time"),
        },
        {
          text: "",
          tooltipText: "Restart the game",
          icon: resetIcon,
          isActive: true,
          onClick: handleReset,
        },
        {
          text: "10",
          tooltipText: "10 words",
          icon: "",
          isActive: words === 10,
          onClick: handleWordClick(10),
        },
        {
          text: "30",
          tooltipText: "30 words ",
          icon: "",
          isActive: words === 30,
          onClick: handleWordClick(30),
        },
        {
          text: "50",
          tooltipText: "50 words",
          icon: "",
          isActive: words === 50,
          onClick: handleWordClick(50),
        },
        {
          text: "100",
          tooltipText: "100 words",
          icon: "",
          isActive: words === 100,
          onClick: handleWordClick(100),
        },
      ]
    : [
        {
          text: "words",
          tooltipText: "Words mode",
          icon: "",
          isActive: false,
          onClick: handleChangeMode("words"),
        },
        {
          text: "|",
          icon: "",
          isActive: true,
          onClick: () => {},
        },
        {
          text: "time",
          tooltipText: "Time mode",
          icon: "",
          isActive: true,
          onClick: handleChangeMode("time"),
        },
        {
          text: "",
          tooltipText: "Restart the game",
          icon: resetIcon,
          isActive: true,
          onClick: handleReset,
        },
        {
          text: "15s",
          tooltipText: "15 seconds",
          icon: "",
          isActive: time === 15,
          onClick: handleTimeClick(15),
        },
        {
          text: "30s",
          tooltipText: "30 seconds ",
          icon: "",
          isActive: time === 30,
          onClick: handleTimeClick(30),
        },
        {
          text: "45s",
          tooltipText: "45 seconds",
          icon: "",
          isActive: time === 45,
          onClick: handleTimeClick(45),
        },
        {
          text: "60s",
          tooltipText: "60 seconds",
          icon: "",
          isActive: time === 60,
          onClick: handleTimeClick(60),
        },
      ];
};
