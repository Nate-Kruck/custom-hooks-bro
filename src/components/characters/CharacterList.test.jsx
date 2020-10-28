import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CharacterList from './CharacterList';
import { getCharacters } from '../../services/rickAndMortyApi';

jest.mock('../../services/rickAndMortyApi.js');

describe('CharacterList component', () => {
  it('displays a list of characters', async() => {
    act(() => {
      getCharacters.mockResolvedValue([
        { id: 1, name: 'Rick', imageUrl: 'rick.png' }
      ]);
      render(<MemoryRouter>
        <CharacterList />
      </MemoryRouter>);
      screen.getByText('Loading...');
    
    });
    const characterList = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(characterList).not.toBeEmptyDOMElement();
    });
  });
});
