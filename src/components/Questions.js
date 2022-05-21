import styled from 'styled-components';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { QuestionsContext } from './context/QuestionsContext'
import Button from './Button';

function Questions() {
  const { questions } = useContext(QuestionsContext);

  const [answerQuestion, setAnswerQuestion] = useState(questions[0]);
  const [state, setState] = useState("");

  const navigate = useNavigate();
  function toScore() {
    navigate('/score');
  }

  console.log(questions);

  return questions ? (
    <Container>
      <section>
        <p>{answerQuestion.question}</p>
      </section>
      <main>
        <form>
          {answerQuestion.answers.map((value) => {
            const { answer, isCorrect } = value;
            return (
              <Button answer={answer} isCorret={isCorrect} setState={(value) => setState(value)} />
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
              <button >Próxima</button>
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
  button {
    margin-top: 56px;
    width: 285px;
    height: 63px;
  }
`
const ArticleDiv = styled.div`
  display: ${(props) => props.state === "" ? 'none' : 'block'}
`