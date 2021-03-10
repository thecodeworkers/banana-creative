import { TOGGLE_MENU } from './action-types';

export const unfoldMenu = (param: boolean) => {
	return {
		type: TOGGLE_MENU,
		payload: param
	}
}
