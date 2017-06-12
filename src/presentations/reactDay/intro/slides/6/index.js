import React from "react";
import { Heading, Slide, List, ListItem, Appear } from "spectacle";

export default (
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading textColor="tertiary">Components</Heading>
        <List>
          <Appear><ListItem>Model your app as a components hierarchy</ListItem></Appear>
          <Appear><ListItem>Each component have props and state</ListItem></Appear>
          <Appear><ListItem>React Lifecycle hooks</ListItem></Appear>
        </List>
    </Slide>
);
