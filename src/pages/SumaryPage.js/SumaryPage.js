import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const SumaryWrapper = styled.div`
  width: 100%;
  color: white;
`

export default function SumaryPage({finalResults}) {
  return (
    <SumaryWrapper>
      <h2>How did you do?</h2>
      <h4>correct answers</h4>
      {finalResults.map(question => {
        return (
          question.answerType === 'true' ? 
          <div key={question.id}>
            <h5>{question.question}</h5>
            <p>{question.correctAnswer.value}</p>
          </div> : null
        )
      })}
    </SumaryWrapper>
  )
}
