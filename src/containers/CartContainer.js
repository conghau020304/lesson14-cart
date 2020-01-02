import { connect } from "react-redux";
import React, { Component } from "react";
import PropTypes from "prop-types";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import * as Message from "../actions/Message";

class CartContainer extends Component {
  render() {
    const { cart } = this.props;
    return (
      <Cart>
        {this.showCart(cart)}
        {this.showTotalAmount(cart)}
      </Cart>
    );
  }

  showCart(cart) {
    let result = Message.MSG_CART_EMPTY;
    if (cart.length > 0) {
      result = cart.map((c, index) => {
        return <CartItem key={index} item={c} />;
      });
    }
    return result;
  }
  showTotalAmount(cart) {
    let result = null;
    if (cart) {
      result = <CartResult cart={cart} />;
    }
    return result;
  }
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        img: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        inventory: PropTypes.number,
        rating: PropTypes.number
      }).isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps, null)(CartContainer);
