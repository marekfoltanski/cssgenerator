import React from "react"
import GeneratorWrapper from "../GeneratorWrapper"
import GeneratorInput from "../GeneratorInput"
import GeneratorPreview from "../GeneratorPreview"
import ImagesGenerator from "../../ImagesGenerator/ImagesGenerator"
import InputItem from "../../Inputs/InputItem"
import Select from "../../Inputs/Select"
import Input from "../../Inputs/Input"
import Modal from "../../Modal/Modal"
import Gradient from "../Gradient/Gradient"
import ColorPicker from "../../Inputs/ColorPicker"

import GeneratorCss from "../GeneratorCss"
import "./Background.scss"

class Background extends React.Component {
  state = {
    color: "rgb(251, 207, 40)",
    image: "https://img.icons8.com/android/2x/happy.png",
    size: "auto",
    gradient: "",
    modal: {
      isOpen: false,
      type: "",
    },
  }
  setImage = value => {
    this.setState({
      gradient: value,
    })
    this.closeModal()
  }
  changeHandler = e => {
    let obj = {}
    obj[e.target.name] = e.target.value
    this.setState({ ...obj })
  }
  colorChangeHandler = color => {
    this.setState({
      color: `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`,
    })
  }
  openModal = e => {
    this.setState({
      modal: {
        isOpen: true,
        type: e.target.name,
      },
    })
  }
  closeModal = e => {
    this.setState({
      modal: {
        ...this.state.modal,
        isOpen: false,
      },
    })
  }
  styles = {
    background: `${this.state.color} ${this.state.image}  ${this.state.gradient}`,
    backgroundSize: `${this.state.size}`,
  }
  fullStyles = () => {
    return ``
  }
  render() {
    return (
      <GeneratorWrapper>
        <div className="row backgroundWrapper">
          <GeneratorInput>
            <h2>CSS background</h2>
            <InputItem>
              <label htmlFor="color">Kolor:</label>
              <ColorPicker
                color={this.state.color}
                changeFn={this.colorChangeHandler}
              />
            </InputItem>

            <InputItem>
              <label htmlFor="image">Obraz:</label>
              <button
                className="copyButton"
                name="image"
                onClick={this.openModal}
              >
                Wybierz
              </button>
              <Input
                type="text"
                value={this.state.image}
                name="image"
                changeFn={this.changeHandler}
                length="500"
              />
            </InputItem>
            <button name="gradient" onClick={this.openModal}>
              gradient
            </button>
          </GeneratorInput>

          <GeneratorPreview>
            <div
              className={`generator__preview__background ${this.state.property}`}
              style={{
                background: `${
                  this.state.gradient.css ? this.state.gradient.css + ", " : ""
                }url(${this.state.image}) ${this.state.color}`,
              }}
            ></div>
            {console.log(this.state.gradient.css)}
          </GeneratorPreview>
        </div>
        <div className="row">
          <GeneratorCss styles={this.fullStyles} />
        </div>

        {this.state.modal.isOpen && (
          <Modal closeFn={this.closeModal}>
            {this.state.modal.type == "gradient" && (
              <Gradient
                modal
                clickFn={this.setImage}
                gradient={this.state.gradient.values}
              />
            )}

            {this.state.modal.type == "image" && <ImagesGenerator />}
          </Modal>
        )}
      </GeneratorWrapper>
    )
  }
}

export default Background
