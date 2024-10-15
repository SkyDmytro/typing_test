export const useShortenWords = (words: string) => {
  const wordsArray = words.split(" ");
  const resultArray = [
    wordsArray.slice(0, 50).join(" "),
    wordsArray.slice(50, wordsArray.length).join(" "),
  ];
  return resultArray;
};
