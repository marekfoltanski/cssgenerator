import React from 'react'
import GeneratorWrapper from '../GeneratorWrapper'
import GeneratorInput from '../GeneratorInput'
import GeneratorPreview from '../GeneratorPreview'
import InputItem from '../../Inputs/InputItem'
import Input from '../../Inputs/Input'
import Toggle from '../../Inputs/Toggle'
import ColorPicker from '../../Inputs/ColorPicker'
import GeneratorCss from '../GeneratorCss'

import './BoxShadow.scss'

class BoxShadow extends React.Component {
  state = {
    horizontal: "8",
    vertical: "8",
    blur: "24",
    spread: "0",
    color: "rgba(66, 68, 90, 1)",
    inset: "",
    displayColorPicker: false,
    toggleOn: false,
  }
  changeHandler = (e) => {
    let obj = {};
    obj[e.target.name] = e.target.value;
    this.setState({...obj})
  };
  handleChange = (color) => {
    this.setState({
      color: `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`,
    });
  };
  handleToggle = () => {
    this.state.inset === "" ? this.setState({inset: "inset "}) : this.setState({inset: ""})
  };
  fullStyles = () => {
  const cssStyles = `${this.state.inset}${this.state.horizontal}px ${this.state.vertical}px ${this.state.blur}px ${this.state.spread}px ${this.state.color};`
  return(
    `-webkit-box-shadow: ${cssStyles}
-moz-box-shadow: ${cssStyles}
box-shadow: ${cssStyles}`
  )
}
  render() {
    let styles = {
      boxShadow: this.state.inset + this.state.horizontal + "px " + this.state.vertical + "px " + this.state.blur + "px " + this.state.spread + "px " + this.state.color
    };
    return(
        <GeneratorWrapper>
          <div className="row">
            <GeneratorInput>
              <h2>CSS box-shadow</h2>
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
                <label htmlFor="spread">Spread</label>
                <Input type="number" value={this.state.spread} name="spread" changeFn = {this.changeHandler} />
                <Input type="range" value={this.state.spread} name="spread" changeFn = {this.changeHandler} />
              </InputItem>
              <InputItem>
                Kolor:
                <ColorPicker color={this.state.color} changeFn={this.handleChange} />
              </InputItem>
              <InputItem>
                Inset:
                <Toggle name="inset" changeFn={this.handleToggle}/>
              </InputItem>

            </GeneratorInput>

            <GeneratorPreview>
              <div className="generator__preview__boxShadow" style={styles}></div>

            </GeneratorPreview>
          </div>
          <div className="row">
            <GeneratorCss styles={this.fullStyles} />
          </div>
        </GeneratorWrapper>
    )
  }
}

export default BoxShadow
