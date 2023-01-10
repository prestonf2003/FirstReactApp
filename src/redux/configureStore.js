import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //add support for Redux Devtools
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
