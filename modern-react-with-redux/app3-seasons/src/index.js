import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = { lat: null, long: null, errorMessage: "" };

  // React says we have to define render!!
  render() {
    console.log("My component render function was called");
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }
    return <Spinner />;
  }

  componentDidMount() {
    console.log("My component was rendered to the screen");

    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("My component was just updated - it re-rendered!");
  }

  shouldComponentUpdate() {
    console.log(
      "My component is considering if it should be re-rendered or not"
    );
    return true;
  }

  static getDerivedStateFromProps(state) {
    console.log("getDerivedStateFromProps", state);
    return state;
  }

  getSnapshotBeforeUpdate(state) {
    console.log("getSnapshotBeforeUpdate", state);
    return state;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
