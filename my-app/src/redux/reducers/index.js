import { combineReducers } from "redux";
import { ProductReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";
import { themReducer } from "./themRedicer";
const rootReducer = combineReducers({
  Food: ProductReducer,
  FoodCard: cartReducer,
  Them: themReducer,
});

export default rootReducer;
