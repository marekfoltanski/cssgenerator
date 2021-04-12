import React from 'react'
import CopyButton from '../Inputs/CopyButton'
import './GeneratorCss.scss'

class GeneratorCss extends React.Component {
  state = {
    width: "",
  }
  componentDidMount(){
    const getWidth = () => {
      this.setState({
        width: document.querySelector('.generator__preview').offsetWidth,
      })
    }
    getWidth();
  }
  render(){
    return(
      <div className="generator__css" style={{width: this.state.width}}>
        <h3>Kod CSS:</h3>
        <pre>{this.props.styles()}</pre>
        <CopyButton selector="pre" />
      </div>
    )
  }
}

export default GeneratorCss
