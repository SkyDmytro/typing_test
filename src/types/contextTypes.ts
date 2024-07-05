import React, { SetStateAction } from "react";
import { ResultType } from "./results";

export type ResultsContextType = {
  results: ResultType;
  setResults: React.Dispatch<React.SetStateAction<ResultType>>;
};
export type IdContextForRemountType = {
  idForRemount: number;
  setIdForRemount: React.Dispatch<React.SetStateAction<number>>;
};
export type modesContextType = {
  mode: modesType;
  setMode: React.Dispatch<SetStateAction<modesType>>;
};
export type modesType = "words" | "time";

export type themeContextType = {
  setTheme: React.Dispatch<SetStateAction<themeType>>;
  theme: themeType;
};

export type themeType = {
  baseColor: string;
  backgroundColor: string;
  activeColor: string;
  caretColor: string;
  correctCharacter: string;
  incorrectCharacter: string;
  headerColor: string;
  secondaryColor: string;
};

export type modesSpecificSettingsContextType = {
  modesSpecificSettings: modesSpecificSettingsType;
  setModesSpecificSettings: React.Dispatch<
    SetStateAction<modesSpecificSettingsType>
  >;
};

export type modesSpecificSettingsType = {
  time: number;
  words: number;
  defaultValues: {
    time: number;
    words: number;
  };
};
