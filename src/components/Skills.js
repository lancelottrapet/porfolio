import React from "react";

const Skills  = () => {
    return( 
        <div id="Skills" class="skills-section">
      <div class="container">
        <h2>Skills</h2>
        <h3>My primary skills are...</h3>
      </div>
      <div class="skills-div">
        <div class="skills-card">
          <img src="./react.png" />
          <h3>React</h3>
        </div>
        <div class="skills-card">
          <img src="./nodejs.png" />
          <h3>Node</h3>
        </div>
        <div class="skills-card">
          <img src="./javascript.png" />
          <h3>JavaScript</h3>
        </div>
        <div class="skills-card">
          <img src="./css.png" />
          <h3>CSS</h3>
        </div>
        <div class="skills-card">
          <img src="./html.png" />
          <h3>HTML</h3>
        </div>
      </div>
      <div class="container">
        <h3>I am familiar with...</h3>
      </div>
      <div class="skills-div">
        <div class="skills-card">
          <img src="./git.png" />
          <h3>Git</h3>
        </div>
        <div class="skills-card">
          <img src="./redux.png" />
          <h3>Redux</h3>
        </div>
        <div class="skills-card">
          <img src="./mongodb.png" />
          <h3>MongoDB</h3>
        </div>
        <div class="skills-card">
          <img src="./firebase.png" />
          <h3>Firebase</h3>
        </div>
      </div>
    </div>
    )
 }

export default Skills;