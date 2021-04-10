import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import { createLogger } from "redux-logger"
import { composeWithDevTools } from "redux-devtools-extension"
import { rootReducer } from "../reducers"

const loggerMiddleware = createLogger()

const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
const store = createStore(rootReducer, {}, middleware)

// eslint-disable-next-line prefer-destructuring
const dispatch = store.dispatch

export { store, dispatch }
