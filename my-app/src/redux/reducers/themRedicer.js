import { ActionType } from "../ActionType";

export const themReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionType.SELECT__MODE: {
      return {
        ...state,
        mode: action.payload,
      };
    }
    case ActionType.SELECT__COLOR: {
      return {
        ...state,
        color: action.payload.color,
        chart: action.payload.id,
      };
    }
    default:
      return state;
  }
};
