import React from "react";
import { Heading, Slide, List, ListItem, Appear, Link } from "spectacle";

export default (
  <Slide transition={["zoom"]}>
      <Heading size={1}>
        Solutions
      </Heading>
      <List>
        <Appear><ListItem textColor="secondary">Keep it all in React components (<b>App</b>?)</ListItem></Appear>
        <Appear><ListItem textColor="secondary"><Link textColor="tertiary" href="https://facebook.github.io/flux/">Flux</Link> - Actions, stores, dispatcher</ListItem></Appear>
        <Appear><ListItem textColor="secondary"><Link textColor="tertiary" href="http://redux.js.org/">Redux</Link> - Flux taken to bare minimum</ListItem></Appear>
        <Appear><ListItem textColor="secondary"><Link textColor="tertiary" href="https://mobxjs.github.io/mobx/">MobX</Link> - Observables, think spreadsheets</ListItem></Appear>
      </List>
    </Slide>
);
