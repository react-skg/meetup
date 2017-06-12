import React from "react";
import { Heading, Slide, List, ListItem, Appear } from "spectacle";

export default (
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading textColor="tertiary">Components</Heading>
        <List>
            <Appear><ListItem>Design as Component Hierarchy</ListItem></Appear>
          <Appear><ListItem>Data as props and state</ListItem></Appear>
          <Appear><ListItem>Workflow as Lifecycle hooks</ListItem></Appear>
        </List>
    </Slide>
);
