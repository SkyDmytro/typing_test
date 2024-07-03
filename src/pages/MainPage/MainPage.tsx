import { createContext, useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { TypingTest } from "../../components/TypingTest/TypingTest";
import { themeContextType, themeType } from "../../types/contextTypes";
export const ThemeContext = createContext({} as themeContextType);

export const MainPage = () => {
  const [currentTheme, setCurrentTheme] = useState<themeType>({
    baseColor: "white",
    headerColor: "orange",
    activeColor: "red",
    secondaryColor: "purple",
    backgroundColor: "yellow",
    caretColor: "#FF5733",
    correctCharacter: "#33F3FF",
    incorrectCharacter: "#FF3333",
  });

  return (
    <div>
      <ThemeContext.Provider
        value={{ theme: currentTheme, setTheme: setCurrentTheme }}
      >
        <Header />
        <TypingTest />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
};
