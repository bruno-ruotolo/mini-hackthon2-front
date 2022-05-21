import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { QuestionsContext } from './context/QuestionsContext'
import Button from './Button';
import { UserInfosContext } from './context/UserInfosContext';

function Questions() {
  const { questions } = useContext(QuestionsContext);
  const { userInfos } = useContext(UserInfosContext)

  const [answerQuestion, setAnswerQuestion] = useState();
  const [state, setState] = useState("");
  const [clicked, setClicked] = useState(false);
  const [buttonStatus, setButtonStatus] = useState(false)

  useEffect(() => {
    console.log("Renderizei")
    setAnswerQuestion(questions[userInfos.score]);
  }, [questions, clicked]);



  const navigate = useNavigate();
  function toScore() {
    const promise = axios.post("https://hackathon-geomaster.herokuapp.com/score", userInfos)
    promise.then(() => {
      navigate('/score');
    });
    promise.catch((e) => {
      console.log(e.message);
    })
  }

  function renderQuestion() {
    setAnswerQuestion();
    setState("");
    setButtonStatus(false);
    setClicked(!clicked);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (questions.length > 0) && answerQuestion ? (
    <Container>
      <section>
        <p>{answerQuestion.question}</p>
      </section>
      <main>
        <form onSubmit={handleSubmit}>
          {!buttonStatus ?
            answerQuestion.answers.sort(() => Math.random() - 0.5).map((value, index) => {
              const { answer, isCorrect } = value;
              return (
                <Button key={index} answer={answer} isCorrect={isCorrect} setState={(value) => setState(value)}
                  setButtonStatus={setButtonStatus} buttonStatus={buttonStatus} />
              )
            }) : answerQuestion.answers.map((value, index) => {
              const { answer, isCorrect } = value;
              return (
                <Button key={index} answer={answer} isCorrect={isCorrect} setState={(value) => setState(value)}
                  setButtonStatus={setButtonStatus} buttonStatus={buttonStatus} />
              )
            })}
        </form>
      </main>
      <ArticleDiv state={state}>
        {
          state ?
            (<>
              <section>
                <p>{answerQuestion.article}</p>
              </section>
              <button onClick={renderQuestion}>Próxima</button>
            </>) :
            (<>
              <section>
                <p>{answerQuestion.article}</p>
              </section>
              <button onClick={toScore}>Scores</button>
            </>)
        }
      </ArticleDiv>
    </Container>
  ) : <Container></Container>;
}

export default Questions;

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 60px 26px;
  color: #8EDF83;
  background-color: #BBDE7A;
  min-height: 100vh;
  height: fit-content;
  section {
    width: 319px;   
    border-radius: 4px;
    padding: 28px;
    background-color: #2F4463;  
  }
  main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 400px;

    form {
      display:flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
`
const ArticleDiv = styled.div`
  display: ${(props) => props.state === "" ? 'none' : 'flex'};
  flex-direction: column;
  align-items:center;
  justify-content:center;
  
  button {
    margin-top: 56px;
    width: 285px;
    height: 63px;
  }
`