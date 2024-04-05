import { useGetMenuButtons } from "../../hooks/useGetMenuButtons"
import { menuButton } from "../../types/menuTypes"
import { MenuBlock } from "./components/MenuBlock/MenuBlock"




export const Menu = () => {
  const menuButtons:menuButton[] = useGetMenuButtons()
  return (
   <MenuBlock menuButtons={menuButtons} />
  )
}
