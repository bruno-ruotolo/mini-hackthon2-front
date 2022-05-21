import styled from 'styled-components';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserInfosContext } from './context/UserInfosContext';

function HomePage() {

  const { userInfos, setUserInfos } = useContext(UserInfosContext)
  const [name, setName] = useState();

  const navigate = useNavigate();
  function startGame(e) {
    e.preventDefault();
    setUserInfos({ ...userInfos, user: name })
    navigate('/questions');
  }

  return (
    <Container>
      <h1> GEOMASTER </h1>
      <form onSubmit={startGame}>
        <input
          placeholder='Seu Nome ...'
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <button type='submit'>Comece a Aprender</button>
      </form>
    </Container>
  );
}

export default HomePage;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  h1{
    font-size: 36px;
    font-weight: 700;
    font-family: 'Skranji', cursive;
    color: #8EDF83;
    text-shadow: 0px 7px 4px rgba(0, 0, 0, 0.44);
  }
  form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 150px;
      input {
        margin-bottom: 50px;
      }

      button {
        width: 285px;
        height: 63px;
      }
  }
`