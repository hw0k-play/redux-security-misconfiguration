import { createStore } from 'redux';
import rootReducer from '../reducers';

const reduxDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(rootReducer, reduxDevTools && reduxDevTools());

export default store;
