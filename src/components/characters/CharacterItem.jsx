import React from 'react';
import PropTypes from 'prop-types';

const CharacterItem = ({ name, imageUrl }) => (
  <figure>
    <img src={imageUrl} alt={name} />
    <figcaption>{name}</figcaption>
  </figure>
);

CharacterItem.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
};

export default CharacterItem;
