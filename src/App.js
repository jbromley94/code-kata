import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Heading from "./Components/Heading/Heading";
import Footer from "./Components/Footer/Footer";
import ItemsForSale from "./Components/ItemsForSale/ItemsForSale";

class App extends Component {
  render() {
    return (
      <div className="masterContainer">
        <header className="App">
          <Heading />
        </header>        
        {/* With a switch, we can future proof the routing :D  - 
        i may want /home or /checkout routes in the future*/}
        <Switch>
          <Route path="/" component={ItemsForSale} />
        </Switch>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
