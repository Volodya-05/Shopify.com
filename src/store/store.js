import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import ShopReducer from "../redux/reducer";


const reducers = combineReducers({
    shopData:ShopReducer

})


const store = createStore(reducers, applyMiddleware(thunk))


export default store