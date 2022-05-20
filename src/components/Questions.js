import styled from 'styled-components';
import { useContext } from "react"
import { QuestionsContext } from './context/QuestionsContext';

function Questions() {
  const { questionEasy, questionMedium, questionHard } = useContext(QuestionsContext)

  return (
    <Container>
      <section>
        <p>HSAUSAUHSUAHSUAUHSUAH SUAUSAHSUAHSUASHAUSHAU SHUASHUA</p>
      </section>
      <main>
        <div><p>Resposta 1</p></div>
        <div><p>Resposta 2</p></div>
        <div><p>Resposta 3</p></div>
        <div><p>Resposta 4</p></div>
      </main>
      <section>
        <p>Blablbalbalbakalabalabaasasa</p>
      </section>
    </Container>
  );
}

export default Questions;

const Container = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 60px 26px;
  color: #8EDF83;
  background-color: #BBDE7A;
  min-height: 100vh;
  height: fit-content;
  section {
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
    div {
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
    }
  }
`