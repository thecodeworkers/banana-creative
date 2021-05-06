import { SET_LANGUAGE, SET_RESOURCES, } from './action-types'
import { actionObject } from '../../utils'
import { resources } from '../../graphql/query'


export const getResources: any = () => async (dispatch, getState) => {
  const { resource: { language } } = getState()
  const allResources = await resources(language)
  dispatch(actionObject(SET_RESOURCES, allResources))
}

export const changeLanguage: any = (language) => async (dispatch) => {
  const allResources = await resources(language);

  dispatch(actionObject(SET_RESOURCES, allResources));
  dispatch(actionObject(SET_LANGUAGE, language))
}
