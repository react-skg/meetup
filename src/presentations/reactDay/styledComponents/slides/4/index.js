import React from "react";
import { Heading, Slide, List, ListItem, Appear, Image } from "spectacle";

// Import mapValues from lodash
import mapValues from "lodash/mapValues";
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const images = mapValues({
  logo: require("../../assets/logo2.png")
}, v => v.replace('/', ''));

preloader(images);

export default (
  <Slide transition={["slide"]} id="slide2">
      <Heading size={3}>
        Why is {<Image src={images.logo} margin="0" width="80px" height="80px"/>} awesome?
      </Heading>
      <List>
        <Appear><ListItem textColor="secondary">Write actual CSS</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Have power of JS</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Theming</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Full React Native Support</ListItem></Appear>
      </List>
  </Slide>
);
