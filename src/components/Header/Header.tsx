import { useContext } from "react";
import "./header.style.scss";
import { ThemeContext } from "../../pages/MainPage/MainPage";
import styled from "styled-components";

const StyledHeader1 = styled.h1<{ headerColor: string }>`
  color: ${({ headerColor }) => headerColor};
`;
export const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="header">
      <StyledHeader1 headerColor={theme.headerColor} className="title">
        TYPING TEST
      </StyledHeader1>
    </div>
  );
};
