import styled from "styled-components"

export default function ScoreList({ user, score }) {
  return (
    <ScoreSection>
      <p>{user}</p>
      <p>{score}</p>
    </ScoreSection>
  )
}

const ScoreSection = styled.div`
  display:flex;
  width: 100%;
  justify-content:space-between;
  margin-bottom: 10px;
`
