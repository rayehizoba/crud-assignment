import {types} from "./books.reducer";
import {endpointAddress} from "../const";

/**
 *
 * @returns {function(*): Promise<AxiosResponse<T> | never>}
 */
export const fetchBooks = () => {
  return dispatch => {
    dispatch({type: types.FETCH_START});
    fetch(endpointAddress + '/books/')
      .then((response) => response.json())
      .then((data) => dispatch({type: types.FETCH_FULFILLED, data,}))
      .catch((error) => dispatch({type: types.FETCH_REJECTED, data: error,}));
  };
};
