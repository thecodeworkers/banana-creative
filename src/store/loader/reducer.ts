import { LOADER, ANIMATION } from './action-types';

const initialState = {
	loader: false,
	animation: false,
	menuAnimation: false
}

export default (state = initialState, {type, payload}) => {
	switch(type){
		case LOADER:
			return { ...state, loader: payload }

		case ANIMATION:
			return { ...state, animation: payload }

		default:
			return state
	}
}
