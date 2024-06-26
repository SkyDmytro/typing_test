import React from "react";
import { getStyledWords } from "../../../utils/functions";
import { useRef, useState } from "react";

export const useGetInputElement = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isInputFocused, setIsInputFocused] = useState(true);

  const handleClick = () => {
    setIsInputFocused(true);
    inputRef.current?.focus();
  };

  const handleBlur = () => {
    setIsInputFocused(false);
  };

  return {
    inputRef,
    isInputFocused,
    handleClick,
    handleBlur,
  };
};

type Props = {
  inputText: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
  words: string;
};

export const InputComponent: React.FC<Props> = ({
  inputText,
  onChange,
  isDisabled,
  words,
}) => {
  const { inputRef, isInputFocused, handleClick, handleBlur } =
    useGetInputElement();

  return (
    <>
      {isInputFocused ? (
        <>
          <div className="words-container">
            {getStyledWords(inputText, words)}
          </div>
          <input
            ref={inputRef}
            value={inputText}
            className="input"
            onChange={onChange}
            onBlur={handleBlur}
            autoFocus
            disabled={isDisabled}
          />
        </>
      ) : (
        <div onClick={handleClick} className="not-in-focus">
          Click to Focus
        </div>
      )}
    </>
  );
};

export default InputComponent;
