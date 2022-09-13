import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from '../../icons/Icon'
import CustomButton from '../CustomButton'
import TextInput from '../text-input/TextInput'

const CustomQuestionsWrapper = styled(motion.div)`
  background-color: black;
  border-radius: 15px;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`
const IncorrectWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
`
const DeleteButton = styled.button`
  background-color: #811818;
  border: 1px solid #a22020;
  border-radius: 6px;
  padding: 8px;
`

export default function CustomQuestionsBox({
  questionBoxID,
  questionData,
  firstLevelUpdate,
  secondLevelUpdate,
  addInput,
  removeInput,
  removeQuestionBox,
}) {
  
  return (
    <CustomQuestionsWrapper
      initial={{ x: '100vw' }}
      animate={{ x: '0' }}
      exit={{ x: '-100vw' }}
      transition={{ duration: 0.3, type: "spring" }}
      whileHover={{ scale: 1.05 }}
      id={questionBoxID}
      key={questionBoxID}
    >
      <TextInput
        name="question"
        value={questionData.question}
        onChange={(e) => firstLevelUpdate(e, questionBoxID)}
        placeholder="question"
        dark={true}
      />
      <TextInput
        name="correctAnswer"
        value={questionData.correctAnswer.value}
        onChange={(e) => firstLevelUpdate(e, questionBoxID)}
        placeholder="CORRECT answer"
        dark={true}
      />
      <AnimatePresence initial={false}>
        {questionData.incorrectAnswers.map((incAnswer) => {
          return (
            <IncorrectWrapper
              key={incAnswer.id}
              exit={{ x: '-30px', opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <TextInput
                name="incorrectAnswer"
                id={incAnswer.id}
                value={incAnswer.value}
                onChange={(e) => secondLevelUpdate(e, questionBoxID)}
                placeholder="wrong answer"
                dark={true}
              />
              <DeleteButton
                type="button"
                id={incAnswer.id}
                name={incAnswer.id}
                onClick={(e) => removeInput(e, questionBoxID)}
              >
                <Icon icon="incorrect" color="white" width="25px" />
              </DeleteButton>
            </IncorrectWrapper>
          )
        })}
      </AnimatePresence>
      <CustomButton
        buttonBackground="#209F8B"
        onClick={() => addInput(questionBoxID)}
      >
        add wrong answer
      </CustomButton>
      <CustomButton
        buttonBackground="red"
        onClick={() => removeQuestionBox(questionBoxID)}
      >
        remove box
      </CustomButton>
    </CustomQuestionsWrapper>
  )
}
