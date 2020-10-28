import React from 'react';
import { useState } from 'react';
import CharacterList from '../components/characters/CharacterList';

const CharacterPage = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <button
        onClick={() => setPage(page => page - 1)}
        disabled={page <= 1}
      >prev</button>
      <button onClick={() => setPage(page => page + 1)}>next</button>
      <CharacterList page={page} />
    </>
  );
};

export default CharacterPage;
