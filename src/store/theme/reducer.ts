import { CHANGE_THEME } from './action-types';

const initialState = {
	theme: false
}

const themeReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case CHANGE_THEME:
			return { theme: payload }

		default:
			return state;
	}
}

export default themeReducer;
