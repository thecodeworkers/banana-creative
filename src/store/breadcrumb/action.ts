import { BREADCRUMB_CHANGE } from './action-types';

export const changeBreadcrumb = (load: any) => {
  return {
    type: BREADCRUMB_CHANGE,
    payload: load
  }
}
