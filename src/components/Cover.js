import React, { Fragment } from "react";

const Cover = () => {
  return (
    <Fragment>
      <div className="cover-style">
        <h1>
          Hi there, I am Sara Palacios
          <br />
          Full Stack Developer
        </h1>
        <div>
          <div class="button">
            <div class="button__text">Know more about me</div>

            <div class="button__wrapper">
              <div class="button__arrow"></div>
              <div class="button__border-circle"></div>
              <div class="button__mask-circle">
                <div class="button__small-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cover;
