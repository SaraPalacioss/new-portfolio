import React, { Fragment } from "react";
import MyPhoto from "./MyPhoto";
import Stack from "./Stack";

const AboutMe = () => {
  return (
    <Fragment>
      <div className="aboutme-style">
        <h1>About me</h1>
        <div className="info-container">
          <div>
            <MyPhoto />
          </div>
          <div>
            <p>
              "After working for more than 10 years as technician for IT
              companies I found in Web Development a real passion. I'm a
              technology lover and I do enjoy achieving new skills that let me
              find the better way to solve challenging issues. The learning
              process never ends!"
            </p>
            <Stack />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutMe;
