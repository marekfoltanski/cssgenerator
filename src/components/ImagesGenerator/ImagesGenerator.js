import React from "react"
import "./ImagesGenerator.scss"

const images = [
  "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&h=230",
  "https://images.pexels.com/photos/135018/pexels-photo-135018.jpeg?auto=compress&cs=tinysrgb&h=230",
  "https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&h=230",
  "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&h=230",
  "https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg?auto=compress&cs=tinysrgb&h=230",
  "https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&h=230",
  "https://images.pexels.com/photos/950902/pexels-photo-950902.jpeg?auto=compress&cs=tinysrgb&h=230",
  "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&h=230",
  "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&h=230",
]

class ImagesGenerator extends React.Component {
  state = {
    url: "",
  }

  changeHandler = e => {
    this.setState({
      url: e.target.dataset.url,
    })

    e.target.classList.add("active")
  }

  render() {
    return (
      <div className="imagesGenerator">
        {images.map((item, index) => (
          <div
            key={index}
            data-url={item}
            className={`${
              this.state.url === item ? "active" : ""
            } imagesGenerator__item`}
            style={{ backgroundImage: `url(${item})` }}
            onClick={this.changeHandler}
          ></div>
        ))}
      </div>
    )
  }
}

export default ImagesGenerator
