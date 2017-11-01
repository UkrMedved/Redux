import {combineReducers} from "redux";
import hello from "./hello";
import backgr from "./color";

const reducer = combineReducers({
   hello,
   backgr
});

export default reducer;