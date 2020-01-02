import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductContainer from "./containers/ProductContainer";
import CartContainer from "./containers/CartContainer";
import Message from "./components/Message";

class App extends Component {
  render() {
    return (
      <div>
        {/* Header */}
        <Header />
        <main id="mainContainer">
          <div className="container">
            {/* Products */}
            <ProductContainer />
            {/* Message */}
            <Message />
            {/* Cart */}
            <CartContainer />
          </div>
        </main>
        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
