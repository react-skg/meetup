import React from 'react';
import { Heading, List, ListItem, Image, Appear } from 'spectacle';
import { Slide } from '../../components';
import img from '../redux-sketch/store.svg';

const notes = `
  It takes care of holding on to the whole state tree. It then delegates the work of figuring out what state changes need to happen.
  The reducers, headed up by the root reducer, take on this task.
`;

export default (
  <Slide
    id="redux-store"
    bgColor="primary"
    notes={notes}
  >
    <Image src={img} height="100px" />
    <Heading
      size={4}
      textColor="white"
    >
      The Store
    </Heading>
    <List>
      <Appear>
        <ListItem>
          {'There is only one store...'}
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          {'It delegates the work of state changes to pure functions called reducers'}
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          {'The dispatcher is part of the store as a subsribe method'}
        </ListItem>
      </Appear>
    </List>
  </Slide>
);

