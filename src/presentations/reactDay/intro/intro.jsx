// Import React
import React, { Component } from "react";

// Import Spectacle Core tags
import { Deck, Slide } from "spectacle";

// Import theme fro the Deck
import { theme } from "../common/themes/darkTheme.js";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";-

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("./assets/city.jpg"),
  kat: require("./assets/kat.png"),
  logo: require("./assets/formidable-logo.svg"),
  markdown: require("./assets/markdown.png")
};

preloader(images);

const slidesImports = [
  import("./slides/1"),
  import("./slides/2"),
  import("./slides/3"),
  import("./slides/4"),
  import("./slides/5"),
  import("./slides/6"),
  import("./slides/7"),
  import("./slides/8"),
  import("./slides/9"),
  import("./slides/10"),
  import("./slides/11")
];

export default class Presentation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: Array(slidesImports.length).fill(<Slide key="loading" />)
    };
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
