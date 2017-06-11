import React from "react";
import { Heading, Slide, List, ListItem, Appear, Image } from "spectacle";
// Import mapValues from lodash
import mapValues from "lodash/mapValues";
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const images = mapValues({
  dispatcher: require("../../assets/dispatcher.png")
}, v => v.replace('/', ''));

preloader(images);

export default (
  <Slide transition={["zoom"]}>
    <Heading size={1}>
      The Dispatcher
    </Heading>
    <List>
      <Appear><ListItem textColor="secondary">It acts as the central hub for your application</ListItem></Appear>
      <Appear><ListItem textColor="secondary">A registry of callbacks. Stores register themselves by providing a callback. When a new action arrives, all callbacks are invoked </ListItem></Appear>
      <Appear><Image src={images.dispatcher} margin="30px" height="300px" /></Appear>
    </List>
  </Slide>
);
