import { ActionType } from "../ActionType";
import { Items } from "../../data";
const initialaiz = {
  products: Items,
  favProducts: [],
};

export const ProductReducer = (state = initialaiz, action) => {
  switch (action.type) {
    case ActionType.GETALL__PRODUCT: {
      return {
        ...state,
        products: Items,
      };
    }
    case ActionType.FILTER__PRODUCT: {
      const NewProducts = Items.filter((e) => e.itemId === action.payload);
      return {
        ...state,
        products: NewProducts,
      };
    }
    case ActionType.FAV__PRODUCT: {
      return {
        ...state,
        favProducts: [...state.favProducts, action.payload],
      };
    }
    case ActionType.REMOVE__FAV: {
      console.log("giga");
      const NewfavProducts = state.favProducts.filter(
        (e) => e.id !== action.payload
      );
      return {
        ...state,
        favProducts: NewfavProducts,
      };
    }
    default: {
      return state;
    }
  }
};
