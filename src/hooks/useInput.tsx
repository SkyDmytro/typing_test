import React, { useState } from 'react'

export const useInput = (onStart:(_:boolean)=>void) => {
  const [inputText, setInputText] = useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length === 1) {
      onStart(true);
    }
    setInputText(event.target.value);
  };

  return {inputText, handleInputChange}

}
