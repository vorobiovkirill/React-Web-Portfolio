import MainReducer from './MainReducer';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// main reducer function
const rootReducer = combineReducers({
	routing: routerReducer,
	MainReducer,
});

export default rootReducer;
