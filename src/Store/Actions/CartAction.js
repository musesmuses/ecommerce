import axios from "axios";

import { CART_TYPE } from "../Types/index";

const {
  ADD_TO_CART_ITEM,
  REMOVE_TO_CART_ITEM,
  CHECK_OUT,
  DELETE_TO_CART_ITEM,
} = CART_TYPE;

export const addToCart = (id) => async (dispatch, getState) => {
  const res = await axios.get(`http://localhost:5000/products/${id}`);

  dispatch({
    type: ADD_TO_CART_ITEM,
    payload: res.data,
  });

  localStorage.setItem("cart", JSON.stringify(getState().Cart.cart));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_TO_CART_ITEM,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().Cart.cart));
};
export const deleteItem = (id) => (dispatch, getState) => {
  dispatch({
    type: DELETE_TO_CART_ITEM,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().Cart.cart));
};

export const checkOut = () => (dispatch, getState) => {
  dispatch({
    type: CHECK_OUT,
  });

  localStorage.setItem("cart", JSON.stringify(getState().Cart.cart));
};
