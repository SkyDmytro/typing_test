import {
  getAccuracy,
  getAmountOfWords,
  getCorrectnIncorrectCharacters,
  getWordsPerMinute,
} from "../utils/functions";
const inputText = "word1 word2 word3 word4 word5 word6";
const correctText = "word1 word2 word3 word4 word6 word5";

describe("functions  module", () => {
  test("Accuracy test", () => {
    const result1 = getAccuracy(75, 25);
    expect(result1).toBe(75);
    const result2 = getAccuracy(25, 75);
    expect(result2).toBe(25);
  });

  test("Amount of Words test", () => {
    const result = getAmountOfWords("word1 word2 word3 word4 word5 word6");

    expect(result).toBe(6);
  });
  test("Correct and inCorrect Characters", () => {
    const { correctCharacters, incorrectCharacters } =
      getCorrectnIncorrectCharacters(inputText, correctText);
    expect(correctCharacters).toBe(correctText.length - 2);
    expect(incorrectCharacters).toBe(2);
  });
  test("Words per minute test", () => {
    const result = getWordsPerMinute(100, 60);
    const result2 = getWordsPerMinute(100, 30);
    console.log(result);
    expect(result).toBe(100);
    expect(result2).toBe(200);
  });
});
