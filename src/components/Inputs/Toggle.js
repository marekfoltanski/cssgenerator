import React from 'react'
import './Toggle.scss'

const Toggle = ({name, changeFn}) => (
  <label htmlFor={name} className="toggle">
    <input id={name} type="checkbox" name={name} onClick={changeFn}/>
    <span className="slider"></span>
  </label>
)

export default Toggle
