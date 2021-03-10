import { combineReducers } from "redux";
import themeReducer from './theme/reducer';
import toggleReducer from './toggle/reducer';
import menuReducer from './menu/reducer';
import loaderReducer from './loader/reducer';

const reducers = combineReducers({
	toggle: toggleReducer,
	theme: themeReducer,
	menu: menuReducer,
	loader: loaderReducer
})

export default reducers;
