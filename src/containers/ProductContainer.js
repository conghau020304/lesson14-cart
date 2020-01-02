import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../components/Product";
import ProductItem from "../components/ProductItem";
import PropTypes from "prop-types";
import { onAddToCart } from "../actions/ActionType";

class ProductContainer extends Component {
  showProducts(products) {
    let result = null;
    let { onAddToCart } = this.props;
    if (products) {
      result = products.map(p => {
        return <ProductItem key={p.id} product={p} onAddToCart={onAddToCart} />;
      });
    }
    return result;
  }

  render() {
    const { products } = this.props;
    return <Product>{this.showProducts(products)}</Product>;
  }
}

const mapSateToProps = state => {
  return {
    products: state.products
  };
};

ProductContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      img: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.number,
      inventory: PropTypes.number,
      rating: PropTypes.number
    })
  ).isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onAddToCart: product => {
      dispatch(onAddToCart(product, 1));
    }
  };
};

export default connect(mapSateToProps, mapDispatchToProps)(ProductContainer);
