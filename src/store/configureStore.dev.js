import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers';
import clientMiddleware from './clientMiddleware';

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

const configureStore = (preloadedState, client) => {
  // Build the middleware for intercepting and dispatching navigation actions
  const reduxRouterMiddleware = routerMiddleware(history);

  const store = createStore(
    rootReducer,
    preloadedState,
    compose(applyMiddleware(clientMiddleware(client), reduxRouterMiddleware, createLogger())),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;
