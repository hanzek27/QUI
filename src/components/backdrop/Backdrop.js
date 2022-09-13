import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ModalBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: blur(2px);
`

export default function Backdrop({ children, onClick }) {
  return (
    <ModalBackground
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
    >
      {children}
    </ModalBackground>
  )
}
