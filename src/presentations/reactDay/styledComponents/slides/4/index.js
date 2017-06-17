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
  <Slide transition={["slide"]} style={{ background: 'linear-gradient(20deg, rgb(219, 112, 147), #daa357)', color: 'white'}}>
    <br />
    <br />
    <br />
    <br />
      <Heading size={3} style={{ color: 'white' }}>
        Why is {<Image src={images.logo} margin="0" width="80px" height="80px"/>} awesome?
      </Heading>
      <br />
      <br />
      <List>
        <Appear><ListItem>Write actual CSS</ListItem></Appear>
        <Appear><ListItem>Have power of JS</ListItem></Appear>
        <Appear><ListItem>Theming</ListItem></Appear>
        <Appear><ListItem>Full React Native Support</ListItem></Appear>
      </List>
  </Slide>
);
