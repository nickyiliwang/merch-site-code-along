import { combineReducers } from "redux";
// persist
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //localStorage

import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import directoryReducer from "./directory/directoryReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"] // setting which reducers you want to persist
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer
});

// now its persistent because the fn returns it with the ability
export default persistReducer(persistConfig, rootReducer);
