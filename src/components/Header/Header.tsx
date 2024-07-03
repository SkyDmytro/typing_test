import { useContext } from "react";
import "./header.style.scss";
import { ThemeContext } from "../../pages/MainPage/MainPage";
import styled from "styled-components";

export const Header = () => {
  const { theme } = useContext(ThemeContext);
  const StyledHeader1 = styled.h1`
    color: ${theme.headerColor};
  `;

  return (
    <div className="header">
      <StyledHeader1 className="title">TYPING TEST</StyledHeader1>
      {/* <h3 className="main-text">Typing game</h3> */}
    </div>
  );
};
