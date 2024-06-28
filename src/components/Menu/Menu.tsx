import { useGetMenuButtons } from "../../hooks/useGetMenuButtons";
import { menuButton } from "../../types/menuTypes";
import { MenuBlock } from "./components/MenuBlock/MenuBlock";

export const Menu = ({ onReset }: { onReset: (_: boolean) => void }) => {
  const menuButtons: menuButton[] = useGetMenuButtons(onReset);
  return <MenuBlock menuButtons={menuButtons} />;
  
};
