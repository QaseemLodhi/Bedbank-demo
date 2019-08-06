import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

export function configureStore(initialState = {}) {
  const { REACT_APP_DEPLOYMENT_ENVIRONMENT: TARGET_ENV } = process.env;

  const middleware = [thunk];

  let enhancer = null;
  if (
    TARGET_ENV !== "production" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ) {
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(...middleware));
  } else {
    const eas = [applyMiddleware(...middleware)];
    enhancer = compose(...eas);
  }
  const store = createStore(rootReducer, initialState, enhancer);

  return store;
}
