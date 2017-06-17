import React from "react";
import { Heading, Slide, List, ListItem, Appear } from "spectacle";

export default (
  <Slide transition={["slide"]} notes={(
    <div>
      <p>The User: Fast - fast, uses the same native controls, Facebook Events</p>
      <p>The Boss: Faster implementations, Faster releases, cross-platform, free utils, Code push</p>
      <p>The Developer: Faster coding, easier debugging, fun and powerful, hot reload</p>
      <p>The Team: Everyone can contribute because they speak the same language</p>
    </div>
  )}>
      <Heading size={1}>
        Keeps them happy
      </Heading>
      <List>
        <Appear><ListItem textColor="secondary">The User</ListItem></Appear>
        <Appear><ListItem textColor="secondary">The Boss</ListItem></Appear>
        <Appear><ListItem textColor="secondary">The Developer</ListItem></Appear>
        <Appear><ListItem textColor="secondary">The Team</ListItem></Appear>
      </List>
  </Slide>
);
