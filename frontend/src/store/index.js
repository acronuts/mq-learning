import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';


//const store = createStore(reducer, composeWithDevTools(
  //applyMiddleware(thunk),
 // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//));

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;