import React from "react";
import { Heading, Slide, List, ListItem, Appear } from "spectacle";

export default (
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading textColor="tertiary">Components</Heading>
        <List>
            <Appear><ListItem>Building Block</ListItem></Appear>
          <Appear><ListItem>Props and State</ListItem></Appear>
          <Appear><ListItem>Lifecycle</ListItem></Appear>
        </List>
    </Slide>
);
