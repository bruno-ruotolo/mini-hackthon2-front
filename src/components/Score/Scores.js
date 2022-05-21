import styled from "styled-components"
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ScoreList from "./ScoreList";
import axios from "axios";
import { UserInfosContext } from "../context/UserInfosContext";

function Scores() {
  const navigate = useNavigate();
  const [scores, setScores] = useState([])

  const { userInfos } = useContext(UserInfosContext)

  useEffect(() => {
    const promise = axios.get("https://hackathon-geomaster.herokuapp.com/score");
    promise.then(({ data }) => {
      setScores(data);
    })

    promise.catch(e => console.log(e))
  }, [])
  return (
    <>
      <ScoreSection>
        <ScoresDiv>
          <h2>Meus Parabens</h2>
          <h3>Seu Score : {userInfos.score}</h3>
          <Score>
            {scores.map((value, index) => {
              const { user, score } = value;
              return (
                <ScoreList
                  key={index}
                  user={user}
                  score={score}
                />
              )
            })}
          </Score>
        </ScoresDiv>
        <button onClick={() => navigate('/')}>Refazer</button>
      </ScoreSection>
    </>
  );
}

export default Scores;

const ScoreSection = styled.section`
  display:flex;
  width: 100%;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  button {
    width: 285px;
    height: 63px;
    margin-top: 21px;
  }

`

const ScoresDiv = styled.div`
  background-color: #8EDF83;
  margin-top :20px;
  width: 325px;
  height: 522px; 
  display: flex;
  flex-direction: column;
  align-items:center;
  overflow: scroll;

  h2 {
    font-family: 'Skranji';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 49px;
    color: #10BD9B;
    margin-top: 20px;
    text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
  }

  h3 {
    font-family: 'Alegreya';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 44px;
    color: #2F4463;
    margin-bottom: 12px;
  }
`
const Score = styled.div`
  display:flex;
  width: 80%;
  align-items:center;
  justify-content:center;
  flex-direction:column;
`