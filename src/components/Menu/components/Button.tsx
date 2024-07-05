import classNames from "classnames";
// import "./button.style.scss";
import { menuButton } from "../../../types/menuTypes";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../../../pages/MainPage/MainPage";

export const Button = (
  props: menuButton &
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
) => {
  const { icon, text, isActive, ...otherProps } = props;
  const { theme } = useContext(ThemeContext);
  const StyledButton = styled.button`
    height: 20px;
    display: flex;
    align-items: center;
    border: 0;
    padding: 0;
    color: ${theme.secondaryColor};
    background-color: transparent;
    &:focus {
      border: 0;
      transition: none;
      outline: none;
    }
    &:hover {
      .text {
        transform: scale(1.2);
        color: ${theme.activeColor};
      }
    }
    .text {
      &.active {
        color: ${theme.activeColor};
      }
    }

    .icon {
      width: 100%;
      height: 100%;
      stroke: ${theme.activeColor} !important;
    }
  `;

  return (
    <StyledButton className="button" {...otherProps}>
      {text && (
        <div className={classNames("text", isActive && "active")}>{text}</div>
      )}
      {icon && (
        <img className={classNames("icon", isActive && "active")} src={icon} />
      )}
    </StyledButton>
  );
};
