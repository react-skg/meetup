import React from "react";
import { Heading, Slide, Image } from "spectacle";

const images = {
  jsx: require("../../assets/jsx.png")
};

export default (
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading textColor="tertiary">JSX or No JSX</Heading>
      <Image key="1" src={images.jsx.replace("/", "")} height="500px"/>
    </Slide>
);
