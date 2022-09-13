import React from 'react'
import styled from 'styled-components'
import BoxSimplemodal from './modal-types/BoxSimple-modal'

const QuestionAnswerWrapper = styled.div`
  margin: 10px 0;
  padding-top: 10px;
  border-top: 1px solid white;
`

export default function QuizSumary({ round, gameEnd, quizData }) {
  const { correct, incorrect, quizItems } = quizData

  return (
    <BoxSimplemodal gameEnd={gameEnd}>
      <h5>{round + 1} round</h5>
      <h5>{correct} correct</h5>
      {gameEnd &&
        quizItems.map((item) => {
          return (
            item.answered &&
            item.guessType === 'correct-guess' &&
            <QuestionAnswerWrapper key={item.question}>
              <p><strong>question:</strong> {item.question}</p>
              <p><strong>answer:</strong> {item.correct}</p>
            </QuestionAnswerWrapper>
          )
        })}
      <h5>{incorrect} incorrect</h5>
      {gameEnd &&
        quizItems.map((item) => {
          return (
            item.answered &&
            item.guessType === 'incorrect-gues' &&
            <QuestionAnswerWrapper key={item.question}>
              <p><strong>question:</strong> {item.question}</p>
              <p><strong>answer:</strong> {item.correct}</p>
            </QuestionAnswerWrapper>
          )
        })}
    </BoxSimplemodal>
  )
}
