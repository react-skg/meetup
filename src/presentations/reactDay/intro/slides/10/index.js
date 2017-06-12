import React from "react";
import { Heading, Slide, Image } from "spectacle";
import preloader from "spectacle/lib/utils/preloader";

const images = {
  jsx: require("../../assets/jsx.png")
};

export default (
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading textColor="tertiary">JSX or No JSX</Heading>
      <Image key="1" src={images.jsx.replace("/", "")} margin="40px auto" height="500px"/>
    </Slide>
);
