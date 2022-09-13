import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Icon from '../icons/Icon'

const Button = styled(motion.button)`
  border: none;
  width: ${(props) => props.width || '100%'};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 10px 20px;
  color: white;
  background-color: ${(props) => props.buttonbackground || 'black'};
  border-radius: 5px;
`

const Span = styled.span`
  flex-shrink: 0;
`

export default function CustomButton(props) {
  return (
    <Button
      whileHover={{ scale: 0.97 }}
      whileTap={{ scale: 0.9 }}
      width={props.width}
      buttonbackground={props.buttonBackground}
      onClick={props.onClick}
    >
      <p>{props.children}</p>
      <Span>{props.icon && <Icon icon={props.icon} width='30px' />}</Span>
    </Button>
  )
}
