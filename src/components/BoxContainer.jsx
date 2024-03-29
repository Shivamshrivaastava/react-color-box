import  { Component } from "react";
import "./BoxContainer.css";
import Box from "./Box";
import { rgbValue, generateColors } from "./helper";

class BoxContainer extends Component {
  static defaultProps = {
    num: 18
  };
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/prop-types
      colors: generateColors(this.props.num)
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(c) {
    let newColor;
    do {
      newColor = `rgb(
        ${rgbValue()},
        ${rgbValue()},
        ${rgbValue()}
      )`;
     
    } while (newColor === c);

  
    this.setState((st) => ({
      colors: st.colors.map((color) => {
        if (color!== c) return color;
        return newColor;
      })
    }));
  }

  render() {
    return (
      <div className="BoxContainer" key="box-container">
      {this.state.colors.map((color) => {
        // index is being used here, so we don't need to remove the line of code
        return (
          <Box
            key={color}
            color={color}
            changeColor={this.changeColor}
          />
        );
      })}
      </div>
    );
  }
}

export default BoxContainer;