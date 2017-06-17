import React from 'react';
import { Heading, List, ListItem, Image, Appear } from 'spectacle';
import { Slide } from '../../components';
import img from '../redux-sketch/reducer.svg';

const notes = `
  Pure functions that take state, action and return a new piece of state
  if the action affects them.
`;

export default (
  <Slide
    id="redux-reducers"
    bgColor="primary"
    notes={notes}
  >
    <Image src={img} height="100px" />
    <Heading
      size={4}
      textColor="white"
    >
      The Reducer Function
    </Heading>
    <List>
      <Appear>
        <ListItem>
          {'(state, action) => newState'}
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          {'Responsible for a specific piece of state'}
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          {'Testable - Reusable - Extendable'}
        </ListItem>
      </Appear>
    </List>
  </Slide>
);

