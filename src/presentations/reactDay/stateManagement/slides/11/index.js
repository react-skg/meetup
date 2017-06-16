import React from "react";
import { Heading, Slide, List, Appear, Image } from "spectacle";
// Import mapValues from lodash
import mapValues from "lodash/mapValues";
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const images = mapValues({
  appView: require("../../assets/appView.png")
}, v => v.replace('/', ''));

preloader(images);

export default (
  <Slide transition={"zoom"} bgColor="fifth">
    <Heading size={3} textColor="primary">
      todoApp
    </Heading>
    <List>
      <Appear><Image src={images.appView}/></Appear>
    </List>
  </Slide>
);
