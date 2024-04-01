import { useEffect, useRef, useState } from "react";
import { TypingField } from "../TypingField/TypingField";
import { TypingInput } from "../TypingInput/TypingInput";
import "./typingTest.style.scss";
import {useToggleClassName } from "../../hooks/useAddClassName";

export const TypingTest = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { add, remove } = useToggleClassName();
  const [currentCharIndex,setCurrentCharIndex]= useState(0)
  const [currentWordIndex, setCurrentWordIndex]=useState(0)

  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut pariatur assumenda ex suscipit corrupti error ullam itaque deserunt. Recusandae earum maiores cumque id, itaque ea quae molestias temporibus error libero.";
  useEffect(() => {
    add({ classname: "caret-left", elementClassname: "00" });
    inputRef.current?.focus()
    return () => {
      remove({ classname: "caret-left", elementClassname: "00" });
    };
  }, []);

  const handleInputChange = (input: string) => {
    const typedChar = input[input.length-1];
    const expectedChar = text[input.length - 1];
    console.log(typedChar, expectedChar);
    if (typedChar === expectedChar) {
      if(typedChar===" "){
        setCurrentWordIndex(currentWordIndex+1)
        setCurrentCharIndex(0)
      }
      else{
        setCurrentCharIndex(currentCharIndex+1)
      }
      remove({classname:"caret-left",elementClassname:`${currentWordIndex}${currentCharIndex}`})
      add({classname:"caret-left",elementClassname:`${currentWordIndex}${currentCharIndex+1}`})
      remove(({classname:"incorrect",elementClassname:`${currentWordIndex}${currentCharIndex}`}))
      add({classname:"correct",elementClassname:`${currentWordIndex}${currentCharIndex}`})
    }else{
      add(({classname:"incorrect",elementClassname:`${currentWordIndex}${currentCharIndex}`}))
    }

  };

  return (
    <>
      <div className="field">
        <TypingField string={text} activeWordAndSymbol={[1, 1]} />
        <TypingInput onChange={handleInputChange} inputRef={inputRef} />
      </div>
    </>
  );
};
