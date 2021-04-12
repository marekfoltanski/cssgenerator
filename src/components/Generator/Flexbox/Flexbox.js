import React from "react"
import GeneratorWrapper from "../GeneratorWrapper"
import GeneratorPreview from "../GeneratorPreview"
import GeneratorInput from "../GeneratorInput"
import InputItem from "../../Inputs/InputItem"
import Select from "../../Inputs/Select"
import GeneratorCss from "../GeneratorCss"
import "./Flexbox.scss"

class Flexbox extends React.Component {
  state = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    alignContent: "flex-start",
    boxes: [1, 2, 3],
    activeButton: true,
  }
  changeHandler = e => {
    let obj = {}
    obj[e.target.name] = e.target.value
    this.setState({ ...obj })
  }
  addItem = () => {
    let count = this.state.boxes.length + 1
    count < 10 && this.setState({ boxes: [...this.state.boxes, ++count] })
  }
  removeItem = () => {
    let count = this.state.boxes.length + 1
    let filteredArray = this.state.boxes.filter(item => item !== count)
    this.setState({
      boxes: filteredArray,
    })
  }
  fullStyles = () => {
    return `display: ${this.state.display};
flex-direction: ${this.state.flexDirection};
flex-wrap: ${this.state.flexWrap};
justify-content: ${this.state.justifyContent};
align-items: ${this.state.alignItems};
align-content: ${this.state.alignContent};`
  }
  render() {
    let styles = {
      display: this.state.display,
      flexDirection: this.state.flexDirection,
      flexWrap: this.state.flexWrap,
      justifyContent: this.state.justifyContent,
      alignItems: this.state.alignItems,
      alignContent: this.state.alignContent,
    }
    return (
      <GeneratorWrapper>
        <div className="row">
          <GeneratorInput>
            <h2>CSS flexbox</h2>
            <InputItem>
              <label htmlFor="display">display:</label>
              <Select
                name="display"
                values={["flex", "inline-flex"]}
                changeFn={this.changeHandler}
              />
            </InputItem>

            <InputItem>
              <label htmlFor="flexDirection">flex-direction:</label>
              <Select
                name="flexDirection"
                values={["row", "column", "row-reverse", "column-reverse"]}
                changeFn={this.changeHandler}
              />
            </InputItem>

            <InputItem>
              <label htmlFor="flexWrap">flex-wrap:</label>
              <Select
                name="flexWrap"
                values={["wrap", "nowrap", "wrap-reverse"]}
                changeFn={this.changeHandler}
              />
            </InputItem>

            <InputItem>
              <label htmlFor="justifyContent">justify-content:</label>
              <Select
                name="justifyContent"
                values={[
                  "flex-start",
                  "flex-end",
                  "center",
                  "space-between",
                  "space-around",
                ]}
                changeFn={this.changeHandler}
              />
            </InputItem>

            <InputItem>
              <label htmlFor="alignItems">align-items:</label>
              <Select
                name="alignItems"
                values={[
                  "flex-start",
                  "flex-end",
                  "center",
                  "baseline",
                  "stretch",
                ]}
                changeFn={this.changeHandler}
              />
            </InputItem>

            <InputItem>
              <label htmlFor="alignContent">align-content:</label>
              <Select
                name="alignContent"
                values={[
                  "flex-start",
                  "flex-end",
                  "center",
                  "space-between",
                  "space-around",
                  "stretch",
                ]}
                changeFn={this.changeHandler}
              />
            </InputItem>

            <InputItem>
              <div className="btnWrapper">
                <button
                  type="button"
                  className="btnSmall"
                  data-active={
                    this.state.boxes.length >= 9 ? "noactive" : "active"
                  }
                  onClick={this.addItem}
                >
                  + Dodaj
                </button>
                <button
                  type="button"
                  className="btnSmall"
                  data-active={
                    this.state.boxes.length <= 3 ? "noactive" : "active"
                  }
                  onClick={this.removeItem}
                >
                  - Usuń
                </button>
              </div>
            </InputItem>
          </GeneratorInput>

          <GeneratorPreview>
            <div className="flexboxPreview">
              <div className="flexboxPreview__wrapper" style={styles}>
                {this.state.boxes.map(item => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
          </GeneratorPreview>
        </div>
        <div className="row">
          <GeneratorCss styles={this.fullStyles} />
        </div>
      </GeneratorWrapper>
    )
  }
}

export default Flexbox
