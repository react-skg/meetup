import React from "react";
import { Slide, Image } from "spectacle";

const images = {
  counter: require("../../assets/counter.png")
};

export default (
    <Slide transition={["zoom"]} bgColor="primary">
        <Image key="1" className="bounceIn animated" src={images.counter.replace("/", "")} margin="0px auto 40px" height="700px"/>
    </Slide>
);
