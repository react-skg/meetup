import React from "react";
import { Heading, Slide, List, ListItem, Appear } from "spectacle";

export default (
  <Slide transition={["slide"]} style={{ background: 'linear-gradient(20deg, rgb(219, 112, 147), #daa357)', color: 'white'}}>
    <br />
    <br />
    <br />
    <br />
    <Heading size={3} style={{ color: 'white' }}>The methods</Heading>
      <br />
      <br />
      <List>
        <Appear><ListItem>CSS</ListItem></Appear>
        <Appear><ListItem>CSS Modules</ListItem></Appear>
        <Appear><ListItem>JSS</ListItem></Appear>
        <Appear><ListItem>Aphrodite</ListItem></Appear>
        <Appear><ListItem>Radium</ListItem></Appear>
      </List>
  </Slide>
);
