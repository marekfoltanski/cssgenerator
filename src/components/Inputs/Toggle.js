import React from 'react'
import PropTypes from "prop-types"
import './Toggle.scss'

const Toggle = ({name, changeFn}) => (
  <label htmlFor={name} className="toggle">
    <input id={name} type="checkbox" name={name} onClick={changeFn}/>
    <span className="slider"></span>
  </label>
)

Toggle.propTypes = {
  name: PropTypes.string.isRequired,
  changeFn: PropTypes.func.isRequired,
}

export default Toggle
