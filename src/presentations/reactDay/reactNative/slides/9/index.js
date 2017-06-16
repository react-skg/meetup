import React from "react";
import { Heading, Slide, List, ListItem, Appear } from "spectacle";

export default (
  <Slide transition={["slide"]}>
      <Heading size={1}>
        Development Experience
      </Heading>
      <List>
        <Appear><ListItem textColor="secondary">Depends on the OS</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Error messages in the device</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Ctrl^R reloads the app</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Ctrl^D opens Developer Tools</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Debug on Chrome!</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Add breakpoints or console.log +JSON.stringify()</ListItem></Appear>
        <Appear><ListItem textColor="secondary">Expo: Free debugging on multiple devices</ListItem></Appear>
      </List>
  </Slide>
);
