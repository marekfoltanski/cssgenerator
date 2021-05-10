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
    positionX: "left",
    positionY: "top",
    repeat: "repeat",
    modal: {
      isOpen: false,
      type: "",
    },
  }
  gradinetHandler = value => {
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
  imageHandler = value => {
    this.setState({
      image: value.replace("&h=230", "&h=600"),
    })
    this.closeModal()
  }
  fullStyles = () => {
    return `background-color: ${this.state.color};
background-image: ${
      this.state.gradient.css ? this.state.gradient.css + ", " : ""
    } url(${this.state.image});
background-size: ${this.state.size};
background-position: ${this.state.positionX} ${this.state.positionY};
background-repeat: ${this.state.repeat};`
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

            <InputItem>
              <label htmlFor="gradient">Gradient:</label>
              <button
                className="copyButton"
                name="gradient"
                onClick={this.openModal}
              >
                Wybierz
              </button>
            </InputItem>

            <InputItem>
              <label htmlFor="size">Size:</label>
              <Select
                name="size"
                values={[
                  "auto",
                  "cover",
                  "contain",
                  "25%",
                  "50%",
                  "75%",
                  "100%",
                ]}
                changeFn={this.changeHandler}
              />
            </InputItem>

            <InputItem>
              <label htmlFor="positionX">Position X:</label>
              <Select
                name="positionX"
                values={[
                  "left",
                  "right",
                  "center",
                  "25%",
                  "50%",
                  "75%",
                  "100%",
                ]}
                changeFn={this.changeHandler}
              />
            </InputItem>
            <InputItem>
              <label htmlFor="positionY">Position Y:</label>
              <Select
                name="positionY"
                values={[
                  "top",
                  "bottom",
                  "center",
                  "25%",
                  "50%",
                  "75%",
                  "100%",
                ]}
                changeFn={this.changeHandler}
              />
            </InputItem>

            <InputItem>
              <label htmlFor="repeat">Repeat:</label>
              <Select
                name="repeat"
                values={["repeat", "no-repeat", "repeat-x", "repeat-y"]}
                changeFn={this.changeHandler}
              />
            </InputItem>
          </GeneratorInput>

          <GeneratorPreview>
            <div
              className={`generator__preview__background`}
              style={{
                backgroundColor: `${this.state.color}`,
                backgroundImage: `${
                  this.state.gradient.css ? this.state.gradient.css + ", " : ""
                }url(${this.state.image})`,
                backgroundSize: `${this.state.size}`,
                backgroundPosition: `${this.state.positionX} ${this.state.positionY}`,
                backgroundRepeat: `${this.state.repeat}`,
              }}
            ></div>
          </GeneratorPreview>
        </div>
        <div className="row">
          <GeneratorCss styles={this.fullStyles} />
        </div>

        {this.state.modal.isOpen && (
          <Modal closeFn={this.closeModal}>
            {this.state.modal.type === "gradient" && (
              <Gradient
                modal
                clickFn={this.gradinetHandler}
                gradient={this.state.gradient.values}
              />
            )}

            {this.state.modal.type === "image" && (
              <ImagesGenerator clickFn={this.imageHandler} />
            )}
          </Modal>
        )}
      </GeneratorWrapper>
    )
  }
}

export default Background
