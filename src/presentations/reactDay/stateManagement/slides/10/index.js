import React from "react";
import { Heading, Slide, List, ListItem, Appear, Image } from "spectacle";
// Import mapValues from lodash
import mapValues from "lodash/mapValues";
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const images = mapValues({
  views: require("../../assets/views.png")
}, v => v.replace('/', ''));

preloader(images);

export default (
  <Slide transition={"zoom"}>
    <Heading size={1}>
      Views
    </Heading>
    <List>
      <Appear><ListItem>Subscribe to stores and listen for changes</ListItem></Appear>
      <Appear><ListItem>Ensure one way of data flow. Only one view in a hierarchy listens for changes in the store</ListItem></Appear>
      <Appear><ListItem>Updates all other views underneath in the hierarchy</ListItem></Appear>
      <Appear><Image src={images.views} margin="30px" height="327px" /></Appear>
    </List>
  </Slide>
);
