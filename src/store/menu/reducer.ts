import { TOGGLE_MENU } from './action-types';

const initialState = {
	opened: false
}

const menuReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case TOGGLE_MENU:
			return { opened: payload }

		default:
			return state;
	}
}

export default menuReducer;
