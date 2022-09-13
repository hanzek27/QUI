import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  background-color: ${props => props.dark ? '#1F1F1F' : 'unset'};
  width: 100%;
  padding: 10px;
  border: 1px solid ${props => props.dark ? '#383838' : '#E87373'};
  border-radius: 6px;
  color: white;
  &:active, &:focus {
    outline: none;
  }
`

export default function TextInput({
  name,
  id,
  value,
  onChange,
  placeholder,
  dark,
}) {

  return (
    <Input
      key={id}
      onChange={onChange}
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      dark={dark}
    />
  )
}
