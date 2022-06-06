import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// Create store je deprecated. Ako dođe do problema potrebno je koristiti configure store
// const store = configureStore(reducers, compose(applyMiddleware(thunk)))
 const store = createStore(reducers, compose(applyMiddleware(thunk)))
const root = ReactDOMClient.createRoot(document.getElementById('root'));

  root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
);