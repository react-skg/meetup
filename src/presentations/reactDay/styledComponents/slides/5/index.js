import React from "react";
import { Heading, Slide, List, ListItem, Appear } from "spectacle";

export default (
  <Slide
    transition={["slide"]}
    style={{ background: 'linear-gradient(20deg, rgb(219, 112, 147), #daa357)', color: 'white'}}
    notes={(
      <div>
        <p></p>
        <p>εξωτερικο αρχιο css σαν classnames </p>
        <p>μετατρεπει ενα object style μεσο της injectSheet σε props και τα δινει σαν classNames</p>
        <p>γραφεις κωδικα με μεσα στο js και τα περνας μεσο μιας function css σαν classnames</p>
        <p>Inline style</p>
      </div>
    )}
  >
    <br />
    <br />
    <br />
    <br />
    <Heading size={3} style={{ color: 'white' }}>The methods</Heading>
      <br />
      <br />
      <List>
        <Appear><ListItem>Vanilla CSS</ListItem></Appear>
        <Appear><ListItem>CSS Modules</ListItem></Appear>
        <Appear><ListItem>JSS</ListItem></Appear>
        <Appear><ListItem>Aphrodite</ListItem></Appear>
        <Appear><ListItem>Radium</ListItem></Appear>
      </List>
  </Slide>
);
