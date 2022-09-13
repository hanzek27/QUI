import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import ContentArea from '../../components/ContentScreen'
import QuizSetUp from '../../components/modal/QuizSetUp'
import Icon from '../../icons/Icon'
import IntroPage from './IntroPage'
import QuizzPage from './quiz-page/QuizzPage'
import fetchQuiz from '../../components/data/FetchQuiz'
import QuizEditor from '../quiz-editor/QuizEditor'

export default function QuickGame({ children }) {
  const [modal, setModal] = useState(false)
  const [quizData, setQuizData] = useState(null)
  const [editData, setEditData] = useState(null)

  function getQuizData(quizOptions) {
    fetchQuiz(quizOptions, (response) => setQuizData(response))
    setModal(false)
  }

  function getCustomQuiz(event, quizID) {
    event.stopPropagation()
    const buttonName = event.currentTarget.getAttribute('name')
    const getQuiz = JSON.parse(localStorage.getItem(quizID))
    if (buttonName === 'editButton') setEditData(getQuiz)
    if (buttonName === 'playButton') setQuizData(getQuiz.quizQuestions)
  }

  return (
    <ContentArea>
      {children}
      {quizData ? (
        <QuizzPage dataForQuiz={quizData} />
      ) : editData ? (
        <QuizEditor editData={editData} />
      ) : (
        <IntroPage
          getCustomQuiz={getCustomQuiz}
          modal={modal}
          setModal={() => setModal((prev) => !prev)}
          getQuizData={getQuizData}
        />
      )}
    </ContentArea>
  )
}
