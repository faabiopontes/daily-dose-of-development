import React from 'react';

class Main extends React.Component {
  state = {
    imageURL: '',
  };

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.filename.value);

    fetch('http://localhost:3000/upload', {}).then(response => {
      response.json().then(body => {
        this.setState({ imageURL: `http://localhost:8000/${body.file}` });
      });
    });
  }

  render() {
    return (
      <form onSubmit={this.handleUploadImage}>
        <div>
          <input
            ref={ref => {
              this.uploadInput = ref;
            }}
            type='file'
          />
        </div>
        <br />
        <div>
          <button>Upload</button>
        </div>
        <img src={this.state.imageURL} alt='img' />
      </form>
    );
  }
}

export default Main;
