import {combineReducers} from 'redux';
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {contactReducer} from "../reducers/contactReducer";


const persistConfig = {
    key:"root",
    storage,
    whiteList:["contactRed"]
}

const rootReducer = combineReducers({
    contactRed: contactReducer,
  });

export default persistReducer(persistConfig,rootReducer);