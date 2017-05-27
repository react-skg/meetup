import React, {Component} from 'react';
import { Slide } from 'spectacle';

import {baseStyles} from '../resources';

const {string, node, number, any, array} = React.PropTypes;

class IntroSlide extends Component{
  render(){
    return (
      <Slide
        id={`slide${this.props.priority}`}
        theme={this.props.theme}
        bgColor={this.props.bgColor}
        ttransition={["zoom"]}
        transitionDuration={500}>
        {this.props.children}
      </Slide>
    );
  }
}

IntroSlide.propTypes = {
  id: string,
  bgColor: string,
  align: string,
  children: node,
  maxHeight: number,
  maxWidth: number,
  notes: any,
  transition:array,
  transitionDuration: number
}

IntroSlide.defaultProps = {
  bgColor: baseStyles.bgColor
}

export default IntroSlide;
