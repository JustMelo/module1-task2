import React from 'react';
import PropTypes from 'prop-types';

export default class ShopItemClass extends React.Component {

  static propTypes = {
    brand: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }
  
  render() {

    const { brand, price, ...item } = this.props;

    return (
      <div className="main-content">
        <h2>{brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div className="description"> {item.descriptionFull} </div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay"></div>
        </div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{item.currency}{price + '.00'}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    )
  }
};