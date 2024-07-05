import React, { useContext, useState } from "react";
import { themesArray } from "../../utils/constants";
import { ThemeContext } from "../../pages/MainPage/MainPage";
import styled from "styled-components";
import classNames from "classnames";
import { themeType } from "../../types/contextTypes";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isOpened, setIsOpened] = useState(false);
  const StyledThemeSwitcher = styled.div`
    color: ${theme.baseColor};
    position: relative;
    z-index: 9999;
    .drop-down-list {
      height: 60vh;
      background-color: ${theme.backgroundColor};
      border: 1px solid ${theme.secondaryColor};
      display: none;
      width: 40vw;
      position: absolute;
      top: -60vh;
      left: 30vw;
      text-align: center;
      .theme {
        display: flex;
        height: 50px;
        gap: 5px;
        align-items: center;
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
  const handleClick = () => {
    setIsOpened((prevState) => !prevState);
  };
  const handleChangeTheme = (theme: themeType) => () => {
    setTheme(theme);
  };
  return (
    <StyledThemeSwitcher className="themes-container">
      <div className="drop-down" onClick={handleClick}>
        Themes
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
