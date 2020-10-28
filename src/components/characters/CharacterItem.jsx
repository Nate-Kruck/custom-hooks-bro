import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';


const CharacterItem = ({ name, imageUrl }) => (
  <figure>
    <img src={imageUrl} alt={name} />
    <div className={styles.details}>
      <figcaption>{name}</figcaption>
    </div>
  </figure>
);

CharacterItem.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
};

export default CharacterItem;
