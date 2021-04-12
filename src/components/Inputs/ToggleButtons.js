import React from "react"
import PropTypes from "prop-types"
import "./ToggleButtons.scss"

class ToggleButtons extends React.Component {
  state = {
    active: this.props.active,
  }
  buttonFn = e => {
    this.setState({
      active: e.target.name,
    })
    this.props.changeFn(e)
  }
  render() {
    return (
      <div className="toggleButtons">
        <button
          type="button"
          name="0"
          className={this.state.active === "0" ? "active" : null}
          onClick={this.buttonFn}
        >
          {this.props.first}
        </button>
        <button
          type="button"
          name="1"
          className={this.state.active === "1" ? "active" : null}
          onClick={this.buttonFn}
        >
          {this.props.second}
        </button>
      </div>
    )
  }
}
ToggleButtons.propTypes = {
  active: PropTypes.string,
}

ToggleButtons.defaultProps = {
  active: "0",
}

export default ToggleButtons
