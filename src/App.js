import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import ImageGallery from "react-image-gallery";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import TitleCard from "./Components/Titlecard";
import star from "./picsandstuff/star.png";
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";
import "./App.css";

const images = [
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
          <Navbar />
          <Section
            title="rem is the best waifu"
            subtitle="rem is the best waifu"
            dark={true}
            id="section1"
            carousel={<ImageGallery items={images} />}
          />
          <div className="stars">
            <Parallax offset={1.5}>
              <img id="star1" alt="a funny star" src={star} />
            </Parallax>
            {/* <Parallax rotate={[-500,500]} translateY={-800} >
              <img id = "star2" alt="a funny star" src={star}/>
          </Parallax>
          <Parallax rotate={[-500,500]} translateY={-800} >
              <img id = "star3" alt="a funny star" src={star}/>
          </Parallax>
          <Parallax rotate={[-500,500]} translateY={-800} >
              <img id = "star4" alt="a funny star" src={star}/>
          </Parallax> */}
          </div>
          <Parallax translateX={[-20, 0]} scale={[, 1.5]} opacity={[0.45, 1]}>
            <div className="titlecard">
              <TitleCard title="AMONG US!!!!" />
            </div>
          </Parallax>
          {/* <ImageGallery items={images} /> */}
          <Section
            title="Section 2"
            subtitle="cringe"
            dark={true}
            id="section2"
          />
          <Parallax translateX={[-20, 20]}>
            <div className="titlecard">
              <TitleCard title="AMONG US!!!!" />
            </div>
          </Parallax>
          <Section
            title="Section 3"
            subtitle="cringe"
            dark={true}
            id="section3"
          />
          <Parallax translateX={[-40, 40]}>
            <div className="titlecard">
              <TitleCard title="AMONG US!!!!" />
            </div>
          </Parallax>
          <Section
            title="Section 4"
            subtitle="cringe"
            dark={true}
            id="section4"
          />
          <Parallax translateX={[-20, 20]}>
            <div className="titlecard">
              <TitleCard title="AMONG US!!!!" />
            </div>
          </Parallax>
          <Section
            title="Section 5"
            subtitle="cringe"
            dark={true}
            id="section5"
          />
        </div>
      </ParallaxProvider>
    );
  }
}

export default App;
