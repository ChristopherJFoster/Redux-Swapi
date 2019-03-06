// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCH_SWCHARS_START = 'FETCH_SWCHARS_START';
export const FETCH_SWCHARS_SUCCESS = 'FETCH_SWCHARS_SUCCESS';
export const FETCH_SWCHARS_FAIL = 'FETCH_SWCHARS_FAIL';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator

export const getSWChars = () => {
  dispatch({ type: FETCH_SWCHARS_START });
  axios.get('https://swapi.co/api/people/').then(console.log(res));
  // .then(res =>
  //   dispatch({ type: FETCH_SWCHARS_SUCCESS, payload: res.data.results })
  // )
  // .catch(res => dispatch({ type: FETCH_SWCHARS_FAIL, payload: err }));
};
