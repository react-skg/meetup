import React from "react";
import { Slide, Heading, Image } from "spectacle";

// Import mapValues from lodash
import mapValues from "lodash/mapValues";
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const images = mapValues({
  logo: require("../../assets/logo2.png")
}, v => v.replace('/', ''));

preloader(images);

export default (
  <Slide transition={["zoom"]}>
    <Heading size={1}>
      What is {<Image src={images.logo} margin="0" width="80px" height="80px"/>} ?
    </Heading>
  </Slide>
);
