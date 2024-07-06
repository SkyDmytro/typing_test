import { themeType } from "../types/contextTypes";

type themesArrayType = { name: string; theme: themeType }[];

const themesArray: themesArrayType = [
  {
    name: "Base",
    theme: {
      baseColor: "gray",
      headerColor: "orange",
      activeColor: "orange",
      backgroundColor: "#242424",
      caretColor: "orange",
      correctCharacter: "white",
      secondaryColor: "white",
      incorrectCharacter: "red",
    },
  },
  {
    name: "Ocean Breeze",
    theme: {
      baseColor: "lightblue",
      headerColor: "teal",
      activeColor: "teal",
      backgroundColor: "#e0f2f5",
      caretColor: "teal",
      correctCharacter: "black",
      secondaryColor: "black",
      incorrectCharacter: "crimson",
    },
  },
  {
    name: "Sunset Glow",
    theme: {
      baseColor: "goldenrod",
      headerColor: "orange",
      activeColor: "orange",
      backgroundColor: "#333333",
      caretColor: "orange",
      correctCharacter: "white",
      secondaryColor: "white",
      incorrectCharacter: "maroon",
    },
  },
  {
    name: "Forest Green",
    theme: {
      baseColor: "forestgreen",
      headerColor: "limegreen",
      activeColor: "limegreen",
      backgroundColor: "#f0f0f0",
      caretColor: "limegreen",
      correctCharacter: "black",
      secondaryColor: "black",
      incorrectCharacter: "darkred",
    },
  },
  {
    name: "Modern Monochrome",
    theme: {
      baseColor: "gray",
      headerColor: "black",
      activeColor: "black",
      backgroundColor: "#f5f5f5",
      caretColor: "black",
      correctCharacter: "black",
      secondaryColor: "black",
      incorrectCharacter: "black",
    },
  },
  {
    name: "Pastel Paradise",
    theme: {
      baseColor: "lavender",
      headerColor: "skyblue",
      activeColor: "skyblue",
      backgroundColor: "#a9bec2", // Light gray
      caretColor: "skyblue",
      correctCharacter: "black",
      secondaryColor: "black",
      incorrectCharacter: "magenta",
    },
  },
];

export { themesArray };
