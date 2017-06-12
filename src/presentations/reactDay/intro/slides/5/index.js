import React from "react";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

import { Heading, Slide, List, ListItem, Appear, Image, Link } from "spectacle";

import './slide5.post.css';

const images = {
  airbnb: require("../../assets/airbnb.png"),
  bbc: require("../../assets/bbc.png"),
  facebook: require("../../assets/facebook.png"),
  firefox: require("../../assets/firefox.png"),
  hipchat: require("../../assets/hipchat.png"),
  instagram: require("../../assets/instagram.png"),
  khanacademy: require("../../assets/khanacademy.png"),
  netflix: require("../../assets/netflix.png"),
  reddit: require("../../assets/reddit.png"),
  wordpress: require("../../assets/wordpress.png"),
  yahoo: require("../../assets/yahoo.png"),
  twitter: require("../../assets/twitter.png"),
};

export default (
    <Slide transition={["fade"]} bgColor="primary">
        <div className="intro-presentation-react-users-container">
          <Image key="1" className="bounceIn animated" src={images.airbnb.replace("/", "")} margin="0px auto 40px" height="120px"/>
          <Image key="2" className="bounceIn animated" src={images.bbc.replace("/", "")} margin="0px auto 40px" height="120px"/>
          <Image key="3" className="bounceIn animated" src={images.facebook.replace("/", "")} margin="0px auto 40px" height="120px"/>
        </div>
        <div className="intro-presentation-react-users-container">
          <Image key="4" className="bounceIn animated" src={images.firefox.replace("/", "")} margin="0px auto 40px" height="120px"/>
          <Image key="5" className="bounceIn animated" src={images.hipchat.replace("/", "")} margin="0px auto 40px" height="120px"/>
          <Image key="6" className="bounceIn animated" src={images.twitter.replace("/", "")} margin="0px auto 40px" height="120px"/>
        </div>
        <div className="intro-presentation-react-users-container">
          <Image key="7" className="bounceIn animated" src={images.instagram.replace("/", "")} margin="0px auto 40px" height="120px"/>
          <Image key="8" className="bounceIn animated" src={images.khanacademy.replace("/", "")} margin="0px auto 40px" height="120px"/>
          <Image key="9" className="bounceIn animated" src={images.netflix.replace("/", "")} margin="0px auto 40px" height="120px"/>
        </div>
        <div className="intro-presentation-react-users-container">
          <Image key="10" className="bounceIn animated" src={images.reddit.replace("/", "")} margin="0px auto 40px" height="120px"/>
          <Image key="11" className="bounceIn animated" src={images.wordpress.replace("/", "")} margin="0px auto 40px" height="120px"/>
          <Image key="12" className="bounceIn animated" src={images.yahoo.replace("/", "")} margin="0px auto 40px" height="120px"/>
        </div>
        <div className="intro-presentation-react-users-link bounceIn animated">
          <Link
            href="https://github.com/facebook/react/wiki/sites-using-react"
            target="_blank">More React Users</Link>
        </div>
    </Slide>
);
