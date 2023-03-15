import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailReducer,
  addToCartItemReducer,
} from "./Reducers/index";

const cartFromStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

console.log(cartFromStorage);

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
  Cart: addToCartItemReducer,
});

const initialState = {
  Cart: {
    cart: cartFromStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
