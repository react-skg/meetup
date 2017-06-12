import React from 'react';
import { ListItem } from "spectacle";


const {string} = React.PropTypes;

const ListItemControl = props => (
  <ListItem
    className={props.className}
    style={{animationDelay: `${props.animationDelay}`}}
    >
    {props.children}
  </ListItem>
)

ListItemControl.propTypes = {
  className: string,
  animationDelay: string
};

export default ListItemControl;
