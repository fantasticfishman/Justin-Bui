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

function getInfo(slide) {}
class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <div className="App">
          <Parallax opacity={[2, 0]} rotateY={[-320, 360]}>
            <img id="header" src={slide}></img>
          </Parallax>
          <Navbar />
          <Parallax translateX={[-20, 0]} scale={[, 1.5]} opacity={[0.45, 1]}>
            <div className="titlecard">
              <TitleCard title="About Me" />
            </div>
          </Parallax>
          <Parallax opacity={[0.55, 2]}>
            <Section
              title="I'm a student at UCSD studying Computer Science."
              subtitle="In my free time, I enjoy playing the guitar, hanging out with friends, or coding."
              dark={true}
              id="section1"
              carousel={<ImageGallery items={aboutimages} onSlide={getInfo} />}
            />
          </Parallax>
          <div className="stars">
            <Parallax translateY={[-20, 20]}>
              {/* <img id="star1" alt="a funny star" src={star} /> */}
            </Parallax>
          </div>
          <Parallax translateX={[-20, 0]} scale={[, 1.5]} opacity={[0.45, 1]}>
            <div className="titlecard">
              <TitleCard title="Development" />
            </div>
          </Parallax>
          <Parallax opacity={[0.55, 2]}>
            <Section
              title="Some examples of what I've done."
              subtitle="cringe"
              dark={true}
              id="section2"
              carousel={<ImageGallery items={aboutimages} />}
            />
          </Parallax>
          <Parallax translateX={[-20, 0]} scale={[, 1.5]} opacity={[0.45, 1]}>
            <div className="titlecard">
              <TitleCard title="Leadership" />
            </div>
          </Parallax>
          <Parallax opacity={[0.55, 2]}>
            <Section
              title='"People who enjoy meetings should not be in charge of anything."- Thomas Sowell'
              subtitle="PLEASE ILL DO ANYTHING"
              dark={true}
              id="section3"
              carousel={<ImageGallery items={aboutimages} />}
            />
          </Parallax>
          <Parallax translateX={[-20, 40]} scale={[, 1.5]} opacity={[0.45, 1]}>
            <div className="titlecard">
              <TitleCard title="Contact Me" />
            </div>
          </Parallax>
          <Parallax opacity={[0.55, 2]}>
            <Section
              title="Need something done?"
              subtitle="PLEASE ILL DO ANYTHING"
              dark={true}
              id="section4"
            />
          </Parallax>
        </div>
      </ParallaxProvider>
    );
  }
}

export default App;
