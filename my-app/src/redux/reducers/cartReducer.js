import { ActionType } from "../ActionType";
const initialaiz = {
  Cart: [],
  total: "",
};
export const cartReducer = (state = initialaiz, action) => {
  switch (action.type) {
    case ActionType.ADD__CARD: {
      const item = {
        iteminfo: action.payload,
        amount: 1,
      };
      return {
        ...state,
        Cart: [...state.Cart, item],
      };
    }
    case ActionType.REMOVE__CARD: {
      const NewCard = state.Cart.filter((e) => e.id !== action.payload);
      return {
        ...state,
        Cart: NewCard,
      };
    }
    case ActionType.INCREMENT: {
      const newitem = state.Cart.map((el) => {
        if (el.iteminfo.id === action.payload) {
          return {
            ...el,
            amount: el.amount + 1,
          };
        }
        return el;
      });
      console.log(newitem);
      return {
        ...state,
        Cart: newitem,
      };
    }
    case ActionType.DECREMENT: {
      const newitem = state.Cart.map((el) => {
        if (el.iteminfo.id === action.payload) {
          return {
            ...el,
            amount: el.amount - 1,
          };
        }
        return el;
      }).filter((el) => el.amount !== 0);
      return {
        ...state,
        Cart: newitem,
      };
    }
    case ActionType.TOTAL: {
      var total = 0;
      state.Cart.map((el) => {
        total = total + el.iteminfo.price * el.amount;
      });
      return {
        ...state,
        total: total,
      };
    }
    default: {
      return state;
    }
  }
};
