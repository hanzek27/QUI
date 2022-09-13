import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import CustomQuestionsBox from '../../components/questions-intake-box/CustomQuestionsBox'
import TextInput from '../../components/text-input/TextInput'
import Icon from '../../icons/Icon'

const EditorWrapper = styled.div`
  margin-bottom: 150px;
`
const AddButtonWrapper = styled.div`
  width: 100%;
  padding-top: 30px;

`
const Button = styled.button`
  background-color: black;
  color: white;
  border-radius: 10px;
  padding: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`
const SaveButton = styled.button`
  background-color: black;
  color: white;
  border-radius: 10px;
  padding: 20px 20px;
  width: 100%;
`
const QuizNameWrapper = styled.div`
  width: 100%;
  margin-bottom: 15px;
`
const BottomSection = styled.div`
  position: absolute;
  padding: 20px 30px;
  bottom: 0;
  left: 0;
  right: 0;
  height: auto;
  background-color: #9F2828;

`

export default function QuizEditor({ editData }) {
 
  const questionTemplate = {
    id: nanoid(),
    answerType: 'none',
    question: '',
    correctAnswer: {id: nanoid(), status: 'unanswered', questionIs: true, value: '' },
    incorrectAnswers: [],
  }
  const [quizName, setQuizName] = useState(()=> editData ? editData.nameOfTheQuiz : '')
  const [questions, setquestions] = useState(()=> editData ? [...editData.quizQuestions] : [{...questionTemplate}])

  function quizNameUpdate(event) {
    setQuizName(event.target.value)
  }

  function readyToSave() {
    const noHeadline = quizName
    const noQuestion = questions[0].question
    const noAnswer = questions[0].correctAnswer.value
    const noIncorrectAnswer = questions[0].incorrectAnswers.length
    if (noHeadline && noQuestion && noAnswer && noIncorrectAnswer) {return true} else {return false}
  }

  function saveCustomQuiz() {
    if (!readyToSave()) { alert('you are missing something') } else {
      let dataToSave = {}
      if (editData) {
        dataToSave = {
          id: editData.id,
          nameOfTheQuiz: quizName,
          quizQuestions: questions
        }
      } else {
        const quizID = nanoid()
        dataToSave = {
          id: quizID,
          nameOfTheQuiz: quizName,
          quizQuestions: questions
        }
      }
      localStorage.setItem(dataToSave.id, JSON.stringify(dataToSave))
      setquestions([{...questionTemplate}])
      setQuizName('')
    }
  }

  function textOnChangeUpdate(event, questionBoxID) {
    const inputValue = event.target.value
    const inputName = event.target.name
    const wrongInputID = event.target.id
    const getQuestionBox = questions.find((que) => que.id === questionBoxID)
    const getQuestionIndex = questions.findIndex((que) => que.id === questionBoxID)

    if (inputName === 'incorrectAnswer') {
      const updatedIncorrectAnswers = getQuestionBox.incorrectAnswers.map( ans => {
        return ans.id === wrongInputID ? {...ans, value: inputValue} : {...ans}
      })
      setquestions(prevData => {
        const newData = [...prevData]
        newData.splice(getQuestionIndex, 1, {...getQuestionBox, incorrectAnswers: updatedIncorrectAnswers})
        return newData
      })
    } else if (inputName === 'correctAnswer') {
      const updatedQuestion = {
        ...getQuestionBox, 
        correctAnswer: { ...getQuestionBox.correctAnswer, value: inputValue }
      }
      setquestions(prevData => {
        const newData = [...prevData]
        newData.splice(getQuestionIndex, 1, updatedQuestion)
        return newData
      })
    } else {
      const updatedQuestion = {
        ...getQuestionBox, 
        [inputName]: inputValue
      }
      setquestions(prevData => {
        const newData = [...prevData]
        newData.splice(getQuestionIndex, 1, updatedQuestion)
        return newData
      })
    }
  }

  function removeQuestionBox(questionBoxID) {
    setquestions((prevData) =>
      prevData.filter((question) => question.id !== questionBoxID)
    )
  }

  function addQuestionBox() {
    const newQuestions = [...questions]
    newQuestions.push({...questionTemplate, id: nanoid()})
    setquestions(newQuestions)
  }

  function addInput(questionBoxID) {
    const newIncorrectAnswer = {id: nanoid(), status: 'unanswered', questionIs: false, value: '' }
    const question = questions.find((question) => question.id === questionBoxID)
    question.incorrectAnswers.push(newIncorrectAnswer)
    setquestions((prevData) =>
      prevData.map((question) => {
        return question.id === questionBoxID ? question : { ...question }
      })
    )
  }

  function removeInput(event, questionBoxID) {
    const buttonID = event.currentTarget.id
    const question = questions.find((question) => question.id === questionBoxID)
    const newAnswers = question.incorrectAnswers.filter(
      (ans) => ans.id !== buttonID
    )
    setquestions((prevData) =>
      prevData.map((question) => {
        return question.id === questionBoxID
          ? { ...question, incorrectAnswers: newAnswers }
          : { ...question }
      })
    )
  }

  return (
    <EditorWrapper>
      <QuizNameWrapper>
        <h5>quiz name</h5>
      </QuizNameWrapper>
      <TextInput
        name="quizName"
        value={quizName}
        onChange={quizNameUpdate}
        placeholder="Další brutálně nucenej team building"
        dark={false}
      />
      <AnimatePresence initial={false}>
        {questions.map((item) => {
          return (
            <CustomQuestionsBox
              key={item.id}
              questionBoxID={item.id}
              questionData={item}
              firstLevelUpdate={textOnChangeUpdate}
              secondLevelUpdate={textOnChangeUpdate}
              addInput={addInput}
              removeInput={removeInput}
              removeQuestionBox={removeQuestionBox}
            />
          )
        })}
        <AddButtonWrapper>
          <Button onClick={addQuestionBox}>
            <Icon width='30px' icon='plus' />
          </Button>
        </AddButtonWrapper>
      </AnimatePresence>
      <BottomSection>
        <SaveButton onClick={saveCustomQuiz}>save</SaveButton>
      </BottomSection>
    </EditorWrapper>
  )
}
