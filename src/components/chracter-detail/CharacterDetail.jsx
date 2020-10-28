import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacterById } from '../../hooks/characters';

const CharacterDetail = () => {
  const { id } = useParams();
  const { loading, character } = useCharacterById(id);
  if(loading) return <h1>Loading...</h1>;
  console.log(character);

  return (
    <>
      <p>{character.name}</p>
      <p>{character.status}</p>
      <p>{character.species}</p>
      <img src={character.imageUrl} alt={character.name} />
    </>
  );
};

export default CharacterDetail;
