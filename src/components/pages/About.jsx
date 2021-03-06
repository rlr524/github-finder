import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment className="container">
      <h1>About this App</h1>
      <p>App to search GitHub users</p>
      <p>Version 1.0.0</p>
      <p>
        Built by Rob @{" "}
        <a href="https://www.emiyaconsulting.com">Emiya Consulting</a>
      </p>
    </Fragment>
  );
};

export default About;
