import { legacy_createStore as createStore, combineReducers } from "redux";
import reducerUser from "./user/reducers";
import reducerModal from "./modalState/reducers";

const reducers = combineReducers({ user: reducerUser, modal: reducerModal });

const store = createStore(reducers);

export default store;
