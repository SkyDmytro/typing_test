import classNames from 'classnames'
import "./typingFieldWord.style.scss"

interface TypingFieldWordProps{
  isActive:boolean,
  word:string,
  activeLetter:number
  idx:number
}

const Letter =({letter,indexes}:{indexes:string,letter:string,isCorrect:"correct"|"incorrect"|"none"})=> {
  return(
  <span className={classNames("letter",indexes)}>
  {letter}
  </span>)
}

export const TypingFieldWord = ({isActive,word,idx}:TypingFieldWordProps) => {
  const splitedWord = word.split("")

  return (
    <div className={classNames(isActive,"word")}>
      {splitedWord.map((letter,idx2)=>{
        return <Letter letter={letter} key={idx2} isCorrect={"none"} indexes={`${idx}`+`${idx2}`} />
      })}
    </div>
  )
}
