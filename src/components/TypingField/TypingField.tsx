import React, { useState } from 'react'
import { TypingFieldWord } from './components/TypingFieldWord';
import "./typingField.style.scss"
import classNames from 'classnames';

interface TypingFieldProps{
  string:string,
  activeWordAndSymbol:number[]
}

export const TypingField = ({string}:TypingFieldProps) => {
  const newString = string;
  const [words,setWords]=useState<string[]>(newString.split(" "))

  return (
    <div className={classNames("words")}>
    {
      words.map((word,idx)=>{

        return (
          <TypingFieldWord word={word} isActive={false} key={idx} activeLetter={1}/>
        )
      })
    }
    </div>
  )
}
