import React, { Component } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import Me from "./images/me.JPG";
import litfit from "./images/litfit.png";
import pantrypal from "./images/pantrypal.png";
import { Wave, Random } from "react-animated-text";
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  themes,
} from "@merc/react-timeline";
import staff from "./images/staff.jpg";
import { Github } from "react-bootstrap-icons";
import { Envelope } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import "./App.css";

class App extends Component {
  handleEnvelope = () => {
    window.open("mailto:justin7354@gmail.com");
  };
  handleGit = () => {
    window.open("https://github.com/fantasticfishman");
  };
  handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/justin-v-bui");
  };
  render() {
    return (
      <ParallaxProvider>
        <div className="App">
          <Parallax opacity={[2.5, -1]}>
            <div className="titlepage">
              <h1>
                <Wave
                  text="Justin Bui"
                  effect="pop"
                  effectChange=".9"
                  speed="10"
                />
              </h1>
              <h2>Developer. Team Player. Leader.</h2>
              <h3>Coming soon (hopefully) to a workplace near you.</h3>
              <h4>
                <Random
                  text="Scroll for more!"
                  effect="jump"
                  effectDirection="up"
                  effectChange=".05"
                />
              </h4>
            </div>
          </Parallax>
          <div className="about">
            <Parallax opacity={[0.2, 2.5]}>
              <img src={Me} alt="Me"></img>
              <h1>
                Hi. I'm Justin, a student studying Computer Science at
                University of California, San Diego.
              </h1>
            </Parallax>
          </div>
          <Parallax opacity={[0, 3]}>
            <hr></hr>
          </Parallax>
          <Parallax opacity={[0, 3]}>
            <div className="timeline">
              <Timeline theme={themes.roli}>
                <Events>
                  <ImageEvent
                    date="2021-Leadership"
                    text="I was 1 out of 9 students
                    selected to lead my high school's AFJROTC organization,
                    organizing many events including training camps, an awards
                    ceremony of 100+ attendees, social events,
                    contests/competitions, workshops, and more. For my specific
                    role, I managed capturing footage of events, our social media accounts, creation of monthly newsletters, and
                    advertising/publicizing our club to outside organizations."
                    src={staff}
                  >
                    <div>
                      <UrlButton
                        href="https://drive.google.com/file/d/1Sl6SpVuzupJKdfWgxJwRj2Tz7eK9SlHw/view?usp=sharing"
                        target="_blank"
                      >
                        I also led the creation of a yearbook!
                      </UrlButton>
                    </div>
                  </ImageEvent>
                  <ImageEvent
                    date="2018-2020-Projects/Leadership"
                    text='I was also in charge of our website, gaining experience with HTML, CSS, Github Pages, as well as working with a team. For my efforts with all of the above, 
                    I recieved the AFJROTC Captain Kenneth R. Cherry Scholarship Award
                    of $1000 awarded for a "desire to serve", "integrity and excellence", and "strong leadership skills", as well as the Veterans of Foreign Wars Citation and Medal Award, 
                    "in special recognition of outstanding achievements and exceptional leadership ability".'
                  >
                    <div>
                      <UrlButton href="https://ca-935th.com/" target="_blank">
                        Our website is still up and going!
                      </UrlButton>
                    </div>
                  </ImageEvent>
                  <ImageEvent
                    date="2021-Projects"
                    text="With a team, I created an exercise tracker app using the MERN stack, gaining experience with React, Express, MongoDB, and HTTP. 
                    We also implemented a login system that allows users to create accounts with details hashed using BCrypt, and logging in securely authenticates using JSONWebToken."
                    src={litfit}
                  ></ImageEvent>
                  <ImageEvent
                    date="2022-Leadership"
                    text="I planned and conducted socials, presentations, and leadership workshops
                    for the UCSD Computer Science and Engineering Department's student engagement program aimed at new CS first years and transfers."
                  />
                  <ImageEvent>
                    "I conducted a research project with UCSD professors as part of the Early Research Scholars Program. 
                    We explored how advances in realistic rendering technology apply to the problem of inverse rendering, taking images and turning them into 3d scenes."
                    <div>
                      <UrlButton href="https://drive.google.com/file/d/1GGm0_OAGLQtPTFxK_84pzkXXieC4QOt6/view?usp=sharing" target="_blank">
                        Check out our poster!
                      </UrlButton>
                    </div>
                    </ImageEvent>
                  <ImageEvent
                    date="2023-Experience"
                    text="I worked over summer as an Release Engineer intern for Cubic Transportation Systems, gaining industry experience with DevOps tools like Docker, Jenkins, and Azure Devops, as well as Python scripting and server hosting."
                  />
                  <ImageEvent
                    date="2023-Projects"
                    text="I was the project leader for a team of 5, where we created a multi-tiered Java application leveraging the ChatGPT/Whisper/DALLE APIs to generate recipes and images for an end user based on spoken user input, with user data being stored in MongoDB. I organized and delegated all tasks, and planned/led meetings, as well as shouldered my own share of the development work."
                    src={pantrypal}
                  />
                </Events>
              </Timeline>
            </div>
          </Parallax>
          <hr></hr>
          <div className="contact">
            <Parallax opacity={[0, 3]}>
              <h1>Need something done?</h1>
              <div className="icons">
                <Envelope
                  id="envelope"
                  onClick={this.handleEnvelope}
                  size={"8vw"}
                />
                <Github id="git" onClick={this.handleGit} size={"8vw"} />
                <Linkedin
                  id="linkedin"
                  onClick={this.handleLinkedin}
                  size={"8vw"}
                />
              </div>
            </Parallax>
            <p>
              This website was created using React, and the code can be found{" "}
              <a href="https://github.com/fantasticfishman/Justin-Bui">
                {" "}
                here.
              </a>{" "}
            </p>
          </div>
        </div>
      </ParallaxProvider>
    );
  }
}

export default App;
