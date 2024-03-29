import classNames from 'classnames'
import "./typingFieldWord.style.scss"

interface TypingFieldWordProps{
  isActive:boolean,
  word:string,
  activeLetter:number
}

const Letter =({letter,isCorrect}:{letter:string,isCorrect:"correct"|"incorrect"|"none"})=> {
  return(
  <div className={classNames(isCorrect)}>
  {letter}
  </div>)
}

export const TypingFieldWord = ({isActive,word}:TypingFieldWordProps) => {
  const splitedWord = word.split("")

  return (
    <div className={classNames(isActive,"word")}>
      {splitedWord.map((letter,idx)=>{
        return <Letter letter={letter} key={idx} isCorrect={"none"}/>
      })}
    </div>
  )
}
