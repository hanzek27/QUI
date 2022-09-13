import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Icon from '../../icons/Icon'

const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

const Answer = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${({answer}) => answer.status === 'unanswered' ? 'white' 
    : answer.questionIs ? '#FFEBC2' : '#E64C4C'};
  text-align: left;
`

export default function AnswerButton({onClickHandler, children, questionID, answer}) {
  return (
    <Answer
      onClick={onClickHandler}
      name={questionID}
      id={answer.id}
      value={answer.questionIs}
      whileHover={{ scale: 1.05 }}    
      animate={ answer.status === 'unanswered' ? { x: '0' } : answer.questionIs ? { x: '50px' } : { x: '-5px' }}
      answer={answer}
    >
      <Icon icon={answer.status === 'unanswered' ? 'go' : answer.questionIs ? 'correct' : 'incorrect'} width="30px" />
      <h4>{renderHTML(children.toString())}</h4>
    </Answer>
  )
}
