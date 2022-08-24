import React, { Component } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import Me from "./images/me.JPG";
import { Wave } from "react-animated-text";
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  themes,
  YouTubeEvent
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
            </div>
          </Parallax>
          <div className="about">
            <Parallax opacity={[0.2, 2.5]}>
              <img src={Me} alt="Me"></img>
              <h1>
                Hi. I'm Justin, a student studying Computer Science at
                University of California, San Diego. I have experience with
                Java, Python, and Web Development, along with
                leadership and organizational experience.
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
                    date="2018-2020-Projects/Leadership"
                    text="I was in charge of building and maintaining my organization's website, gaining experience with HTML, CSS, Github Pages, as well as working with a team."
                  >
                    <div>
                      <UrlButton href="https://ca-935th.com/" target="_blank">
                        It's still up and going!
                      </UrlButton>
                    </div>
                  </ImageEvent>
                  <ImageEvent
                    date="2021-Leadership"
                    text="I was selected to lead a team to document/advertise group activities for a club of 160+ students.
                    I organized the capturing of events through photo and video footage, and publicizing/advertising our club to outside organizations. I also
                    organized the creation of monthly newsletters/videos, as well as a website and social media accounts.
                    "
                  >
                    <div>
                      <UrlButton
                        href="https://drive.google.com/file/d/1Sl6SpVuzupJKdfWgxJwRj2Tz7eK9SlHw/view?usp=sharing"
                        target="_blank"
                      >
                        I even led the creation of a yearbook!
                      </UrlButton>
                    </div>
                  </ImageEvent>
                  <ImageEvent
                    date="2021-Leadership"
                    text="I was 1 out of 9 students selected to lead that same organization, 
                    organizing many events including training camps, an awards ceremony of 100+ attendees, 
                    social events, contests/competitions, workshops, and more. I learned to work as a team, lead others, and shoulder responsibility.
                    That's me on the right by the way."
                    src={staff}
                  />
                  <ImageEvent
                    date="2021-Leadership"
                    text='For my efforts that year, 
                    I recieved the AFJROTC Captain Kenneth R. Cherry Scholarship Award
                    of $1000 awarded for a "desire to serve", "integrity and excellence", and "strong leadership skills", as well as the Veterans of Foreign Wars Citation and Medal Award, 
                    "in special recognition of outstanding achievements and exceptional leadership ability".'
                  />
                  <ImageEvent
                    date="2021-Projects"
                    text="With a team, I created an exercise tracker app using the MERN stack, gaining experience with React, Express, MongoDB, and HTTP requests that connect those. 
                    We also implemented a login system that allows users to create accounts, and logging in authenticates them with a JSON web token so they can edit their info securely.
                    I also gained experience with working with deadlines and collaborating with a development team."
                  >
                    <div>
                      <UrlButton
                        href="https://github.com/thomas-gg/mern-template"
                        target="_blank"
                      >
                        MERN Stack Workout Tracker
                      </UrlButton>
                    </div>
                  </ImageEvent>
                  <ImageEvent
                    date="2022-Projects"
                    text="I created a wallpaper downloader using Python, it takes a search term, pulls HTML elements from wallpaper website page using BeautifulSoup,
                    searches for image links, and batch downloads wallpapers for you. It also has some quality of life usage like controlling search page, creating organized folders for downloads, and avoiding duplicate filenames/directories."
                  >
                    <div>
                      <UrlButton
                        href="https://github.com/fantasticfishman/scraper"
                        target="_blank"
                      >
                        Python Wallpaper Scraper
                      </UrlButton>
                    </div>
                  </ImageEvent>
                  <YouTubeEvent
                    date="2022-Projects"
                    text='I created a mobile app using React Native that helps users keep focused on their tasks by building a "streak" when they complete tasks before the due date. '
                    id="L7HBrO3VugI"
                  >
                    <div>
                      <UrlButton
                        href="https://github.com/fantasticfishman/todolist"
                        target="_blank"
                      >
                        Mobile App Repo
                      </UrlButton>
                    </div>
                  </YouTubeEvent>
                  <ImageEvent
                    date="2022-Research"
                    text="This year, I'll be doing a research project with a UCSD professor as part of the Early Research Scholars Program."
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
