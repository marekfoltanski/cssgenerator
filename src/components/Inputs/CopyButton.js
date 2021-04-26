import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from './Tooltip'
import './CopyButton.scss'

class CopyButton extends React.Component {
  _isMounted = false;
  state = {
    isCopied: false,
  }
  copy = (str) => {
    let el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style = "position:{absolute; left:-9999px}";
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
  copyCSS = () => {
    const item = document.querySelector(this.props.selector);
    this.copy(item.innerHTML);
    this.setState({
      isCopied: true,
    })
    setTimeout( () => {
      this.setState({
        isCopied: false,
      })
    }, 2500);
  }
  render(){
    return(
      <>
        <button className="copyButton" type="button" onClick={this.copyCSS} aria-label="Kopiuj">
        {this.state.isCopied ? <Tooltip>Skopiowano!</Tooltip> : null}
        Kopiuj</button>
      </>
    )
  }
}

CopyButton.propTypes = {
  selector: PropTypes.string.isRequired,
}

export default CopyButton
