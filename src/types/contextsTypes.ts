import { ResultType } from "./results";
export type ResultsContextType = {
  results: ResultType;
  setResults: React.Dispatch<React.SetStateAction<ResultType>>;
};
export type IdContextForRemountType = {
  typingFieldId: number;
  countDownId: number;
  setTypingFieldId: React.Dispatch<React.SetStateAction<number>>;
  setcountDownId: React.Dispatch<React.SetStateAction<number>>;
};
export type modesType = "words" | "time";
export type modesContextType = {
  mode: modesType;
  setMode: React.Dispatch<React.SetStateAction<modesType>>;
};
