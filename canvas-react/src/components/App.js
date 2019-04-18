import React from 'react';
import Canvas from './Canvas';

export default class App extends React.Component {
  render() {
    return (
      <Canvas
        img='https://www.featurepics.com/StockImage/20120921/round-cheese-stock-image-2355595.jpg'
        text='A round cheese on its natural habitat'
      />
    );
  }
}
