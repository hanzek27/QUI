import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'


const SwitchWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  position: relative;
  background-color: #1F1F1F;
  padding: 5px 5px;
  border-radius: 8px;
  border: 1px solid #383838;
  &::before {
    content: '';
    width: ${(props) => (props.buttonwidth - 1) + 'px'};
    height: 42px;
    border-radius: 5px;
    background-color: black;
    position: absolute;
    z-index: 0;
    top: 50%;
    left: ${(props) =>
      props.active == 'easy'
        ? '16%'
        : props.active == 'medium'
        ? '50%'
        : '84%'}; // 15% 50% 85%
    transform: translate(-50%, -49%);
    transition: left 0.2s ease, width 0.2s ease;
  }
`
const Button = styled(motion.button)`
  padding: 10px 0;
  color: white;
  flex-grow: 1;
  z-index: 10;
`

export default function SwitchButtons({ value, onClick }) {
  const [underscoreSize, setUnderscoreSize] = useState(90)
  useEffect(()=>{
    function getWidth() {
      const switchButton = document.getElementById('switch-button')
      const buttonWidth = getComputedStyle(switchButton).width
      const buttonString = buttonWidth.slice(0,-2)
      const buttonNumber = parseInt(buttonString)
      return buttonNumber
    }
    setUnderscoreSize(getWidth())
  },[])

  return (
    <SwitchWrapper
      onClick={(e) => onClick(e)}
      buttonwidth={underscoreSize}
      active={value}
    >
      <Button
        onClick={(e) => setUnderscoreSize(e.target.clientWidth)}
        whileTap={{ y: '-7px' }}
        type="button"
        value="easy"
        id='switch-button'
        name='difficoulty'
      >
        easy
      </Button>
      <Button
        onClick={(e) => setUnderscoreSize(e.target.clientWidth)}
        whileTap={{ y: '-7px' }}
        type="button"
        value="medium"
        name='difficoulty'
      >
        medium
      </Button>
      <Button
        onClick={(e) => setUnderscoreSize(e.target.clientWidth)}
        whileTap={{ y: '-7px' }}
        type="button"
        value="hard"
        name='difficoulty'
      >
        hard
      </Button>
    </SwitchWrapper>
  )
}
