import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import Icon from '../../icons/Icon'
import QuizSetUp from '../../components/modal/QuizSetUp'

const IntroWrapper = styled.div`
  width: 100%;
`

const IconWrapper = styled.div`
  padding: 10px;
  margin-top: auto;
  justify-content: center;
  display: flex;
  justify-content: center;
`
const HeadlineWrapper = styled(motion.div)`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 25px;
`
const CustomGamesWrapper = styled(motion.div)`
  width: 100%;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const CustomeGame = styled(motion.div)`
  position: relative;
  background-color: black;
  padding: 20px 55px;
  border-radius: 50px;
  width: 100%;
`
const PlayButton = styled(motion.button)`
  border-radius: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 16px;
`
const DeleteButton = styled(motion.button)`
  background-color: red;
  padding: 10px;
  border-bottom-right-radius: 50%;
  border-top-right-radius: 50%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
`
const EditButton = styled(motion.button)`
  background-color: green;
  padding: 10px;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 65px;
`

export default function IntroPage({getCustomQuiz, modal, setModal, getQuizData}) {

  const [quizList, setQuizList] = useState(()=>{
    const storage = {...localStorage}
    const keys = Object.keys(storage)
    const customQuiezes = keys.map(key => {
      const customQuiz = JSON.parse(localStorage.getItem(key))
      return customQuiz
    })
    return customQuiezes
  })

  function textBreak(headline) {
    if (headline.length > 20) {
      const shortened = headline.slice(0, 19)
      return `${shortened}...`
    } else {
      return headline
    }
  }

  function deleteCustomQuiz(e, id) {
    e.stopPropagation()
    setQuizList(prevData => prevData.filter( item => item.id !== id))
    localStorage.removeItem(id)
  }

  return (
    <>
        <HeadlineWrapper exit={{ opacity: 0 }} >
          <h1>Quiz Game</h1>
          <p>Pick your own custom game or play a quick game or go to hell</p> 
        </HeadlineWrapper>
        <CustomGamesWrapper>
          {quizList.map(quiz => {
            return (
              <CustomeGame 
                key={quiz.id}
                name='playButton'
                onClick={(e)=>getCustomQuiz(e, quiz.id)}
              >
                <h5>{textBreak(quiz.nameOfTheQuiz)}</h5>
                <PlayButton>
                  <Icon width='22px' icon='play' color='white' />
                </PlayButton>
                <EditButton name='editButton' onClick={(e)=>getCustomQuiz(e, quiz.id)}>
                  <Icon width='22px' icon='settings' color='white' />
                </EditButton>
                <DeleteButton name='deleteButton' onClick={(e)=>deleteCustomQuiz(e, quiz.id)}>
                  <Icon width='22px' icon='incorrect' color='white' />
                </DeleteButton>
              </CustomeGame>
            )
          })}
        </CustomGamesWrapper>
        <IconWrapper>
          <button onClick={() => setModal((prev) => !prev)}>
            <Icon icon="settings" width="40px" />
          </button>
        </IconWrapper>
        {modal && (
        <QuizSetUp
          onClick={setModal}
          getQuizData={getQuizData}
        />
      )}
    </>
  )
}
