export const types = {
  SET: 'BOOK/SET',
  CLEAR_ERRORS: 'BOOK/CLEAR_ERRORS',
  FETCH_START: 'BOOK/FETCH_START',
  FETCH_FULFILLED: 'BOOK/FETCH_FULFILLED',
  FETCH_REJECTED: 'BOOK/FETCH_REJECTED',
  CREATE_START: 'BOOK/CREATE_START',
  CREATE_FULFILLED: 'BOOK/CREATE_FULFILLED',
  CREATE_REJECTED: 'BOOK/CREATE_REJECTED',
  EDIT_START: 'BOOK/EDIT_START',
  EDIT_FULFILLED: 'BOOK/EDIT_FULFILLED',
  EDIT_REJECTED: 'BOOK/EDIT_REJECTED',
  DELETE_START: 'BOOK/DELETE_START',
  DELETE_FULFILLED: 'BOOK/DELETE_FULFILLED',
  DELETE_REJECTED: 'BOOK/DELETE_REJECTED',
};

export const initialState = {
  fetch: false,
  fetchSuccess: false,
  fetchError: null,
  create: false,
  createSuccess: false,
  createError: null,
  edit: false,
  editSuccess: false,
  editError: null,
  delete: false,
  deleteSuccess: false,
  deleteError: null,
  model: null,
};

export default function reducer(
  state = {
    ...initialState
  },
  action
) {
  switch (action.type) {

    case types.CLEAR_ERRORS:
      return {...initialState}

    case types.SET:
      return {
        ...state,
        model: action.data,
      }

    case types.DELETE_START:
      return {
        ...state,
        delete: true,
        deleteSuccess: false,
        deleteError: null,
      };

    case types.DELETE_FULFILLED:
      return {
        ...state,
        delete: false,
        deleteSuccess: true,
        model: initialState.model,
      };

    case types.DELETE_REJECTED:
      return {
        ...state,
        delete: false,
        deleteSuccess: false,
        deleteError: action.data,
      };

    case types.FETCH_START:
      return {
        ...state,
        fetch: true,
        fetchSuccess: false,
        fetchError: null,
      };

    case types.FETCH_FULFILLED:
      return {
        ...state,
        fetch: false,
        fetchSuccess: true,
        model: action.data,
      };

    case types.FETCH_REJECTED:
      return {
        ...state,
        fetch: false,
        fetchSuccess: false,
        fetchError: action.data,
      };

    case types.CREATE_START:
      return {
        ...state,
        create: true,
        createSuccess: false,
        createError: null,
      };

    case types.CREATE_FULFILLED:
      return {
        ...state,
        create: false,
        createSuccess: true,
        model: action.data,
      };

    case types.CREATE_REJECTED:
      return {
        ...state,
        create: false,
        createSuccess: false,
        createError: action.data,
      };

    case types.EDIT_START:
      return {
        ...state,
        edit: true,
        editSuccess: false,
        editError: null,
      };

    case types.EDIT_FULFILLED:
      return {
        ...state,
        edit: false,
        editSuccess: true,
        model: action.data,
      };

    case types.EDIT_REJECTED:
      return {
        ...state,
        edit: false,
        editSuccess: false,
        editError: action.data,
      };

    default:
      return state;
  }
}
