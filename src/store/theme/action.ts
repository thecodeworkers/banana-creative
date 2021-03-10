import { CHANGE_THEME } from './action-types';

export const setTheme = (param: boolean) => {
	return {
		type: CHANGE_THEME,
		payload: param
	}
}
