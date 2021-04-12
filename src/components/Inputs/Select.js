import React from 'react'
import './Select.scss'

const Select = ({name, values, changeFn}) => (
  <select id={name} name={name} onChange={changeFn} onBlur={changeFn}>
    {
      values.map(el => (
        <option key={el} value={el}>{el}</option>
      ))
    }
  </select>
)

export default Select
