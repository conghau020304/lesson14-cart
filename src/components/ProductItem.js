import React, { Component } from "react";

class ProductItem extends Component {
  showRating(rating) {
    let result = [];
    for (let i = 1; i <= rating; i++) {
      result.push(<i key={i + Math.random()} className="fa fa-star" />);
    }
    for (let i = 1; i <= 5 - rating; i++) {
      result.push(<i key={i + Math.random()} className="fa fa-star-o" />);
    }
    return result;
  }
  render() {
    const { product } = this.props;
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={product.img} className="img-fluid" alt="" />
            <a>
              <div className="mask waves-light waves-effect waves-light" />
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a>{product.name}</a>
              </strong>
            </h4>
            <ul className="rating">
              <li>{this.showRating(product.rating)}</li>
            </ul>
            <p className="card-text">{product.description}</p>
            <div className="card-footer">
              <span className="left">{product.price}$</span>
              <span className="right">
                <button
                  className="btn-floating blue-gradient"
                  data-toggle="tooltip"
                  data-placement="top"
                  title
                  data-original-title="Add to Cart"
                  onClick={() => this.onAddToCart(product)}
                >
                  <i className="fa fa-shopping-cart" />
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  onAddToCart = product => {
    this.props.onAddToCart(product);
  };
}
export default ProductItem;
