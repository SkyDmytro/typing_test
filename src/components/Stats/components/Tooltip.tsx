import { useContext } from "react";
import "./styles/tooltip.style.scss";
import styled from "styled-components";
import { ThemeContext } from "../../../pages/MainPage/MainPage";

export const Tooltip = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  const { theme } = useContext(ThemeContext);
  const StyledDiv = styled.div`
    visibility: hidden;
    // display: none;
    position: absolute;
    top: 0px;
    text-wrap: nowrap;
    color: ${theme.secondaryColor};
    margin-top: 25px;
    left: 50%;
    left: 0px;
    padding: 5px;
  `;
  return <StyledDiv className={className}>{text}</StyledDiv>;
};
