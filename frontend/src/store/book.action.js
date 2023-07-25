import {types} from "./book.reducer";
import {endpointAddress} from "../const";

/**
 *
 * @returns {(function(*): void)|*}
 */
export const clearErrors = () => {
  return dispatch => {
    dispatch({type: types.CLEAR_ERRORS});
  };
};

/**
 *
 * @param data
 * @returns {(function(*): void)|*}
 */
export const setBook = data => {
  return dispatch => {
    dispatch({type: types.SET, data});
  };
};

/**
 *
 * @param id
 * @returns {(function(*): Promise<void>)|*}
 */
export const fetchBook = id => {
  return async dispatch => {
    dispatch({type: types.FETCH_START});
    fetch(endpointAddress + '/books/' + id + '/')
      .then((response) => response.json())
      .then((data) => dispatch({type: types.FETCH_FULFILLED, data,}))
      .catch((error) => dispatch({type: types.FETCH_REJECTED, data: error,}));
  };
};

/**
 *
 * @param data
 * @returns {(function(*): Promise<void>)|*}
 */
export const createBook = data => {
  return async dispatch => {
    dispatch({type: types.CREATE_START, data});
    fetch(endpointAddress + '/books/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => dispatch({type: types.CREATE_FULFILLED, data,}))
      .catch((error) => dispatch({type: types.CREATE_REJECTED, data: error,}));
  };
};

/**
 *
 * @param id
 * @param data
 * @returns {(function(*): Promise<void>)|*}
 */
export const editBook = (id, data) => {
  return async dispatch => {
    dispatch({type: types.EDIT_START, data});
    fetch(endpointAddress + '/books/' + id + '/', {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => dispatch({type: types.EDIT_FULFILLED, data,}))
      .catch((error) => dispatch({type: types.EDIT_REJECTED, data: error,}));
  };
};

/**
 *
 * @param id
 * @returns {(function(*): Promise<void>)|*}
 */
export const deleteBook = id => {
  return async dispatch => {
    dispatch({type: types.DELETE_START});
    fetch(endpointAddress + '/books/' + id + '/', {
      method: "DELETE",
    })
      .then((response) => {
        dispatch({type: types.DELETE_FULFILLED, data: id,})
      })
      .catch((error) => {
        dispatch({type: types.DELETE_REJECTED, data: error,})
      });
  }
}