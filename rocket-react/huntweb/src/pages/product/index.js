import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Product extends Component {
  state = {
    product: {},
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await api.get(`/products/${id}`);

    this.setState({ product: response.data });
  }

  loadProduct = async (page = 1) => {
    console.log("loadProduct");
    const response = await api.get(`/products?page=${page}`);
    const { docs, ...productInfo } = response.data;

    this.setState({
      products: docs,
      productInfo: productInfo,
      page: page,
    });

    console.log(response.data.docs);
  };

  render() {
    const { product } = this.state;

    return (
      <div className="product-info">
        <h1>{product.title}</h1>
        <p>{product.description}</p>

        <p>
          URL: <a href="{product.url}">{product.url}</a>
        </p>

      </div>
    )
  }
}