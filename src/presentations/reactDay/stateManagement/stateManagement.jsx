// Import React
import React, { Component } from "react";

// Import Spectacle Core tags
import { Deck, Slide } from "spectacle";
// Import theme fro the Deck
import { theme } from "../common/themes/darkTheme.js";
import './stateManagement.css';
// All slides
const slidesImports = [
  import("./slides/1"),
  import("./slides/2"),
  import("./slides/3"),
  import("./slides/4"),
  import("./slides/5"),
  import("./slides/6"),
  import("./slides/7"),
  import("./slides/8"),
  import("./slides/9")
];

export default class Presentation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: Array(slidesImports.length).fill(<Slide key="loading" />)
    }
  }

  componentDidMount() {
    const importedSlides = [];
    Promise.all(slidesImports).then((slidesImportsResolved) => {
      slidesImportsResolved.forEach((slide) => {
        importedSlides.push(slide.default);
      });
      this.setState({ slides: importedSlides });
    });
  }

  render() {
    const { slides } = this.state;
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        {
          slides.map((slide, index) => {
            return React.cloneElement(slide, {key: index});
          })
        }
      </Deck>
    );
  }
}
