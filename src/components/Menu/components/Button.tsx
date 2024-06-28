import classNames from "classnames";
import "./button.style.scss";
import { menuButton } from "../../../types/menuTypes";

export const Button = (
  props: menuButton &
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
) => {
  const { icon, text, isActive, ...otherProps } = props;
  return (
    <button className="button" {...otherProps}>
      {text && (
        <div className={classNames("text", isActive && "active")}>{text}</div>
      )}
      {icon && (
        <img className={classNames("icon", isActive && "active")} src={icon} />
      )}
    </button>
  );
};
