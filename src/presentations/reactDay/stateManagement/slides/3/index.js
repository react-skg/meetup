import React from "react";
import { Slide, Image } from "spectacle";
// Import mapValues from lodash
import mapValues from "lodash/mapValues";
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const images = mapValues({
  flux: require("../../assets/flux.png")
}, v => v.replace('/', ''));

preloader(images);

export default (
  <Slide transition={["zoom"]}>
      <Image src={images.flux} margin="40px auto" height="310px" />
  </Slide>
);
