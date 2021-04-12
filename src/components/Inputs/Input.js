import React from "react"
import PropTypes from "prop-types"
import "./Input.scss"

const Input = ({ type, name, min, max, value, changeFn, step, length }) => (
  <>
    {type === "text" ? (
      <input
        type={type}
        id={name}
        name={name}
        maxLength={length}
        value={value}
        onChange={changeFn}
      />
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        step={step}
        min={min}
        max={max}
        value={value}
        onChange={changeFn}
      />
    )}
  </>
)

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  min: PropTypes.string,
  max: PropTypes.string,
  step: PropTypes.string,
  value: PropTypes.string.isRequired,
  changeFn: PropTypes.func,
}

Input.defaultProps = {
  min: "-100",
  max: "100",
  step: "1",
  length: "20",
}
export default Input
