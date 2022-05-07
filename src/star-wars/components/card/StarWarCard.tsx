import React from 'react';

import { useNavigate } from 'react-router-dom';

import './StarWarCard.scss';
import { StarWarInterface } from '../../interfaces';

interface Props {
  starWar: StarWarInterface;
}

export function StarWarCard(props: Props): JSX.Element {
  const { starWar } = props;
  const navigate = useNavigate();

  const goToDetail = (): void => {
    navigate(`/star-wars/detail/${starWar.id}`);
  };

  return (
    <section className="star-war-card" onClick={goToDetail}>
      <h6 className="star-war-card__name">{starWar.name}</h6>
      <p><span>Hair Color:</span> {starWar.hair_color}</p>
      <p><span>Gender:</span> {starWar.gender}</p>
      <p><span>Height:</span> {starWar.height}</p>
      <div className="star-war-card__transition-container">Go To Detail</div>
    </section>
  );
}
