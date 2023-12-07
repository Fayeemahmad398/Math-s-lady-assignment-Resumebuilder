import { createStore, combineReducers } from "redux";
import reducer from "./reducers/reducer";



const AllReducers = combineReducers({ reducer: reducer });
export const store = createStore(AllReducers);