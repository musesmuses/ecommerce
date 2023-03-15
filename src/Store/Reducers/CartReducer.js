import { CART_TYPE } from "../Types/index";

const {
  ADD_TO_CART_ITEM,
  REMOVE_TO_CART_ITEM,
  DELETE_TO_CART_ITEM,
  CHECK_OUT,
} = CART_TYPE;

export const addToCartItemReducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART_ITEM:
      const item = action.payload;

      const itemPresent = state.cart?.find(
        (cartItem) => cartItem.id == item.id
      );

      if (itemPresent) {
        return {
          ...state,
          cart: state.cart.map((x) =>
            x.id === itemPresent.id
              ? {
                  ...x,
                  quantity: x.quantity + 1,
                  totalPrice: x.totalPrice + item.totalPrice,
                }
              : x
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, item],
        };
      }
    case REMOVE_TO_CART_ITEM:
      const idToRemoveItem = action.payload;

      const itemToRemove = state.cart?.find(
        (cartItem) => cartItem.id == idToRemoveItem
      );

      if (itemToRemove.quantity === 1) {
        return {
          ...state,
          cart: state.cart.filter((x) => x.id !== idToRemoveItem),
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((x) =>
            x.id === itemToRemove.id
              ? {
                  ...x,
                  quantity: x.quantity - 1,
                  totalPrice: x.totalPrice - x.price,
                }
              : x
          ),
        };
      }
    case DELETE_TO_CART_ITEM:
      const idToDeleteItem = action.payload;

      return {
        ...state,
        cart: state.cart.filter((x) => x.id !== idToDeleteItem),
      };

    case CHECK_OUT:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};
