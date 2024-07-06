import { useContext } from "react";

import BlackReset from "../assets/reset-svg-black.svg";
import LimeGreen from "../assets/reset-svg-limegreen.svg";
import OrangeReset from "../assets/reset-svg-orange.svg";
import TealReset from "../assets/reset-svg-teal.svg";
import SkyBlueReset from "../assets/reset-svg-skyblue.svg";
import { ThemeContext } from "../pages/MainPage/MainPage";

export const useGetRightSvgForCurrentTheme = () => {
  const { theme } = useContext(ThemeContext);
  switch (theme.activeColor) {
    case "orange":
      return OrangeReset;
    case "teal":
      return TealReset;
    case "limegreen":
      return LimeGreen;
    case "black":
      return BlackReset;
    case "skyblue":
      return SkyBlueReset;
    default:
      return BlackReset;
  }
};
