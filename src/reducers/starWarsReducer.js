import {
  /* we need our action types here*/
  FETCH_SWCHARS_FETCHING,
  FETCH_SWCHARS_SUCCESS,
  FETCH_SWCHARS_FAILURE
} from '../actions';

const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  fetching: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_SWCHARS_FETCHING:
      console.log('FETCHING reducer');
      return { ...state, fetching: true, error: null };
    case FETCH_SWCHARS_SUCCESS:
      console.log('SUCCESS reducer');
      return { ...state, characters: action.payload, fetching: false };
    case FETCH_SWCHARS_FAILURE:
      console.log('FAILURE reducer');
      return { ...state, fetching: false, error: action.payload };
    default:
      console.log('default reducer');
      return state;
  }
};
