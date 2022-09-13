import React, { useState } from 'react'
import styled from 'styled-components'
import ContentArea from '../../components/ContentScreen'
import QuizEditor from './QuizEditor'

export default function EditorPage({children}) {
  return (
    <ContentArea>
      {children}
      <QuizEditor />
    </ContentArea>
  )
}
