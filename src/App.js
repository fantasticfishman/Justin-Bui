import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title="Section 1"
          subtitle="cringe"
          dark={true}
          id="section1"
        />
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
    );
  }
}

export default App;