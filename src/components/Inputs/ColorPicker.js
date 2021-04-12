import React from 'react'
import PropTypes from "prop-types"
import { ChromePicker } from 'react-color'
import './ColorPicker.scss'

class ColorPicker extends React.Component {
  state = {
    displayColorPicker: false,
  }
  handleClose = () => (
    this.setState({
      displayColorPicker: false,
      colorIndex : "",
    })
  )
  displayPicker = (e) => {
    this.setState({displayColorPicker: !this.state.displayColorPicker});
    if(this.props.changeFn2 !== null){
      this.props.changeFn2(e);
    }
  }
  render(){
    return(
      <>
      <button
       className="colorPicker__btn"
       onClick={this.displayPicker}
       style={{backgroundColor: this.props.color}}
       aria-label="color picker"
       name={this.props.name}
       >
      </button>
      {this.state.displayColorPicker ?
        <>
        <div
          tabIndex="0"
          role="button"
          className="pickerClose"
          onClick={this.handleClose} onKeyDown={this.handleClose}>
        </div>
        <ChromePicker color={ this.props.color } onChange={ this.props.changeFn }/>
        </>
        :
        null
      }
      </>
    )
  }
}

ColorPicker.propTypes = {
  color: PropTypes.string,
  changeFn: PropTypes.func.isRequired,
  name: PropTypes.string,
  changeFn2: PropTypes.func,
}
ColorPicker.defaultProps = {
  color: "rgba(66, 68, 90, 1)",
  name: null,
  changeFn2: null,
}

export default ColorPicker
