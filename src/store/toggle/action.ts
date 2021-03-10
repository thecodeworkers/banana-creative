import { CHANGE_TOGGLE } from './action-types';

export const changeToggle = (load: any) => {
  return {
    type: CHANGE_TOGGLE,
    payload: load
  }
}
