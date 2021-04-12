import React from "react"
import PropTypes from "prop-types"
import GeneratorWrapper from "../GeneratorWrapper"
import GeneratorInput from "../GeneratorInput"
import GeneratorPreview from "../GeneratorPreview"
import InputItem from "../../Inputs/InputItem"
import Input from "../../Inputs/Input"
import ToggleButtons from "../../Inputs/ToggleButtons"
import ColorPicker from "../../Inputs/ColorPicker"
import GeneratorCss from "../GeneratorCss"
import "./Gradient.scss"

class Gradient extends React.Component {
  state = {
    ...this.props.gradient,
  }

  stringCss = () => {
    let css = ""
    this.state.colors.forEach(item => {
      css += `, ${item.color} ${item.value}%`
    })
    let styles = `background-color: ${
      this.state.colors[0].color
    };\nbackground-image: ${this.state.linearRadial}(${
      this.state.linearRadial === "linear-gradient"
        ? this.state.angle
        : "circle"
    }${css});`
    return styles
  }

  setStyles = () => {
    let css = ""
    this.state.colors.forEach(item => {
      css += `, ${item.color} ${item.value}%`
    })
    let styles = {
      backgroundImage: `${this.state.linearRadial}(${
        this.state.linearRadial === "linear-gradient"
          ? this.state.angle
          : "circle"
      }${css})`,
    }
    return styles
  }

  updateArray = e => {
    let newArray = [...this.state.colors]
    let index = Number(e.target.name)

    newArray[index].value = e.target.value
    this.setState({
      colors: [...newArray],
    })
  }
  getIndex = e => {
    this.setState({
      colorIndex: e.target.name,
    })
  }
  changeColor = (color, e) => {
    let newArray = [...this.state.colors]
    let index = this.state.colorIndex
    newArray[
      index
    ].color = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`
    this.setState({
      colors: [...newArray],
    })
  }

  addItem = () => {
    if (this.state.colors.length < 6) {
      let newArray = [...this.state.colors]
      let index = this.state.colors.length
      let newItem = {
        index: index.toString(),
        color: this.state.colors[0].color,
        value: "100",
      }
      let newValue = Math.round(100 / this.state.colors.length)
      let valueCheck = 0
      newArray.forEach((item, i) => {
        item.value = valueCheck.toString()
        valueCheck += newValue
      })
      this.setState({
        colors: [...this.state.colors, newItem],
      })
    }
  }

  removeItem = () => {
    if (this.state.colors.length > 2) {
      let newArray = [...this.state.colors]
      newArray.pop()
      this.setState({
        colors: [...newArray],
      })
    }
  }
  linearRadial = e => {
    e.target.name === "0"
      ? this.setState({ linearRadial: "linear-gradient" })
      : this.setState({ linearRadial: "radial-gradient" })
  }
  angleFn = e => {
    this.setState({
      angle: e.target.value + "deg",
    })
    e.target.value > 360 && this.setState({ angle: "360deg" })
    e.target.value < 0 && this.setState({ angle: "0deg" })
  }
  render() {
    return (
      <GeneratorWrapper additionalClass="gradient">
        <div className="row gradientWrapper">
          <GeneratorInput>
            <h2>CSS gradient</h2>
            <InputItem>
              <ToggleButtons
                first="Linear"
                second="Radial"
                changeFn={this.linearRadial}
                active={
                  this.state.linearRadial == "linear-gradient" ? "0" : "1"
                }
              />
            </InputItem>
            {this.state.linearRadial === "linear-gradient" ? (
              <InputItem>
                <label htmlFor="angle">Kąt:</label>
                <Input
                  type="number"
                  name="angle"
                  min="0"
                  max="360"
                  value={this.state.angle.replace("deg", "")}
                  changeFn={this.angleFn}
                />
                <Input
                  type="range"
                  name="angle"
                  min="0"
                  max="360"
                  value={this.state.angle.replace("deg", "")}
                  changeFn={this.angleFn}
                />
              </InputItem>
            ) : null}
            {this.state.colors.map(item => (
              <InputItem key={item.index}>
                <label htmlFor={item.index}>
                  Kolor {Number(item.index) + 1}:
                </label>
                <Input
                  type="number"
                  name={item.index}
                  id={item.index}
                  value={item.value}
                  min="0"
                  max="100"
                  changeFn={this.updateArray}
                />
                <ColorPicker
                  color={item.color}
                  changeFn={this.changeColor}
                  changeFn2={this.getIndex}
                  name={item.index}
                />
                <Input
                  type="range"
                  name={item.index}
                  id={item.index}
                  value={item.value}
                  min="0"
                  max="100"
                  changeFn={this.updateArray}
                />
              </InputItem>
            ))}
            <InputItem>
              <div className="btnWrapper">
                <button
                  type="button"
                  className="btnSmall"
                  data-active={
                    this.state.colors.length >= 6 ? "noactive" : "active"
                  }
                  onClick={this.addItem}
                >
                  + Dodaj
                </button>
                <button
                  type="button"
                  className="btnSmall"
                  data-active={
                    this.state.colors.length <= 2 ? "noactive" : "active"
                  }
                  onClick={this.removeItem}
                >
                  - Usuń
                </button>
              </div>
            </InputItem>
          </GeneratorInput>

          <GeneratorPreview>
            <div className="generator__preview__gradtient">
              <div
                className="generator__preview__gradtient__inside"
                style={this.setStyles()}
              ></div>
            </div>
          </GeneratorPreview>
        </div>
        {!this.props.modal ? (
          <div className="row">
            <GeneratorCss styles={this.stringCss} />
          </div>
        ) : (
          <button
            onClick={() => {
              this.props.clickFn({
                css: this.setStyles().backgroundImage,
                values: this.state,
              })
            }}
          >
            Klik
          </button>
        )}
      </GeneratorWrapper>
    )
  }
}

Gradient.propTypes = {
  gradient: PropTypes.object,
}

Gradient.defaultProps = {
  gradient: {
    colors: [
      {
        index: "0",
        color: "rgba(89, 131, 252, 1)",
        value: "0",
      },
      {
        index: "1",
        color: "rgba(41, 53, 86, 1)",
        value: "100",
      },
    ],
    colorIndex: "",
    linearRadial: "linear-gradient",
    angle: "90deg",
  },
}

export default Gradient
