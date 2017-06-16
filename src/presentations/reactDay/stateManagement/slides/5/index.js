import React from "react";
import { Heading, Slide, List, Appear, Image } from "spectacle";
// Import mapValues from lodash
import mapValues from "lodash/mapValues";
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const images = mapValues({
  appDispatcher: require("../../assets/appDispatcher.png")
}, v => v.replace('/', ''));

preloader(images);

export default (
  <Slide transition={"zoom"} bgColor="fifth">
    <Heading size={3} textColor="primary">
      AppDispatcher
    </Heading>
    <List>
      <Appear><Image src={images.appDispatcher}/></Appear>
    </List>
  </Slide>
);
