import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const SwitchWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  position: relative;
  &::after {
    content: '';
    width: ${(props) => (props.buttonwidth - 40) + 'px'};
    height: 2px;
    background-color: #008060;
    position: absolute;
    bottom: 0;
    left: ${(props) =>
      props.active == 'easy'
        ? '15%'
        : props.active == 'medium'
        ? '50%'
        : '85%'}; // 15% 50% 85%
    transform: translateX(-50%);
    transition: left 0.2s ease, width 0.2s ease;
  }
`
const Button = styled(motion.button)`
  padding: 10px 0;
  color: white;
  flex-grow: 1;
`

export default function SwitchButtons({ value, onClick }) {
  const [underscoreSize, setUnderscoreSize] = useState(90)

  return (
    <SwitchWrapper
      onClick={(e) => onClick(e.target.value)}
      buttonwidth={underscoreSize}
      active={value}
    >
      <Button
        onClick={(e) => setUnderscoreSize(e.target.clientWidth)}
        whileTap={{ y: '-7px' }}
        type="button"
        value="easy"
      >
        easy
      </Button>
      <Button
        onClick={(e) => setUnderscoreSize(e.target.clientWidth)}
        whileTap={{ y: '-7px' }}
        type="button"
        value="medium"
      >
        medium
      </Button>
      <Button
        onClick={(e) => setUnderscoreSize(e.target.clientWidth)}
        whileTap={{ y: '-7px' }}
        type="button"
        value="hard"
      >
        hard
      </Button>
    </SwitchWrapper>
  )
}
