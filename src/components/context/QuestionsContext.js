import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const QuestionsContext = createContext({});

export default function QuestionsProvider({ children }) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function getQuestions(req, res) {
      try {
        const easyQuestions = await axios.get("https://hackathon-geomaster.herokuapp.com/questions?difficulty=easy");
        const mediumQuestions = await axios.get("https://hackathon-geomaster.herokuapp.com/questions?difficulty=medium");
        const hardQuestions = await axios.get("https://hackathon-geomaster.herokuapp.com/questions?difficulty=hard");

        setQuestions([
          ...easyQuestions.sort(() => Math.random() - 0.5).splice(0, 3)
          , ...mediumQuestions.sort(() => Math.random() - 0.5).splice(0, 3)
          , ...hardQuestions.sort(() => Math.random() - 0.5).splice(0, 3)
        ]);

        res.send(200);
      } catch (e) {
        console.log(e);
        res.sendStatus(500)
      }
    }
    getQuestions();
  }, [])

  return (
    <QuestionsContext.Provider value={{ questions }}>
      {children}
    </QuestionsContext.Provider>
  )
}


