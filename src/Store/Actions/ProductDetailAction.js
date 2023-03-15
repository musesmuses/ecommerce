import axios from "axios";

import { PRODUCT_Detail_TYPES } from "../Types/index";

const { PRODUCT_Detail_REQUEST, PRODUCT_Detail_SUCCESS, PRODUCT_Detail_FAIL } =
  PRODUCT_Detail_TYPES;

export const detailProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_Detail_REQUEST });

    const product = await axios.get(`http://localhost:5000/products/${id}`);

    dispatch({
      type: PRODUCT_Detail_SUCCESS,
      payload: product.data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_Detail_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
