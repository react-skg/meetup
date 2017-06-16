import React from "react";
import { Image, Slide, Heading, Appear } from "spectacle";

const images = {
  joey: require("../../assets/joey.gif")
};

export default (
  <Slide transition={["zoom"]} bgColor="secondary">
      <Heading textColor="tertiary">Ok, how it works?</Heading>
      <Appear><Image key="2" src={images.joey.replace("/", "")} display="cover" width="100%" height="100%" margin="0" /></Appear>
  </Slide>
);
