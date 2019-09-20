import React from 'react';

class Main extends React.Component {
  state = {
    imageURL: '',
  };

  handleUploadImage = async ev => {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);

    const response = await fetch('http://localhost:8000/upload', {
      method: 'POST',
      body: data,
    });
    const body = await response.json();
    this.setState({ imageURL: `http://localhost:8000/${body.file}` });
  };

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
        <div>
          <input
            ref={ref => {
              this.fileName = ref;
            }}
            type='text'
            placeholder='Enter the desired name of file'
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
