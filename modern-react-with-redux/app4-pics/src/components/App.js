import React from "react";
import axios from "axios";

import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };

  // With Promises
  // onSearchSubmit = term => {
  //   this.doSearchRequest(term).then(response => {
  //     console.log(response.data.results);
  //   });
  // };

  // With Async Await
  onSearchSubmit = async term => {
    const response = await this.doSearchRequest(term);
    console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  doSearchRequest = term => {
    return axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID a89b149c83299372d4e87e31219ad561fef12ebd12f07e7a1b3660910e9cfa1f"
      }
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
