import React from 'react'
import GeneratorWrapper from '../GeneratorWrapper'
import GeneratorInput from '../GeneratorInput'
import GeneratorPreview from '../GeneratorPreview'
import InputItem from '../../Inputs/InputItem'
import Input from '../../Inputs/Input'
import ColorPicker from '../../Inputs/ColorPicker'
import GeneratorCss from '../GeneratorCss'

import './TextShadow.scss'

class TextShadow extends React.Component {
  state = {
    horizontal: "4",
    vertical: "4",
    blur: "6",
    color: "rgba(66, 68, 90, 1)",
    text: "Text shadow",
    displayColorPicker: false,
  }
  changeHandler = (e) => {
    let obj = {};
    obj[e.target.name] = e.target.value;
    this.setState({...obj})
  };
  colorChangeHandler = (color) => {
    this.setState({
      color: `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`,
    });
  };
  fullStyles = () => {
  const cssStyles = `${this.state.horizontal}px ${this.state.vertical}px ${this.state.blur}px ${this.state.color};`
  return(
    `text-shadow: ${cssStyles}`
  )
}
  render() {
    let styles = {
      textShadow: `${this.state.horizontal}px ${this.state.vertical}px ${this.state.blur}px ${this.state.color}`,
    };
    return(
        <GeneratorWrapper>
          <div className="row">
            <GeneratorInput>
              <h2>CSS text-shadow</h2>
              <InputItem>
                <label htmlFor="text">Tekst</label>
                <Input type="text" value={this.state.text} name="text" changeFn = {this.changeHandler} />
              </InputItem>

              <InputItem>
                <label htmlFor="horizontal">Horizontal</label>
                <Input type="number" value={this.state.horizontal} name="horizontal" changeFn = {this.changeHandler} />
                <Input type="range" value={this.state.horizontal} name="horizontal" changeFn = {this.changeHandler} />
              </InputItem>

              <InputItem>
                <label htmlFor="vertical">Vertical</label>
                <Input type="number" value={this.state.vertical} name="vertical" changeFn = {this.changeHandler} />
                <Input type="range" value={this.state.vertical} name="vertical" changeFn = {this.changeHandler} />
              </InputItem>

              <InputItem>
                <label htmlFor="blur">Blur</label>
                <Input type="number" min="0" value={this.state.blur} name="blur" changeFn = {this.changeHandler} />
                <Input type="range" min="0" value={this.state.blur} name="blur" changeFn = {this.changeHandler} />
              </InputItem>

              <InputItem>
                Kolor:
                <ColorPicker color={this.state.color} changeFn={this.colorChangeHandler} />
              </InputItem>

            </GeneratorInput>

            <GeneratorPreview>
                <span className="textShadow__preview" style={styles}>{this.state.text}</span>
            </GeneratorPreview>
          </div>
          <div className="row">
            <GeneratorCss styles={this.fullStyles} />
          </div>
        </GeneratorWrapper>
    )
  }
}

export default TextShadow
