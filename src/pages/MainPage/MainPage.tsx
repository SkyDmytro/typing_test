import { createContext, useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { TypingTest } from "../../components/TypingTest/TypingTest";
import { themeContextType, themeType } from "../../types/contextTypes";
export const ThemeContext = createContext({} as themeContextType);

export const MainPage = () => {
  const [currentTheme, setCurrentTheme] = useState<themeType>({
    baseColor: "gray",
    headerColor: "orange",
    activeColor: "orange",
    backgroundColor: "#242424",
    caretColor: "orange",
    correctCharacter: "white",
    secondaryColor: "white",
    incorrectCharacter: "red",
  });

  return (
    <div
      style={{
        backgroundColor: currentTheme.backgroundColor,
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
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
