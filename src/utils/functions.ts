const getAmountOfWords =(text:string):number=>{
  return text.trim().split(" ").length
}

const getWordsPerMinute =(words:number,time:number):number=>{

  return (words/time)*60

}

const getAccuracy =(amountOfCorrectChars:number,amountOfIncorrectCharacters:number)=>{
  return amountOfCorrectChars/(amountOfCorrectChars+amountOfIncorrectCharacters) *100
}
export {getAmountOfWords, getWordsPerMinute,getAccuracy}