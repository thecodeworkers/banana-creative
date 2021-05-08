import { SET_LANGUAGE, SET_RESOURCES, } from './action-types'
import { actionObject } from '../../utils'
import { pages, resources } from '../../graphql/query'
import { GET_PAGES } from '@store/page/action-types'

export const getResources: any = () => async (dispatch, getState) => {  
  const { resource: { language }, page } = getState()
  const allResources = await resources(language)
  const result: any = await pages('welcomePage', language)
  page['welcomePage'] = result;
  page.currentPage = 'welcomePage';
  page.currentData = 'welcome';

  dispatch(actionObject(SET_RESOURCES, allResources))
  dispatch(actionObject(GET_PAGES, page))
}

export const changeLanguage: any = (language) => async (dispatch, getState) => {

  const { page } = getState()

  const allResources = await resources(language);
  const result: any = await pages(page.currentPage, language)
  page[page.currentPage] = result;
  
  dispatch(actionObject(SET_RESOURCES, allResources));
  dispatch(actionObject(SET_LANGUAGE, language))
  dispatch(actionObject(GET_PAGES, page))
}
