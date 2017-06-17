import React from 'react';
import { Heading, List, ListItem, Appear, Image } from 'spectacle';
import { Slide } from '../../components';
import img from '../redux-sketch/actionCreators.svg';

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
    id="redux-actions"
    bgColor="primary"
    notes={notes}
  >
    <Image src={img} height="100px" />
    <Heading
      size={4}
      textColor="white"
    >
      {'ActionCreators => Actions'}
    </Heading>
    <List>
      <Appear>
        <ListItem>Action Creators</ListItem>
      </Appear>
      <Appear>
        <ListItem>Return a formated action object</ListItem>
      </Appear>
      <Appear>
        <ListItem>Dispatch is handled separately</ListItem>
      </Appear>
    </List>
  </Slide>
);
