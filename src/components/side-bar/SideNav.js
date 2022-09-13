import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Backdrop from '../backdrop/Backdrop'

const SideBarContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 75%;
  background-color: black;
  color: white;
  z-index: 3000;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const popInOut = {
  hidden: { 
    x: '100vw',
    opacity: 1,
  },
  visible: {
    x: '15vw',
    opacity: 1,
  },
  off: {
    x: '100vw',
    opacity: 1,
  }
}

export default function SideBarNew({ children, onClick }) {
  return (
    <Backdrop onClick={onClick}>
      <SideBarContainer
        onClick={(e) => e.stopPropagation()}
        variants={popInOut}
        initial='hidden'
        animate='visible'
        exit='off'
      >
        {children}
      </SideBarContainer>
    </Backdrop>
  )
}
