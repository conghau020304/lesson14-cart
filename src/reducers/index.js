import { combineReducers } from "redux";
import products from "./product.reducer";
import cart from "./cart.reducer";

const appReducers = combineReducers({
  products,
  cart
});

export default appReducers;
