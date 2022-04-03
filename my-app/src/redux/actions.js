import { ActionType } from "./ActionType";

export const getProduct = () => {
  return {
    type: ActionType.GETALL__PRODUCT,
  };
};
export const favProduct = (item) => {
  return {
    type: ActionType.FAV__PRODUCT,
    payload: item,
  };
};
export const fillterProduct = (id) => {
  return {
    type: ActionType.FILTER__PRODUCT,
    payload: id,
  };
};
export const removeFav = (id) => {
  return {
    type: ActionType.REMOVE__FAV,
    payload: id,
  };
};

export const addCard = (item) => {
  return {
    type: ActionType.ADD__CARD,
    payload: item,
  };
};
export const removeCard = (id) => {
  return {
    type: ActionType.REMOVE__CARD,
    payload: id,
  };
};

export const increment = (id) => {
  return {
    type: ActionType.INCREMENT,
    payload: id,
  };
};
export const decrement = (id) => {
  return {
    type: ActionType.DECREMENT,
    payload: id,
  };
};

export const totalPrice = () => {
  return {
    type: ActionType.TOTAL,
  };
};

export const selectMode = (mode) => {
  return {
    type: ActionType.SELECT__MODE,
    payload: mode,
  };
};

export const selectColor = (color, id) => {
  return {
    type: ActionType.SELECT__COLOR,
    payload: {
      color,
      id,
    },
  };
};
