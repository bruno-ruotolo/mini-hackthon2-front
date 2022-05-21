import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const QuestionsContext = createContext({});

export default function QuestionsProvider({ children }) {
  const [questions, setQuestions] = useState([]);
  let easyAnswerSorted;
  let mediumAnswerSorted;
  let hardAnswerSorted;

  useEffect(() => {
    async function getQuestions() {
      try {
        let easyQuestions = await axios.get("https://hackathon-geomaster.herokuapp.com/questions?dificulty=easy");
        let mediumQuestions = await axios.get("https://hackathon-geomaster.herokuapp.com/questions?dificulty=medium");
        let hardQuestions = await axios.get("https://hackathon-geomaster.herokuapp.com/questions?dificulty=hard");

        // for (let i = 0; i < easyQuestions.data.length; i++) {
        //   let easyAnswerSorted = easyQuestions.data[i].answers.sort(() => Math.random() - 0.5);
        //   let mediumAnswerSorted = mediumQuestions.data[i].answers.sort(() => Math.random() - 0.5);
        //   let hardAnswerSorted = hardQuestions.data[i].answers.sort(() => Math.random() - 0.5);

        //   easyQuestions.data[i].answers = [...easyAnswerSorted];
        //   mediumQuestions.data[i].answers = [...mediumAnswerSorted];
        //   hardQuestions.data[i].answers = [...hardAnswerSorted];
        // }

        setQuestions([
          ...easyQuestions.data.sort(() => Math.random() - 0.5).splice(0, 3)
          , ...mediumQuestions.data.sort(() => Math.random() - 0.5).splice(0, 3)
          , ...hardQuestions.data.sort(() => Math.random() - 0.5).splice(0, 3)
        ]);

      } catch (e) {
        console.log(e);
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


