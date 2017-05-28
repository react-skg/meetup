import React from "react";
import { Heading, Slide, List, ListItem } from "spectacle";

export default (
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading>Components</Heading>
        <List>
          <ListItem>Model your app as a components hierarchy</ListItem>
          <ListItem>Each component have props and state</ListItem>
          <ListItem>React Lifecycle hooks</ListItem>
        </List>
    </Slide>
);
