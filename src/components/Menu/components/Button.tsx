import classNames from "classnames";
import "./button.style.scss";
import { menuButton } from "../../../types/menuTypes";



export const Button = ({ icon, text,isActive,onClick }: menuButton) => {
  return (
    <button className="button" onClick={onClick}>
      {text && <div className={classNames("text",isActive&&"active")}>{text}</div>}
      {icon && <img className={classNames("icon",isActive&&"active")} src={icon} />}
    </button>
  );
};
