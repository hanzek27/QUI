import React from 'react'
import styled from 'styled-components'
import categories from '../../category-data/api_category.json'

const SelectWrapper = styled.select`
  width: 100%;
  height: 3.3rem;
  border-radius: 10px;
  background-color: #1f1f1f;
  border: 1px solid #383838;
  padding: 0 20px;
  color: white;
  font-size: 1rem;
  &:active,
  &:focus {
    outline: 0;
  }
`
const Option = styled.option``

export default function Select({ value, onChange }) {

  return (
    <SelectWrapper value={value} onChange={(e)=>onChange(e)} name='category'>
      <Option key='1' value='Choose category' >Choose category</Option>
      {categories.trivia_categories.map((cat) => (
        <Option key={cat.id} value={cat.id}>
          {cat.name}
        </Option>
      ))}
    </SelectWrapper>
  )
}
