import React from 'react'
import PropTypes from "prop-types"
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

Select.propTypes = {
  name: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  changeFn: PropTypes.func.isRequired,
}

export default Select
