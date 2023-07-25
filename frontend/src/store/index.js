import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import books from './books.reducer';
import book from './book.reducer';

const reducers = combineReducers({
  books,
  book,
});

const middlewareComponents = [
  thunk,
];

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  middlewareComponents.push(logger);
}

const middleware = applyMiddleware(...middlewareComponents);

const store = createStore(reducers, middleware);

export default store;
