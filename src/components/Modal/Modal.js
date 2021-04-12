import React from "react"
import PropTypes from "prop-types"
import "./Modal.scss"

class Modal extends React.Component {
  state = {
    value: "aaa",
  }
  render() {
    return (
      <>
        <div className="modal__bg" onClick={this.props.closeFn}></div>
        <div className="modal__wrapper">
          <div className="modal__wrapper__header">
            <span className="modal__title">{this.props.title}</span>
            <button
              className="modal__close"
              onClick={this.props.closeFn}
            ></button>
          </div>
          <div className="modal__content">{this.props.children}</div>
        </div>
      </>
    )
  }
}

Modal.propTypes = {
  title: PropTypes.string,
  closeFn: PropTypes.func.isRequired,
}

Modal.defaultProps = {
  title: "Tytuł modala",
}

export default Modal
