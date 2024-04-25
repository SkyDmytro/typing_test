import "./menuBlock.style.scss";
import { menuButton } from "../../../../types/menuTypes";
import { Button } from "../Button";

interface menuBlockProps {
  menuButtons: menuButton[];
}

export const MenuBlock = ({ menuButtons }: menuBlockProps) => {
  return (
    <div className="menu-main">
      <div className="buttons">
        {menuButtons.map((button, index) => {
          return (
            <Button
              key={index}
              icon={button?.icon}
              text={button?.text}
              isActive={button.isActive}
              onClick={button.onClick}
            />
          );
        })}
      </div>
    </div>
  );
};
