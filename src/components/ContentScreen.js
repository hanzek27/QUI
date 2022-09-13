import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"

const ContentMenuScreen = styled(motion.div)`
  width: 100%;
  height: 100%;
  height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
`
const ContentScreen = styled(motion.div)`
  margin-top: 80px;
  height: 100%;
  height: -webkit-fill-available;
  padding: 30px 30px 0;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  background-color: ${props => props.backgroundcolor || 'unset'}
`

export default function ContentArea(props) {

  return (
    <ContentMenuScreen
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{type: 'spring',  duration: .4}}
    >
      <ContentScreen 
      backgroundcolor={props.backgroundColor} 
      >
        {props.children}
      </ContentScreen>
    </ContentMenuScreen>
  )
}