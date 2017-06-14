import React, { Component } from "react";
import { Heading } from "spectacle";

import './counter.post.css';

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return (
      <div>
      {this.state.count < 5 ?
        <div>
          <Heading fit size={5} textColor="black">
            The button has been clicked {this.state.count} times
          </Heading>
          <button className="intro-presentation-counter-btn" type="button" onClick={this.handleClick}>Click Me</button>
        </div> :
          <Heading size={5} fit caps textColor="black">Easy there pal</Heading>
        }
      </div>
    );
  }
}
