import React from "react"
import GeneratorWrapper from "../GeneratorWrapper"
import GeneratorInput from "../GeneratorInput"
import GeneratorPreview from "../GeneratorPreview"
import InputItem from "../../Inputs/InputItem"
import Select from "../../Inputs/Select"
import Input from "../../Inputs/Input"

import GeneratorCss from "../GeneratorCss"
import "./Transform.scss"

class Transform extends React.Component {
  state = {
    scale: "1",
    rotate: "0",
    translateX: "0",
    translateY: "0",
    skewX: "0",
    skewY: "0",
  }
  changeHandler = e => {
    let obj = {}
    obj[e.target.name] = e.target.value
    this.setState({ ...obj })
  }
  styles = () => {
    const scale = this.state.scale !== "1" ? `scale(${this.state.scale})` : ""
    const rotate =
      this.state.rotate !== "0" ? ` rotate(${this.state.rotate}deg)` : ""
    const translate =
      this.state.translateX !== "0" || this.state.translateY !== "0"
        ? ` translate(${this.state.translateX}px, ${this.state.translateY}px)`
        : ""
    const skew =
      this.state.skewX !== "0" || this.state.skewY !== "0"
        ? ` skew(${this.state.skewX}deg, ${this.state.skewY}deg)`
        : ""
    return `${scale}${rotate}${translate}${skew}`
  }
  fullStyles = () => {
    const cssStyles = this.styles() !== "" ? this.styles() : "none"
    return `-webkit-transform: ${cssStyles};
-moz-transform: ${cssStyles};
-ms-transform: ${cssStyles};
-o-transform: ${cssStyles};
transform: ${cssStyles};`
  }
  render() {
    return (
      <GeneratorWrapper>
        <div className="row transitionWrapper">
          <GeneratorInput>
            <h2>CSS transform</h2>
            <InputItem>
              <label htmlFor="scale">scale:</label>
              <Input
                type="number"
                value={this.state.scale}
                name="scale"
                min="0"
                max="2"
                step="0.1"
                changeFn={this.changeHandler}
              />
              <Input
                type="range"
                value={this.state.scale}
                name="scale"
                min="0"
                max="2"
                step="0.1"
                changeFn={this.changeHandler}
              />
            </InputItem>
            <InputItem>
              <label htmlFor="rotate">rotate:</label>
              <Input
                type="number"
                value={this.state.rotate}
                name="rotate"
                min="0"
                max="360"
                changeFn={this.changeHandler}
              />
              <Input
                type="range"
                value={this.state.rotate}
                name="rotate"
                min="0"
                max="360"
                changeFn={this.changeHandler}
              />
            </InputItem>
            <InputItem>
              <label htmlFor="translateX">translate X:</label>
              <Input
                type="number"
                value={this.state.translateX}
                name="translateX"
                min="-100"
                max="100"
                changeFn={this.changeHandler}
              />
              <Input
                type="range"
                value={this.state.translateX}
                name="translateX"
                min="-100"
                max="100"
                changeFn={this.changeHandler}
              />
            </InputItem>
            <InputItem>
              <label htmlFor="translateY">translate Y:</label>
              <Input
                type="number"
                value={this.state.translateY}
                name="translateY"
                min="-100"
                max="100"
                changeFn={this.changeHandler}
              />
              <Input
                type="range"
                value={this.state.translateY}
                name="translateY"
                min="-100"
                max="100"
                changeFn={this.changeHandler}
              />
            </InputItem>
            <InputItem>
              <label htmlFor="skewX">skew X:</label>
              <Input
                type="number"
                value={this.state.skewX}
                name="skewX"
                min="-100"
                max="100"
                changeFn={this.changeHandler}
              />
              <Input
                type="range"
                value={this.state.skewX}
                name="skewX"
                min="-100"
                max="100"
                changeFn={this.changeHandler}
              />
            </InputItem>
            <InputItem>
              <label htmlFor="skewY">skew Y:</label>
              <Input
                type="number"
                value={this.state.skewY}
                name="skewY"
                min="-100"
                max="100"
                changeFn={this.changeHandler}
              />
              <Input
                type="range"
                value={this.state.skewY}
                name="skewY"
                min="-100"
                max="100"
                changeFn={this.changeHandler}
              />
            </InputItem>
          </GeneratorInput>

          <GeneratorPreview>
            <div
              className={`generator__preview__transform ${this.state.property}`}
              style={{ transform: this.styles() }}
            ></div>
          </GeneratorPreview>
        </div>
        <div className="row">
          <GeneratorCss styles={this.fullStyles} />
        </div>
      </GeneratorWrapper>
    )
  }
}

export default Transform
