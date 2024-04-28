import React, { Dispatch, SetStateAction } from "react";
import { currentLanguage } from "../TypingTest/TypingTest";
import classNames from "classnames";
import "./languageSelect.style.scss";

type LanguageSelectProps = {
  currentLanguage: currentLanguage;
  setCurrentLanguage: Dispatch<SetStateAction<currentLanguage>>;
};

export const LanguageSelect = ({
  currentLanguage,
  setCurrentLanguage,
}: LanguageSelectProps) => {
  const handleClick = (selectedLanguage: currentLanguage) => () => {
    setCurrentLanguage(selectedLanguage);
  };

  return (
    <div className="language-select-main">
      <div
        className={classNames("text", currentLanguage === "EN" ? "styled" : "")}
        onClick={handleClick("EN")}
      >
        EN
      </div>
      |
      <div
        onClick={handleClick("UA")}
        className={classNames("text", currentLanguage === "UA" ? "styled" : "")}
      >
        UA
      </div>
    </div>
  );
};
