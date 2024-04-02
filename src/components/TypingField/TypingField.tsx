import { ReactNode, useState } from "react";
import "./typingField.style.scss";

export const TypingField = () => {
  const [inputText, setInputText] = useState("");
  const text =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut pariatur assumenda ex suscipit corrupti error ullam itaque deserunt. Recusandae earum maiores cumque id, itaque ea quae molestias temporibus error libero.";

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const getStyledWords = (): ReactNode => {
    const inputArray = inputText.split("");
    const otherText = text.slice(inputText.length, text.length);
    return (
      <>
        {inputArray.map((character, idx) => {
          if (character === text.charAt(idx)) {
            return <span className="correct">{text.charAt(idx)}</span>;
          } else {
            return <span className="incorrect">{text.charAt(idx)}</span>;
          }
        })}
        <span className="caret-right"></span>
        {otherText}
      </>
    );
  };

  return (
    <>

      <div className="field">
        <div className="words-container">{getStyledWords()}</div>
        <input className="input" onChange={handleInputChange} autoFocus />
      </div>
    </>
  );
};
