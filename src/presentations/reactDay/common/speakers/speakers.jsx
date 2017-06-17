import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './speakers.css';

const routes = {
  sartio: '/intro',
  christina: '/state-management',
  niko: '/react-native',
  dimitri: '/react-redux',
  lefteri: '/react-router',
  pavlo: '/styled-components',
  jamal: '/server-side-rendering'
};

const images = {
  pavlo: require("../../../../assets/pavlos.jpg"),
  dimitri: require("../../../../assets/dimitris.png"),
  niko: require("../../../../assets/nikos.jpg"),
  christina: require("../../../../assets/xristina.jpg"),
  lefteri: require("../../../../assets/lefteris.jpg"),
  sartio: require("../../../../assets/sartios.jpg"),
  jamal: require("../../../../assets/jamal.jpg"),
  background: require("../../../../assets/background.png"),
  logo: require("../../../../assets/logo.png")
};

export default class Speakers extends Component {
  constructor(props){
    super(props);
    this.state = {
      speaker: 'sartio'
    };
  }

  handleChangeSpeaker = (speaker) => {
    this.setState({ speaker });
  }

  render() {
    return (
      <div
        style={{ backgroundImage: `url(${images['background']})` }}
        className="meetup-speakers-wrapper"
      >
        <div className="meetup-speakers-container">
          <div className="meetup-speakes-logo-container">
            <img className="meetup-speakes-logo-image" style={{ paddingTop: '33px' }} width="400" alt="logo" src={images['logo']}/>
          </div>
          <div className="meetup-speakers-splash">
            <div className="meetup-speakers-top">
              <div className="meetup-speakers-datetime-container">
                <div className="meetup-speakers-datetime">
                  <div className="meetup-speakers-datetime-time">11:00am</div>
                <div className="meetup-speakers-datetime-date">Saturday, June 17th, 2017</div>
                </div>
              </div>
              <div className="meetup-speakers-accounts-wrapper">
                <div className="meetup-speakers-accounts-container">
                  <div className="meetup-speakers-accounts">
                    <div className="meetup-speakers-account-wrapper">
                      <div className={`meetup-speakers-account-container ${this.state.speaker === 'sartio' ? 'active' : ''}`}>
                        <div
                          className="meetup-speakers-account"
                          onClick={() => { this.handleChangeSpeaker("sartio"); }}
                        >
                          <div className={`meetup-speakers-account-logo-container ${this.state.speaker === 'sartio' ? 'active' : ''}`}>
                            <img className="meetup-speakers-account-logo-image" alt="sartio" src={images['sartio']}></img>
                          </div>
                        </div>
                        <div className="meetup-speakers-account-name">Sartios</div>
                      </div>
                    </div>

                    <div className="meetup-speakers-account-wrapper">
                      <div className={`meetup-speakers-account-container ${this.state.speaker === 'christina' ? 'active' : ''}`}>
                        <div
                          className="meetup-speakers-account"
                          onClick={() => { this.handleChangeSpeaker("christina"); }}
                        >
                          <div className={`meetup-speakers-account-logo-container ${this.state.speaker === 'christina' ? 'active' : ''}`}>
                            <img className="meetup-speakers-account-logo-image" alt="christina" src={images['christina']}></img>
                          </div>
                        </div>
                        <div className="meetup-speakers-account-name">Christina</div>
                      </div>
                    </div>
                    <div className="meetup-speakers-account-wrapper">
                      <div className={`meetup-speakers-account-container ${this.state.speaker === 'dimitri' ? 'active' : ''}`}>
                        <div
                          className="meetup-speakers-account"
                          onClick={() => { this.handleChangeSpeaker("dimitri"); }}
                        >
                          <div className={`meetup-speakers-account-logo-container ${this.state.speaker === 'dimitri' ? 'active' : ''}`}>
                            <img className="meetup-speakers-account-logo-image" alt="dimitri" src={images['dimitri']}></img>
                          </div>
                        </div>
                        <div className="meetup-speakers-account-name">Dimitris</div>
                      </div>
                    </div>

                    <div className="meetup-speakers-account-wrapper">
                      <div className={`meetup-speakers-account-container ${this.state.speaker === 'niko' ? 'active' : ''}`}>
                        <div
                          className="meetup-speakers-account"
                          onClick={() => { this.handleChangeSpeaker("niko"); }}
                        >
                          <div className={`meetup-speakers-account-logo-container ${this.state.speaker === 'niko' ? 'active' : ''}`}>
                            <img className="meetup-speakers-account-logo-image" alt="niko" src={images['niko']}></img>
                          </div>
                        </div>
                        <div className="meetup-speakers-account-name">Nick</div>
                      </div>
                    </div>

                    <div className="meetup-speakers-account-wrapper">
                      <div className={`meetup-speakers-account-container ${this.state.speaker === 'lefteri' ? 'active' : ''}`}>
                        <div
                          className="meetup-speakers-account"
                          onClick={() => { this.handleChangeSpeaker("lefteri"); }}
                        >
                          <div className={`meetup-speakers-account-logo-container ${this.state.speaker === 'lefteri' ? 'active' : ''}`}>
                            <img className="meetup-speakers-account-logo-image" alt="lefteri" src={images['lefteri']}></img>
                          </div>
                        </div>
                        <div className="meetup-speakers-account-name">Lefteris</div>
                      </div>
                    </div>

                    <div className="meetup-speakers-account-wrapper">
                      <div className={`meetup-speakers-account-container ${this.state.speaker === 'pavlo' ? 'active' : ''}`}>
                        <div
                          className="meetup-speakers-account"
                          onClick={() => { this.handleChangeSpeaker("pavlo"); }}
                        >
                          <div className={`meetup-speakers-account-logo-container ${this.state.speaker === 'pavlo' ? 'active' : ''}`}>
                            <img className="meetup-speakers-account-logo-image" alt="pavlo" src={images['pavlo']}></img>
                          </div>
                        </div>
                        <div className="meetup-speakers-account-name">Pavlos</div>
                      </div>
                    </div>

                    {/* <div className="meetup-speakers-account-wrapper">
                      <div className={`meetup-speakers-account-container ${this.state.speaker === 'niko' ? 'active' : ''}`}>
                        <div
                          className="meetup-speakers-account"
                          onClick={() => { this.handleChangeSpeaker("niko"); }}
                        >
                          <div className={`meetup-speakers-account-logo-container ${this.state.speaker === 'niko' ? 'active' : ''}`}>
                            <img className="meetup-speakers-account-logo-image" alt="niko" src={images['niko']}></img>
                          </div>
                        </div>
                        <div className="meetup-speakers-account-name">niko</div>
                      </div>
                    </div> */}

                    <div className="meetup-speakers-account-wrapper">
                      <div className={`meetup-speakers-account-container ${this.state.speaker === 'jamal' ? 'active' : ''}`}>
                        <div
                          className="meetup-speakers-account"
                          onClick={() => { this.handleChangeSpeaker("jamal"); }}
                        >
                          <div className={`meetup-speakers-account-logo-container ${this.state.speaker === 'jamal' ? 'active' : ''}`}>
                            <img className="meetup-speakers-account-logo-image" alt="jamal" src={images['jamal']}></img>
                          </div>
                        </div>
                        <div className="meetup-speakers-account-name">Jamal</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="meetup-speakers-divider"/>
          <div className="meetup-speakers-actions">
            <Link to={routes[this.state.speaker]}>
              <button className="meetup-speakers-actions-button">
                {`Start ${this.state.speaker}'s Presentation`}
              </button>
            </Link>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
