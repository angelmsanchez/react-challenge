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
    navigate(`/star-wars/detail/${starWar.name}`);
  };

  return (
    <section className="star-war-card" onClick={goToDetail}>
      {starWar.name}
    </section>
  );
}
