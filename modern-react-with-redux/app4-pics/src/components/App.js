import React from "react";

import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";

class App extends React.Component {
  state = { images: [] };

  // With Promises
  // onSearchSubmit = term => {
  //   this.doSearchRequest(term).then(response => {
  //     this.setState({ images: response.data.results });
  //   });
  // };

  // With Async Await
  onSearchSubmit = async term => {
    const response = await this.doSearchRequest(term);
    this.setState({ images: response.data.results });
  };

  doSearchRequest = term => {
    return unsplash.get('/search/photos', {
      params: { query: term }
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
