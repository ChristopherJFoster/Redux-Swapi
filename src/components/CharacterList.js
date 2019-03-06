import React from 'react';

import Character from './Character';

const CharacterList = props => {
  return (
    <div>
      {props.characters && (
        <ul>
          {props.characters.map(character => {
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
