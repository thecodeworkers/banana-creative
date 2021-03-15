import { createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import reducers from './reducers';

const initStore = () => {
  const store = createStore(reducers);
  return store;
};

export default createWrapper(initStore);