import ukrainianWordsJSON from "../assets/words_data/ua.json";
import { currentLanguage } from "../components/TypingTest/TypingTest";
import englishWordsJSON from "../assets/words_data/en.json";
import { wordsType } from "../types/wordsType";

type Item = {
  val: string;
  key: string;
};

type wordsTypeDictionary = {
  [key: string]: Item;
};

// export const useGetRandomWords = (currentLanguage: currentLanguage) => {
//   let result = "";
//   const currentWords =
//     currentLanguage === "EN" ? englishWordsJSON : ukrainianWordsJSON;

//   while (result.length < 200) {
//     const newWord = getRandomWord(currentWords);
//     if (result.length === 0) {
//       result = newWord;
//     } else {
//       result = result + " " + newWord;
//     }
//   }

//   console.log(result);
//   return result;
// };
export const useGetRandomWords = (
  currentLanguage: currentLanguage,
  numberOfWords: number
): wordsType => {
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
export const getRandomWord = (words: wordsTypeDictionary) => {
  const randNumber = Math.floor(
    Math.random() * (Object.keys(words).length - 2) + 1
  );
  return words[randNumber].val;
};
