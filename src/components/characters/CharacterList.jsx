import React from 'react';
import PropTypes from 'prop-types';
import { useCharacters } from '../../hooks/characters';
import { Link } from 'react-router-dom';
import CharacterItem from './CharacterItem';

const CharacterList = ({ page }) => {
  const { loading, characters } = useCharacters(page);
  if(loading) return <h1>Loading...</h1>;

  const characterElements = characters.map(character => (
    <li key={character.id}>
      <Link to={`/characters/${character.id}`}>
        <CharacterItem {...character} />
      </Link>
    </li>
  ));

  return (
    <ul data-testid="characters">
      {characterElements}
    </ul>
  );
};

CharacterList.propTypes = {
  page: PropTypes.number
};

export default CharacterList;
