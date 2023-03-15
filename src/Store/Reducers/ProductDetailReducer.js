import { PRODUCT_Detail_TYPES } from "../Types/index";

const { PRODUCT_Detail_REQUEST, PRODUCT_Detail_SUCCESS, PRODUCT_Detail_FAIL } =
  PRODUCT_Detail_TYPES;

export const productDetailReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_Detail_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_Detail_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_Detail_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
