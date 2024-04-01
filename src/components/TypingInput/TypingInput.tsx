import React from "react";
import "./typinginput.style.scss";

interface TypingInputProps {
  onChange: (inputText: string) => void;
  inputRef:React.RefObject<HTMLInputElement>,
}
export const TypingInput = ({ onChange,inputRef }: TypingInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return <input ref={inputRef} className="input" onChange={handleChange} />;
};

