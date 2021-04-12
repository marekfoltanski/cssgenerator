import React from "react"
import GeneratorWrapper from "../GeneratorWrapper"
import GeneratorInput from "../GeneratorInput"
import GeneratorPreview from "../GeneratorPreview"
import InputItem from "../../Inputs/InputItem"
import ToggleButtons from "../../Inputs/ToggleButtons"
import Input from "../../Inputs/Input"
import GeneratorCss from "../GeneratorCss"
import "./BorderRadius.scss"

class BorderRadius extends React.Component {
  state = {
    topLeft: "20",
    topRight: "20",
    bottomRight: "20",
    bottomLeft: "20",
    unitCheck: "0",
  }
  unit = () => {
    return this.state.unitCheck === "1" ? "%" : "px"
  }
  changeHandler = e => {
    let obj = {}
    obj[e.target.name] = e.target.value
    this.setState({ ...obj })
  }
  styles = () => {
    let obj = {
      borderRadius: `${this.state.topLeft}${this.unit()} ${
        this.state.topRight
      }${this.unit()} ${this.state.bottomRight}${this.unit()} ${
        this.state.bottomLeft
      }${this.unit()}`,
    }
    return obj
  }
  fullStyles = () => {
    return `border-radius: ${this.styles().borderRadius};`
  }

  render() {
    return (
      <GeneratorWrapper>
        <div className="row">
          <GeneratorInput>
            <h2>CSS border-radius</h2>
            <InputItem>
              <ToggleButtons
                first="Pixels"
                second="Percents"
                changeFn={e =>
                  this.setState({
                    unitCheck: e.target.name,
                  })
                }
                active={this.state.unitCheck ? "0" : "1"}
              />
            </InputItem>
            <InputItem>
              <label htmlFor="topLeft">Top left</label>
              <Input
                type="number"
                value={this.state.topLeft}
                name="topLeft"
                changeFn={this.changeHandler}
                min="0"
                max={`${this.state.unitCheck === "1" ? "100" : "150"}`}
              />
              <Input
                type="range"
                value={this.state.topLeft}
                name="topLeft"
                changeFn={this.changeHandler}
                min="0"
                max={`${this.state.unitCheck === "1" ? "100" : "150"}`}
              />
            </InputItem>
            <InputItem>
              <label htmlFor="topRight">Top right</label>
              <Input
                type="number"
                value={this.state.topRight}
                name="topRight"
                changeFn={this.changeHandler}
                min="0"
                max={`${this.state.unitCheck === "1" ? "100" : "150"}`}
              />
              <Input
                type="range"
                value={this.state.topRight}
                name="topRight"
                changeFn={this.changeHandler}
                min="0"
                max={`${this.state.unitCheck === "1" ? "100" : "150"}`}
              />
            </InputItem>
            <InputItem>
              <label htmlFor="bottomRight">Bottom right</label>
              <Input
                type="number"
                value={this.state.bottomRight}
                name="bottomRight"
                changeFn={this.changeHandler}
                min="0"
                max={`${this.state.unitCheck === "1" ? "100" : "150"}`}
              />
              <Input
                type="range"
                value={this.state.bottomRight}
                name="bottomRight"
                changeFn={this.changeHandler}
                min="0"
                max={`${this.state.unitCheck === "1" ? "100" : "150"}`}
              />
            </InputItem>
            <InputItem>
              <label htmlFor="bottomLeft">Bottom left</label>
              <Input
                type="number"
                value={this.state.bottomLeft}
                name="bottomLeft"
                changeFn={this.changeHandler}
                min="0"
                max={`${this.state.unitCheck === "1" ? "100" : "150"}`}
              />
              <Input
                type="range"
                value={this.state.bottomLeft}
                name="bottomLeft"
                changeFn={this.changeHandler}
                min="0"
                max={`${this.state.unitCheck === "1" ? "100" : "150"}`}
              />
            </InputItem>
          </GeneratorInput>

          <GeneratorPreview>
            <div
              className="generator__preview__borderRadius"
              style={this.styles()}
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

export default BorderRadius
