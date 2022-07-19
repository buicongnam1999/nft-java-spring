import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// import userReducer from "./user/user.reducer";
// import common from "./common/commonReducer";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    // user: userReducer,
    // common,
  });

export default rootReducer;