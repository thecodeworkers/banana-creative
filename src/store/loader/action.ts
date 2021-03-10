import { LOADER, ANIMATION } from './action-types';

export const setLoader = (param: boolean) => {
	return {
		type: LOADER,
		payload: param
	}
}

export const setAnimationState = (param: boolean) => {
	return {
		type: ANIMATION,
		payload: param
	}
}
