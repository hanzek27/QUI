import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"

const Summary = styled(motion.div)`
  position: absolute;
  padding: 20px;
  display: flex;
  overflow: visible;
  overflow-y: scroll;
  border-radius: 10px;
  justify-content: ${props => props.$gamefinished ? 'none' : 'space-between'};
  top: 0;
  left: -10px;
  right: -10px;
  background-color: black;
  z-index: 100;
`

export default function BoxSimplemodal({onClick, children, gameEnd}) {
  return (
    <Summary
      onClick={onClick}
      $gamefinished={gameEnd}
      animate={ gameEnd ? { height: '100%', flexDirection: 'column' } : { height: 'auto' }}
    >
      {children}
    </Summary>
  )
}
