import React from 'react';

export default class Canvas extends React.Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    const img = this.refs.image;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      ctx.font = '18px Courier';
      ctx.fillText("A round cheese on it's natural habitat", 75, 75);
    };
  }

  render() {
    return (
      <div>
        <canvas id='canvas' ref='canvas' width={640} height={425} />
        <img
          ref='image'
          src={this.props.img}
          alt={this.props.text}
          style={{display: 'none'}}
        />
      </div>
    );
  }
}
