import React from 'react';

import { useNavigate } from 'react-router-dom';

import './WarriorCard.scss';
import { WarriorInterface } from '../../interfaces';

interface Props {
  Warrior: WarriorInterface;
}

export function WarriorCard(props: Props): JSX.Element {
  const { Warrior } = props;
  const navigate = useNavigate();

  const goToDetail = (): void => {
    navigate(`/warriors/detail/${Warrior.id}`);
  };

  return (
    <section className="star-war-card" onClick={goToDetail}>
      <h6 className="star-war-card__name">{Warrior.name}</h6>
      <p><span>Hair Color:</span> {Warrior.hair_color}</p>
      <p><span>Gender:</span> {Warrior.gender}</p>
      <p><span>Height:</span> {Warrior.height}</p>
      <div className="star-war-card__transition-container">Go To Detail</div>
    </section>
  );
}
