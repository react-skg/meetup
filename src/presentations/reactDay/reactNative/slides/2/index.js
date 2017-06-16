import React from "react";
import { Image, Slide, Heading, Appear } from "spectacle";

const images = {
  fb: require("../../assets/fb-animal.gif")
};

export default (
  <Slide transition={["zoom"]}>
      <Heading textColor="tertiary">What is Native?</Heading>
      <Appear><Image key="2" src={images.fb.replace("/", "")} display="cover" width="100%" height="100%" margin="0" /></Appear>
  </Slide>
);
