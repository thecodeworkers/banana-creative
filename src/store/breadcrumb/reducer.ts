import { BREADCRUMB_CHANGE } from "./action-types";

const initialState = {
	color: '#000000',
	text: 'Welcome'
}

export default (state = initialState, { type, payload }) => {

  switch(type) {
    case BREADCRUMB_CHANGE:
    return {...state, ...payload }

    default:
    return state;
  }
}
