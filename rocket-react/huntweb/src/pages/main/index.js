import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Main extends Component {
  state = {
    products: [],
    productInfo: {},
    page: 1,
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    console.log("loadProducts");
    const response = await api.get(`/products?page=${page}`);
    const { docs, ...productInfo } = response.data;

    this.setState({
      products: docs,
      productInfo: productInfo,
      page: page,
    });

    console.log(response.data.docs);
  };

  prevPage = () => {
    const { page, productInfo } = this.state;

    if (page === 1) return;

    const prevPage = page - 1;

    this.loadProducts(prevPage);
  }

  nextPage = () => {
    const { page, productInfo } = this.state;
    debugger;

    if (page === productInfo.pages) return;

    const nextPage = page + 1;

    this.loadProducts(nextPage);
  }

  render() {
    const { products, page, productInfo } = this.state;
    return (
      <div className="product-list">
        {products.map(product => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>
            <a href="">Acessar</a>
          </article>
        ))}
        <div className="actions">
          <button
            disabled={page === 1}
            onClick={this.prevPage}
          >
            Anterior
          </button>
          <button
            disabled={page === productInfo.pages}
            onClick={this.nextPage}
          >
            Próxima
          </button>
        </div>
      </div>
    )
  }
}