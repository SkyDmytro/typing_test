import { useContext } from "react";
import "./styles/tooltip.style.scss";
import { ThemeContext } from "../../../pages/MainPage/MainPage";

export const Tooltip = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={className}
      style={{
        color: theme.secondaryColor,
        visibility: "hidden",
        position: "absolute",
        top: "0px",
        left: "50%",
        padding: "5px",
      }}
    >
      {text}
    </div>
  );
};
