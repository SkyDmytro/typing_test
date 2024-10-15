import { Dispatch, SetStateAction, useContext } from "react";
import { currentLanguage } from "../TypingTest/TypingTest";
import classNames from "classnames";
import "./languageSelect.style.scss";
import styled from "styled-components";
import { ThemeContext } from "../../pages/MainPage/MainPage";

type LanguageSelectProps = {
  currentLanguage: currentLanguage;
  setCurrentLanguage: Dispatch<SetStateAction<currentLanguage>>;
};

export const LanguageSelect = ({
  currentLanguage,
  setCurrentLanguage,
}: LanguageSelectProps) => {
  const { theme } = useContext(ThemeContext);
  const handleClick = (selectedLanguage: currentLanguage) => () => {
    setCurrentLanguage(selectedLanguage);
  };
  const StyledDiv = styled.div`
    color: ${theme.baseColor};
    &.styled {
      color: ${theme.activeColor};
    }
  `;
  return (
    <StyledDiv className="language-select-main">
      <StyledDiv
        className={classNames("text", currentLanguage === "EN" ? "styled" : "")}
        onClick={handleClick("EN")}
      >
        EN
      </StyledDiv>
      |
      <StyledDiv
        onClick={handleClick("UA")}
        className={classNames("text", currentLanguage === "UA" ? "styled" : "")}
      >
        UA
      </StyledDiv>
    </StyledDiv>
  );
};
