import React, { Component } from "react";
import "./App.css";
import Heading from "./Components/Heading/Heading";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="masterContainer">
        <header className="App">
          <Heading />
        </header>
        <div className="underHeading"></div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
