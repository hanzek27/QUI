import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import AnswerButton from '../../../components/AnswerButton.js/AnswerButton'
import SumaryPage from '../../SumaryPage.js/SumaryPage'

const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

const QuizzWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 50px;
`
const ScoreBox = styled(motion.div)`
  width: 100%;
  background-color: black;
  border-radius: 10px;
  padding: 20px 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
const Answers = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export default function QuizzPage({ dataForQuiz }) {

  const [quizData, setQuizData] = useState(()=>{
    return dataForQuiz.map(question => mixAnswers(question))
  })
 
  function mixAnswers(data) {
    const answers = [...data.incorrectAnswers]
    const placeIndex = Math.floor(Math.random() * answers.length + 1)
    const correctAnswer = {...data.correctAnswer}
    answers.splice(placeIndex, 0, correctAnswer)
    const questionUpdated = {...data, incorrectAnswers: answers}
    return questionUpdated
  }

  const [round, setRound] = useState(0)
  const [gameEnd, setGameEnd] = useState(false)
  const [score, setScore] = useState({ correctAnswers: 0, incorrectAnswers: 0 })

  function updateQuizData(event) {
    const {id, name, value} = event.currentTarget
    const findQuestion = quizData.find(question => question.id === name)
    const updatedAnswers = findQuestion.incorrectAnswers.map( ans => {
      return ans.id === id ? {...ans, status: 'selected'} : {...ans, status: 'unselected'}
    })
    const updatedQuestion = {...findQuestion, answerType: value, incorrectAnswers: updatedAnswers}
    setQuizData( prevData => prevData.map(question => question.id === name ? updatedQuestion : {...question}))
  }

  useEffect(() => {
    const corrAnswers = quizData.reduce((acu, current) => {
      return current.answerType === 'true' ? acu + 1 : acu
    }, 0)
    const incorrAnswers = quizData.reduce((acu, current) => {
      return current.answerType === 'false' ? acu + 1 : acu
    }, 0)
    setScore((prevScore) => ({
      correctAnswers: corrAnswers,
      incorrectAnswers: incorrAnswers,
    }))
  }, [quizData])

  function gameControll() {
    round == quizData.length - 1
      ? delay(500, () => setGameEnd(true))
      : delay(1000, () => setRound((prev) => prev + 1))
  }
console.log(quizData[round].incorrectAnswers);
  return (
    <>
      {gameEnd ? (
        <SumaryPage finalResults={quizData} />
      ) : (
        <QuizzWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <ScoreBox>
            <h5>{`round: ${round + 1}`}</h5>
            <h5>{`correct: ${score.correctAnswers}`}</h5>
            <h5>{`wrong: ${score.incorrectAnswers}`}</h5>
          </ScoreBox>
          <h3>{renderHTML(quizData[round].question)}</h3>
          <Answers
            onClick={gameControll}
            initial={{ x: '-400px' }}
            animate={{ x: '0' }}
          >
            {quizData[round].incorrectAnswers.map((ans) => {
              return (
                <AnswerButton
                  onClickHandler={updateQuizData}
                  key={ans.id}
                  questionID={quizData[round].id}
                  answer={ans}
                >
                  {ans.value}
                </AnswerButton>
                
              )
            })}
          </Answers>
        </QuizzWrapper>
      )}
    </>
  )
}

function delay(time, action) {
  setTimeout(() => {
    action()
  }, time)
}
