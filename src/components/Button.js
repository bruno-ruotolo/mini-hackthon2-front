import { useState } from "react"
import styled from "styled-components"

export default function Button({ answer, isCorrect, setState }) {
  const [style, setStyle] = useState(false);

  return (
    <ButtonDiv style={style} isCorrect={isCorrect}>
      <button type="submit" onClick={() => { setState(isCorrect); setStyle(true) }}><p>{answer}</p></button>
    </ButtonDiv >
  )
}

const ButtonDiv = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;  
    width: 150px;
    height: 150px;
    background-color: #10BD9B;
    border-radius: 4px;
    color: #000000;
    font-size: 24px;
    font-weight: 400;
    margin-top: 20px;
    border: ${({ style, isCorrect }) => {
    if (style) {
      if (isCorrect) {
        return "2px solid green";
      } else {
        return "2px solid red";
      }
    } else return "none"
  }}
}
`
