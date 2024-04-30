import ukrainianWordsJSON from "../assets/words_data/ua.json";
import { currentLanguage } from "../components/TypingTest/TypingTest";
import englishWordsJSON from "../assets/words_data/en.json";

type Item = {
  val: string;
  key: string;
};

type wordsTypeDictionary = {
  [key: string]: Item;
};
// type useGetRandomWordsProps ={
//   currentLanguage:
// }

export const useGetRandomWords = (currentLanguage: currentLanguage) => {
  let result = "";
  const currentWords =
    currentLanguage === "EN" ? englishWordsJSON : ukrainianWordsJSON;

  while (result.length < 200) {
    const newWord = getRandomWord(currentWords);
    if (result.length === 0) {
      result = newWord;
    } else {
      result = result + " " + newWord;
    }
  }

  console.log(result);
  return result;
};

const getRandomWord = (words: wordsTypeDictionary) => {
  const randNumber = Math.floor(Math.random() * Object.keys(words).length);
  return words[randNumber].val;
};
