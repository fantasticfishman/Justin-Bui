import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import ImageGallery from "react-image-gallery";
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import TitleCard from "./Components/Titlecard";
import slide from "./carouselpics/slide.png";
import '../node_modules/react-image-gallery/styles/css/image-gallery.css';
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
          title="Section 1"
          subtitle="cringe"
          dark={true}
          id="section1"
          carousel={<ImageGallery items={images} />}
        />
        <Parallax>
        <TitleCard />
        </Parallax>
        {/* <ImageGallery items={images} /> */}
        <Section
          title="Section 2"
          subtitle="cringe"
          dark={true}
          id="section2"
        />
        <Section
          title="Section 3"
          subtitle="cringe"
          dark={true}
          id="section3"
        />
        <Section
          title="Section 4"
          subtitle="cringe"
          dark={true}
          id="section4"
        />
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
