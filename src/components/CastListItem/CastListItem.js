import React from 'react';

const CastListItem = ({ data }) => {
  const { profile_path, character, name } = data;

  return (
    <li>
      {profile_path && (
        <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt="" />
      )}
      <p>{name}</p>
      <p>Character:{character}</p>
    </li>
  );
};

export default CastListItem;
