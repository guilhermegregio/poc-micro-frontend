import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const styles = {
      wrapper: {
        color: "#ffffff",
        backgroundColor: "Grey",
        border: "4px solid LightGrey",
        padding: 20
      }
    };
    return (
      <div className="App">
        <div style={styles.wrapper}>I AM THE PARENT APP</div>
        <div id="child-one-app" />
        <div id="child-two-app" />
        <div id="child-cra-app" />
      </div>
    );
  }
}

export default App;
