import { useState, useContext } from "react"
import styled from "styled-components"
import { UserInfosContext } from "./context/UserInfosContext";

export default function Button({ answer, isCorrect, setState, setButtonStatus, buttonStatus }) {
  const { setUserInfos, userInfos } = useContext(UserInfosContext)
  const [styleStatus, setStyleStatus] = useState(false);
  return (
    <ButtonDiv styleStatus={styleStatus} isCorrect={isCorrect}>
      <button disabled={buttonStatus} type="submit" onClick={() => {
        setState(isCorrect); setStyleStatus(true); setUserInfos({ ...userInfos, score: userInfos.score + 1 });
        setButtonStatus(true)
      }}><p>{answer}</p></button>
    </ButtonDiv >
  )
}

const ButtonDiv = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  button {
    display: flex;
    align-items: center;
    justify-content: center;  
    width: 150px;
    height: 150px;
    background-color: #10BD9B;
    border-radius: 4px;
    color: #000000;
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    border: ${({ styleStatus, isCorrect }) => {
    if (styleStatus) {
      if (isCorrect) {
        return "2px solid green";
      } else {
        return "2px solid red";
      }
    } else return "none"
  }}
}
`
