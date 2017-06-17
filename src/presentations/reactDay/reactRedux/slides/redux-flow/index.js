import React from 'react';
import { Heading, Text } from 'spectacle';
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
`;

export default (
  <Slide
    id="redux-flow"
    notes={notes}
  >
    <Logo />
    <Heading
      size={4}
      textColor="white"
    >
      Architecture
    </Heading>
  </Slide>
);
