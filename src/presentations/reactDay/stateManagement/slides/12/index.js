import React from "react";
import { Heading, Slide, List, Appear, Image } from "spectacle";
// Import mapValues from lodash
import mapValues from "lodash/mapValues";
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const images = mapValues({
  wrapup: require("../../assets/wrapup.png")
}, v => v.replace('/', ''));

preloader(images);

export default (
  <Slide transition={"zoom"}>
    <Heading size={1}>
      Wrap up
    </Heading>
    <List>
      <Appear><Image src={images.wrapup}/></Appear>
    </List>
  </Slide>
);
