import React from 'react';

import Character from './Character';

const CharacterList = props => {
  // I spent a very long time tryng to debug this project. It turns out it was set up wrong in the first place. In addition to a change in reducers/index.js, it needed 'props.characters.characters.map' on line 11:
  return (
    <div>
      {props.characters && (
        <ul>
          {props.characters.characters.map(character => {
            return <Character key={character.name} character={character} />;
          })}
        </ul>
      )}
      {props.error && <p className='error'>{props.error}</p>}
      {!props.characters && !props.error && (
        <p>Component not rerendering upon FETCH_SWCHARS_SUCCESS</p>
      )}
    </div>
  );
};

export default CharacterList;
