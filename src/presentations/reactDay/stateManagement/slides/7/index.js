import React from "react";
import { Heading, Slide, List, ListItem, Appear, Image } from "spectacle";
// Import mapValues from lodash
import mapValues from "lodash/mapValues";
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

const images = mapValues({
  actions: require("../../assets/actions.png")
}, v => v.replace('/', ''));

preloader(images);

export default (
  <Slide transition={"zoom"}>
    <Heading size={1}>
      Actions
    </Heading>
    <List>
      <Appear><ListItem textColor="secondary">Actions define an activity to be performed. They have type and payload</ListItem></Appear>
      <Appear><ListItem textColor="secondary">Stores use the action type to determine further processing</ListItem></Appear>
      <Appear><ListItem textColor="secondary">Action creators are helper methods to create actions. They call also the dispatcher with the newly created action</ListItem></Appear>
      <Appear><Image src={images.actions} margin="30px" height="327px" /></Appear>
    </List>
  </Slide>
);
