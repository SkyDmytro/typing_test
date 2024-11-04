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

const StyledDiv = styled.div<{ isStyled: boolean }>`
  color: ${({ isStyled, theme }) =>
    isStyled ? theme.activeColor : theme.baseColor};
`;

export const LanguageSelect = ({
  currentLanguage,
  setCurrentLanguage,
}: LanguageSelectProps) => {
  const { theme } = useContext(ThemeContext);

  const handleClick = (selectedLanguage: currentLanguage) => () => {
    setCurrentLanguage(selectedLanguage);
  };

  return (
    <StyledDiv className="language-select-main" theme={theme} isStyled={false}>
      <StyledDiv
        className={classNames("text", currentLanguage === "EN" ? "styled" : "")}
        onClick={handleClick("EN")}
        theme={theme}
        isStyled={currentLanguage === "EN"}
      >
        EN
      </StyledDiv>
      |
      <StyledDiv
        onClick={handleClick("UA")}
        className={classNames("text", currentLanguage === "UA" ? "styled" : "")}
        theme={theme}
        isStyled={currentLanguage === "UA"}
      >
        UA
      </StyledDiv>
    </StyledDiv>
  );
};
