import { TypingField } from "../TypingField/TypingField"
import "./typingTest.style.scss"

export const TypingTest = () => {
  return (
    <>
    <div className="field">
    <TypingField string="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut pariatur assumenda ex suscipit corrupti error ullam itaque deserunt. Recusandae earum maiores cumque id, itaque ea quae molestias temporibus error libero." activeWordAndSymbol={[1,1]}/>
    </div>
    </>
    )
}
