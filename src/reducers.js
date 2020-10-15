import {combineReducers} from 'redux';
import basketListReducer from './basketListReducer';
import userReducer from './userReducer'

const rootReducer = combineReducers({
    basketListReducer,
    userReducer
})

export default rootReducer;

