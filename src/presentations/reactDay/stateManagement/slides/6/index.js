import React from "react";
import { Heading, Slide, List, ListItem, Appear, Image } from "spectacle";
// Import mapValues from lodash
import mapValues from "lodash/mapValues";
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const images = mapValues({
  stores: require("../../assets/stores.png")
}, v => v.replace('/', ''));

preloader(images);

export default (
  <Slide transition={"zoom"} style={{ alignItems: "flex-start" }}>
    <Heading size={1}>
      Stores
    </Heading>
    <List>
      <Appear><ListItem textColor="secondary">Contain application state and logic</ListItem></Appear>
      <Appear><ListItem textColor="secondary">Register themselves to the dispatcher with a callback.The callback receives one argument – the action</ListItem></Appear>
      <Appear><Image src={images.stores} margin="30px" height="300px" /></Appear>
    </List>
  </Slide>
);
