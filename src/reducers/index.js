import { combineReducers } from 'redux';
import { charsReducer } from './starWarsReducer';

export default combineReducers({
  // I spent a very long time tryng to debug this project. It turns out it was set up wrong in the first place. In addition to a change in CharacterList.js, it needed 'characters: ' here:
  characters: charsReducer
});
