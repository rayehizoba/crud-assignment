import {types as bookTypes} from "./book.reducer";

export const types = {
  FETCH_START: "BOOKS/FETCH_START",
  FETCH_FULFILLED: "BOOKS/FETCH_FULFILLED",
  FETCH_REJECTED: "BOOKS/FETCH_REJECTED",
};

const initialState = {
  collection: [],
};

export default function reducer(state = {...initialState}, action) {
  switch (action.type) {

    case bookTypes.DELETE_FULFILLED:
      return {
        ...state,
        collection: state.collection.filter(book => book.id !== action.data)
      }

    case bookTypes.CREATE_FULFILLED:
      return {
        ...state,
        collection: [...state.collection, action.data],
      };

    case bookTypes.EDIT_FULFILLED:
      return {
        ...state,
        collection: state.collection.map(book => {
          if (book.id === action.data.id) {
            return action.data;
          }
          return book;
        })
      };

    case types.FETCH_START:
      return {
        ...state,
        fetch: true,
        fetchSuccess: false,
        fetchError: null
      };

    case types.FETCH_FULFILLED:
      return {
        ...state,
        fetch: false,
        fetchSuccess: true,
        collection: action.data,
      };

    case types.FETCH_REJECTED:
      return {
        ...state,
        fetch: false,
        fetchSuccess: false,
        fetchError: action.data
      };

    default:
      return state;
  }
}
