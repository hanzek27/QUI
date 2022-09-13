import React from 'react'
import styled from 'styled-components'
import CustomButton from '../components/CustomButton'
import ContentArea from '../components/ContentScreen'


const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MainHeadline = styled(Div)`
  justify-content: center;
  flex-grow: 2;
`

const Message = styled(Div)`
  justify-content: center;
  flex-grow: 1;
  padding: 0 40px;
  text-align: center;
`

const ButtonPart = styled(Div)`
  justify-content: flex-end;
  flex-grow: 1;
  padding: 0 40px 40px;
`

export default function HomePage({directionToggle, children}) {

  const [modal, setModal] = React.useState(true)
  function modalToggle() {
    setModal(prev => !prev)
  }

  return (
    <>
      {children}
      <ContentArea>
        <MainHeadline>
          <h1>QUI</h1>
        </MainHeadline>
        <Message>
          <h2>Veřejné ponížení pro celou rodinu</h2>
        </Message>
        <ButtonPart>
          <CustomButton onClick={()=>directionToggle('pathSplitter')}>this is button</CustomButton>
        </ButtonPart>
      </ContentArea>
    </>
  )
}
