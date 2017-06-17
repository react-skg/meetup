import React from "react";
import { Image, Slide, Heading, Appear } from "spectacle";

const images = {
  graph: require("../../assets/4_image.png")
};

export default (
  <Slide transition={["slide"]}>
    <Image key="2" src={images.graph.replace("/", "")} display="cover" width="100%" height="100%" margin="0" />
  </Slide>
);
