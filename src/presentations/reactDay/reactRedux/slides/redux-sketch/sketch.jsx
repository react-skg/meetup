import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './sketch.css';

import Store from './store';
import External from './external';
import MiddleWare from './middleware';
import View from './provider';
import Wrapper from './wrapper';
import ActionCreators from './actionCreators';

const steps = [
  'SHOW_PROVIDER',
  'SHOW_ACTION_CREATORS',
  'SHOW_STORE',
  'SHOW_REDUCER',
  'SHOW_REDUCERCOMPOSITION',
  'SHOW_EXTERNAL',
  'SHOW_EXTERNAL_METEORS',
  'SHOW_MIDDLEWARE'
];

const totalSteps = steps.length;

class Sketch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0
    };
  }

  goNext = () => {
    if (this.state.step < totalSteps) {
      this.setState({
        step: this.state.step + 1
      });
    }
  };

  goPrev = () => {
    if (this.state.step > 0) {
      this.setState({
        step: this.state.step - 1
      });
    }
  };

  render() {
    const { step } = this.state;

    return (
      <div className="fullHeight">
        <div className="sketch">
          <Wrapper>
            <View step={step} />
            <ActionCreators step={step} />
            <Store step={step} />
            <External step={step} />
            <MiddleWare step={step} />
          </Wrapper>
          <div className="button-controls">
            <button
              onClick={this.goPrev}
              ref={(el) => {
                this.back = el;
              }}
              className="rdx-button"
            >
              <i className="fa fa-fw fa-step-backward" />
            </button>
            <button
              onClick={this.goNext}
              ref={(el) => {
                this.back = el;
              }}
              className="rdx-button"
            >
              <i className="fa fa-fw fa-step-forward" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Sketch.propTypes = {};

export default Sketch;
