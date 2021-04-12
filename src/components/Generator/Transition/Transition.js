import React from "react"
import GeneratorWrapper from "../GeneratorWrapper"
import GeneratorInput from "../GeneratorInput"
import GeneratorPreview from "../GeneratorPreview"
import InputItem from "../../Inputs/InputItem"
import Select from "../../Inputs/Select"
import Input from "../../Inputs/Input"

import GeneratorCss from "../GeneratorCss"
import "./Transition.scss"

class Transition extends React.Component {
  state = {
    property: "all",
    duration: "0.5",
    function: "linear",
  }
  changeHandler = e => {
    let obj = {}
    obj[e.target.name] = e.target.value
    this.setState({ ...obj })
  }
  styles = () => {
    return `${this.state.property} ${this.state.duration}s ${this.state.function}`;
  }
  fullStyles = () => {
    const cssStyles = this.styles();
    return(
      `-webkit-transition: ${cssStyles};
-moz-transition: ${cssStyles};
-ms-transition: ${cssStyles};
-o-transition: ${cssStyles};
transition: ${cssStyles};`
    )
  }
  render() {
    console.log(this.fullStyles());
    return (
      <GeneratorWrapper>
        <div className="row transitionWrapper">
          <GeneratorInput>
            <h2>CSS transition</h2>
            <InputItem>
              <label htmlFor="property">property:</label>
              <Select
                name="property"
                values={[
                  "all",
                  "background",
                  "color",
                  "width",
                  "opacity",
                  "box-shadow",
                  "transform",
                  "border-radius",
                ]}
                changeFn={this.changeHandler}
              />
            </InputItem>
            <InputItem>
              <label htmlFor="duration">duration (s):</label>
              <Input
                type="number"
                value={this.state.duration}
                name="duration"
                changeFn={this.changeHandler}
                min="0"
                max="5"
                step="0.1"
              />
              <Input
                type="range"
                value={this.state.duration}
                name="duration"
                changeFn={this.changeHandler}
                min="0"
                max="5"
                step="0.1"
              />
            </InputItem>
            <InputItem>
              <label htmlFor="function">property:</label>
              <Select
                name="function"
                values={[
                  "linear",
                  "ease",
                  "ease-in",
                  "ease-out",
                  "ease-in-out",
                ]}
                changeFn={this.changeHandler}
              />
            </InputItem>
          </GeneratorInput>

          <GeneratorPreview>
            <div className={`generator__preview__transition ${this.state.property}`} style={{transition: this.styles()}}><span>Hover</span></div>
          </GeneratorPreview>
        </div>
        <div className="row">
        <GeneratorCss styles={this.fullStyles} />
        </div>
      </GeneratorWrapper>
    )
  }
}

export default Transition
