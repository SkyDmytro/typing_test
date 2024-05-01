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
export const useGetRandomWords = (
  currentLanguage: currentLanguage,
  numberOfWords: number
) => {
  let result = "";
  const currentWords =
    currentLanguage === "EN" ? englishWordsJSON : ukrainianWordsJSON;
  let wordCount = 0;
  while (wordCount < numberOfWords) {
    const newWord = getRandomWord(currentWords);
    if (result.length === 0) {
      result = newWord;
    } else {
      result = result + " " + newWord;
    }
    wordCount++;
  }

  console.log(result);
  return result;
};

const getRandomWord = (words: wordsTypeDictionary) => {
  const randNumber = Math.floor(Math.random() * Object.keys(words).length);
  return words[randNumber].val;
};
