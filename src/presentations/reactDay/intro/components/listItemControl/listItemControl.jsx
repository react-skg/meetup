import React from 'react';
import PropTypes from "prop-types";
import { ListItem } from "spectacle";

import './listItemControl.post.css'

const {string} = PropTypes;

const ListItemControl = props => (
  <ListItem
    className={`${props.className} fadeInUp animated`}
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
