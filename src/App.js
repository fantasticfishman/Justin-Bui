import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import ImageGallery from "react-image-gallery";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import slide from "./carouselpics/slide.png";
import TitleCard from "./Components/Titlecard";
import star from "./picsandstuff/star.png";
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";
import "./App.css";

const aboutimages = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <div className="App">
          <Parallax opacity={[2, 0]}>
            <img id="header" src={slide}></img>
          </Parallax>
          <Navbar />
          <Parallax translateX={[-20, 0]} scale={[, 1.5]} opacity={[0.15, 1.5]}>
            <div className="titlecard">
              <TitleCard title="About Me" />
            </div>
          </Parallax>
          <Parallax opacity={[0.55, 2]}>
            <Section
              title="I'm a second year student at UCSD studying Computer Science."
              list={
                <ul>
                  <li>
                    In my free time, I enjoy playing the guitar, hanging out
                    with friends, or coding.
                  </li>
                  <li>
                    I hope to start a career in Web Development in future.
                  </li>
                  <li>among us!!</li>
                  <li>among us!!!</li>
                </ul>
              }
              dark={true}
              id="section1"
              carousel={<ImageGallery items={aboutimages} />}
            />
          </Parallax>
          <div className="stars">
            <Parallax translateY={[-20, 20]}>
              {/* <img id="star1" alt="a funny star" src={star} /> */}
            </Parallax>
          </div>
          <Parallax translateX={[-20, 0]} scale={[, 1.5]} opacity={[0.15, 1.5]}>
            <div className="titlecard">
              <TitleCard title="Development" />
            </div>
          </Parallax>
          <Parallax opacity={[0.55, 2]}>
            <Section
              title="Some examples of what I've done, and the tools required."
              list={
                <ul>
                  <li>A unit website for my school's AFJROTC program</li>
                  <ul>
                    <li>Github Pages</li>
                    <li>Regular HTML/CSS</li>
                  </ul>
                  <li>A Discord Bot to annoy my friends</li>
                  <ul>
                    <li>Discord.js</li>
                  </ul>
                  <li>A Workout Tracker App</li>
                  <ul>
                    <li>React/Node.JS for frontend</li>
                    <li>MongoDB/Express for backend</li>
                  </ul>
                </ul>
              }
              dark={true}
              id="section2"
              carousel={<ImageGallery items={aboutimages} />}
            />
          </Parallax>
          <Parallax translateX={[-20, 0]} scale={[, 1.5]} opacity={[0.15, 1.5]}>
            <div className="titlecard">
              <TitleCard title="Leadership" />
            </div>
          </Parallax>
          <Parallax opacity={[0.55, 2]}>
            <Section
              title='"People who enjoy meetings should not be in charge of anything."- Thomas Sowell'
              list={
                <ul>
                  <li>AFJROTC Senior Staff</li>
                  <ul>
                    <li>
                      1/9 students selected to lead high school Air Force Junior
                      Reserve Officer Training Corps program of 160+ students
                    </li>
                    <li>
                      organized many events, including training camps, awards
                      ceremony, social events,
                      contests/competitions, workshops, and more
                    </li>
                  </ul>
                  <li>AFJROTC Public Affairs Squadron Commander</li>
                  <ul>
                    <li>
                      Selected to lead a team of 15 students to
                      document unit activities
                    </li>
                    <li>
                      Organized the capturing of
                      events through photo/video footage
                    </li>
                    <li>
                      Organized creation of monthly
                      newsletters/videos, a yearbook, and unit website/social
                      media
                    </li>
                    <li>
                      In charge of publicizing/advertising unit to outside
                      organizations
                    </li>
                  </ul>
                </ul>
              }
              dark={true}
              id="section3"
              carousel={<ImageGallery items={aboutimages} />}
            />
          </Parallax>
          <Parallax
            translateX={[-20, 40]}
            scale={[, 1.5]}
            opacity={[0.15, 1.5]}
          >
            <div className="titlecard">
              <TitleCard title="Research" />
            </div>
          </Parallax>
          <Parallax opacity={[0.55, 2]}>
            <Section
              title='"If we knew what we were doing, it would not be called research, would it? -Albert Einstien"'
              subtitle="jk it wont start until fall lmao"
              dark={true}
              id="section4"
              carousel={<ImageGallery items={aboutimages} />}
            />
          </Parallax>
          <Parallax
            translateX={[-20, 40]}
            scale={[, 1.5]}
            opacity={[0.15, 1.5]}
          >
            <div className="titlecard">
              <TitleCard title="Contact Me" />
            </div>
          </Parallax>
          <Parallax opacity={[0.55, 2]}>
            <Section
              title="Need something done?"
              subtitle="PLEASE ILL DO ANYTHING"
              dark={true}
              id="section5"
            />
          </Parallax>
        </div>
      </ParallaxProvider>
    );
  }
}

export default App;
