import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import SwitchButtons from '../switch-buttons/SwitchButtonsCopy'
import CustomButton from '../CustomButton'
import BoxArrowModal from './modal-types/BoxArrow-modal'
import Select from '../select/Select'

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
`

export default function QuizSetUp({ onClick, getQuizData }) {
  const [quizOptions, setQuizOptions] = useState({
    difficoulty: 'easy',
    category: 9,
  })
  function quizOptionsUpdate(event) {
    const { name, value } = event.target
    setQuizOptions((prev) => {
      return { ...prev, [name]: value }
    })
  }

  return (
    <BoxArrowModal onClick={onClick}>
      <ContentWrapper>
        <h2>Quiz settings</h2>
        <SwitchButtons
          onClick={quizOptionsUpdate}
          value={quizOptions.difficoulty}
        />
        <Select value={quizOptions.category} onChange={quizOptionsUpdate} />

        <CustomButton
          onClick={() => getQuizData(quizOptions)}
          buttonBackground="#008060"
          icon="play"
        >
          start the game
        </CustomButton>
      </ContentWrapper>
    </BoxArrowModal>
  )
}