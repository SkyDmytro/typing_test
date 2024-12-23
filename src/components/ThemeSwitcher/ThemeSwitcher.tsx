import { useContext, useState } from "react";
import { themesArray } from "../../utils/constants";
import { ThemeContext } from "../../pages/MainPage/MainPage";
import styled from "styled-components";
import classNames from "classnames";
import { themeType } from "../../types/contextTypes";

const StyledThemeSwitcher = styled.div<{ theme: themeType }>`
  display: flex;
  justify-content: center;
  font-size: 24px;
  color: ${({ theme }) => theme.baseColor};
  position: relative;
  z-index: 9999;
  .drop-down-list {
    font-size: 16px;
    height: fit-content;
    background-color: ${({ theme }) => theme.backgroundColor};
    border: 1px solid ${({ theme }) => theme.secondaryColor};
    display: none;
    width: 20vw;
    position: absolute;
    top: 40px;
    left: calc(40vw);
    text-align: center;
    .theme {
      width: calc(100% - 20px);
      padding: 10px;
      display: flex;
      height: 25px;
      gap: 5px;
      align-items: center;
      justify-content: center;
      &:hover {
        background-color: ${({ theme }) => theme.activeColor};
        color: ${({ theme }) => theme.baseColor};
      }
      .circle {
        height: 13px;
        width: 13px;
        border-radius: 50%;
      }
    }
    &.opened {
      display: flex;
      flex-direction: column;
      text-wrap: nowrap;
      justify-content: space-around;
      align-items: center;
    }
  }
`;

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened((prevState) => !prevState);
  };

  const handleChangeTheme = (theme: themeType) => () => {
    setTheme(theme);
    setIsOpened(false);
  };

  return (
    <StyledThemeSwitcher className="themes-container" theme={theme}>
      <div className="drop-down" onClick={handleClick}>
        Themes {isOpened ? "▲" : "▼"}
      </div>
      <div className={classNames("drop-down-list", isOpened && "opened")}>
        {themesArray.map(({ name, theme }) => {
          return (
            <div
              className="theme"
              style={{ color: theme.baseColor }}
              onClick={handleChangeTheme(theme)}
            >
              {name}
              <div
                className="circle 1"
                style={{ backgroundColor: theme.baseColor }}
              ></div>
              <div
                className="circle 2"
                style={{ backgroundColor: theme.activeColor }}
              ></div>
              <div
                className="circle 3"
                style={{ backgroundColor: theme.secondaryColor }}
              ></div>
            </div>
          );
        })}
      </div>
    </StyledThemeSwitcher>
  );
};
