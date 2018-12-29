import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: 40, long: 10 };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => console.log(err)
    );
  }

  // React says we have to define render!!
  render() {
    return (
      <div>
        <p>Latitude: {this.state.lat}</p>
        <p>Longitude: {this.state.long}</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
