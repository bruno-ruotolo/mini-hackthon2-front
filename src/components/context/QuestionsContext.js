import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const QuestionsContext = createContext({});

export default function QuestionsProvider({ children }) {
  const [questionEasy, setQuestionEasy] = useState([]);
  const [questionMedium, setQuestionMedium] = useState([]);
  const [questionHard, setQuestionHard] = useState([]);

  useEffect(() => {
    async function getQuestions(req, res) {
      try {
        const easyQuestions = await axios.get("/questions?difficulty=easy");
        const mediumQuestions = await axios.get("/questions?difficulty=easy");
        const hardQuestions = await axios.get("/questions?difficulty=easy");

        setQuestionEasy(easyQuestions.sort(() => Math.random() - 0.5));
        setQuestionMedium(mediumQuestions.sort(() => Math.random() - 0.5));
        setQuestionHard(hardQuestions.sort(() => Math.random() - 0.5))

        res.send(200);
      } catch (e) {
        console.log(e);
        res.sendStatus(500)
      }
    }
  }, [])

  return (
    <QuestionsContext.Provider value={{ questionEasy, questionMedium, questionHard }}>
      {children}
    </QuestionsContext.Provider>
  )
}


