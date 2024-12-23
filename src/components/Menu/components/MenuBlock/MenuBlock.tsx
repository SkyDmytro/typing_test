import "./menuBlock.style.scss";
import { menuButton } from "../../../../types/menuTypes";
import { Button } from "../Button";
import { Tooltip } from "../../../Stats/components/Tooltip";
import classNames from "classnames";
import { useTooltip } from "../../../../hooks/useTooltip";
import { useContext } from "react";
import { ThemeContext } from "../../../../pages/MainPage/MainPage";

interface menuBlockProps {
  menuButtons: menuButton[];
}

export const MenuBlock = ({ menuButtons }: menuBlockProps) => {
  const { showTooltip, hideTooltip } = useTooltip();
  const { theme } = useContext(ThemeContext);

  return (
    <div className="menu-main" style={{ color: theme.baseColor }}>
      <div className="buttons">
        {menuButtons.map((button, index) => {
          return (
            <div className="button-with-tooltip">
              <Button
                key={index}
                icon={button?.icon}
                text={button?.text}
                isActive={button.isActive}
                onClick={button.onClick}
                onMouseOver={() => showTooltip(`tooltip-${index}`)}
                onMouseOut={() => hideTooltip(`tooltip-${index}`)}
              />
              {button.tooltipText && (
                <Tooltip
                  text={button.tooltipText}
                  className={classNames("tooltip", `tooltip-${index}`)}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
