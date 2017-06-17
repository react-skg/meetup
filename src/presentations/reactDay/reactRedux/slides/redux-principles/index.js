import React from 'react';
import { Heading, List, ListItem, Image, Appear } from 'spectacle';
import Logo from '../../redux/logo';
import { Slide } from '../../components';

const notes = `
    Three Principles
        Single source of truth
            The state of your whole application is stored in an object tree within a single store.
        State is read-only
            The only way to change the state is to emit an action, an object describing what happened.
        Changes are made with pure functions
            To specify how the state tree is transformed by actions, you write pure reducers.

    Problem 1: The code for stores can’t be reloaded without wiping out the state
    Solution: Separate these two functions.

    Problem 2: The state is being rewritten with every action
    Solution: When an action comes in to the store copy the state and make changes to the copy.

    Make it easy to wrap parts of the system in other objects.
`;

export default (
  <Slide
    id="redux-principles"
    notes={notes}
  >
    <Logo />
    <Heading
      size={4}
      textColor="white"
    >
      Principles - Protocol
    </Heading>
        <List>
      <Appear>
        <ListItem>
          {'Single source of truth'}
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          {'State is read-only'}
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          {'Changes are made with pure functions'}
        </ListItem>
      </Appear>
    </List>
  </Slide>
);
