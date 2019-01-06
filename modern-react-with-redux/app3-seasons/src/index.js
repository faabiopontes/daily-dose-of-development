import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, long: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        console.log(err);
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // React says we have to define render!!
  render() {
    console.log("My component render function was called");
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    return <div>Loading!</div>;
  }

  componentDidMount() {
    console.log("My component was rendered to the screen");
  }

  componentDidUpdate() {
    console.log("My component was just updated - it re-rendered!");
  }

  shouldComponentUpdate() {
    console.log("My component is considering if it should be re-rendered or not");
    return true;
  }

  static getDerivedStateFromProps(state) {
    console.log("getDerivedStateFromProps",state);
    return state
  }

  getSnapshotBeforeUpdate(state) {
    console.log("getSnapshotBeforeUpdate",state);
    return state;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
