import React from 'react'
import styled from 'styled-components'
import ContentArea from '../components/ContentScreen'
import { motion } from 'framer-motion'

const ButtonWrapper = styled.div`
  padding: 0 50px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
`
const PathButton = styled(motion.button)`
  width: 100%;
  border: 2px solid white;
  padding: 30px 0;
  border-radius: 10px;
  color: white;
`
const Description = styled(motion.div)`
  width: 100%;
  margin-top: 20px;
  text-align: center;
`

export default function PathSplitter({ children, directionToggle }) {
  return (
    <ContentArea>
      {children}
      <ButtonWrapper>
        <PathButton
          onClick={() => directionToggle('quickGame')}
          whileTap={{ scale: 1.1 }}
          whileHover={{ scale: 1.1 }}
        >
          Quiz game
        </PathButton>
        <Description initial={{ x: '400px' }} animate={{ x: '0' }}>
          <p>
            rychlá hra s nastavením počtu otázek, jejich kategorie a obtížnosti
          </p>
        </Description>
      </ButtonWrapper>
      <ButtonWrapper>
        <PathButton
          onClick={() => directionToggle('quizEditor')}
          whileTap={{ scale: 1.1 }}
          whileHover={{ scale: 1.1 }}
        >
          Quiz editor
        </PathButton>
        <Description initial={{ x: '-400px' }} animate={{ x: '0' }}>
          <p>
            editor pro jednoduchou a rychlou tvorbu vlastní hry kterou si můžeš
            uložit a hrát opakovaně ikdyž nevím proč bys měl chtít
          </p>
        </Description>
      </ButtonWrapper>
    </ContentArea>
  )
}
