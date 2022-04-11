import { combineReducers } from "redux";
import themeReducer from './theme/reducer';
import toggleReducer from './toggle/reducer';
import menuReducer from './menu/reducer';
import loaderReducer from './loader/reducer';
import breadcrumbReducer from './breadcrumb/reducer';
import pageReducer from './page/reducer'
import resource from './resource/reducer'

const reducers = combineReducers({
	toggle: toggleReducer,
	theme: themeReducer,
	menu: menuReducer,
	loader: loaderReducer,
	breadcrumb: breadcrumbReducer,
	page: pageReducer,
  resource
})

export default reducers;
