import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import Backdrop from '../../backdrop/Backdrop'

const ModalContainer = styled(motion.div)`
  background-color: black;
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 115px;
  height: 400px;
  border-radius: 10px;
  z-index: 2000;
  &::after {
    content: '';
    background-color: black;
    position: absolute;
    z-index: -1;
    width: 30px;
    height: 30px;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
  }
`
const dropIn = {
  hidden: {
    y: '100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    }
  }
}

export default function Modal({children, onClick}) {
  return (
    <Backdrop onClick={onClick}>
      <ModalContainer
        onClick={(e)=> e.stopPropagation()}
        variants={dropIn}
        initial='hidden'
        animate='visible'
      >
        {children}
      </ModalContainer>
    </Backdrop>
  )
}