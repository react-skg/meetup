import React from "react";
import { Heading, Slide, List, ListItem, Appear } from "spectacle";

export default (
  <Slide transition={["slide"]}>
      <Heading size={1}>
        The APIs
      </Heading>
      <List>
        <Appear><ListItem textColor="secondary">Alerts</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Camera</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Clipboard</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Geolocation</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Time based</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Push Notifications</ListItem></Appear>
        <Appear><ListItem textColor="secondary">WebGL, VR</ListItem></Appear>
        <Appear><ListItem textColor="secondary">OS specific</ListItem></Appear>
      </List>
  </Slide>
);
