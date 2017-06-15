import React from "react";
import { Heading, Slide, List, Appear, Image } from "spectacle";
// Import mapValues from lodash
import mapValues from "lodash/mapValues";
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const images = mapValues({
  history: require("../../assets/history.png")
}, v => v.replace('/', ''));

preloader(images);

export default (
  <Slide transition={["zoom"]}>
    <Heading size={3}>
      Let's talk about styling!!!
    </Heading>
    <List>
      <Appear><Image src={images.history} width="100%"/></Appear>
    </List>
  </Slide>
);
