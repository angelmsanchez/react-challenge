import React, { useEffect, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import './WarriorDetailPage.scss';
import { warriorsService } from '../../services';
import { WarriorInterface } from '../../interfaces';
import { Button, Spinner } from '../../../shared/components';

export default function WarriorDetailPage(): JSX.Element {
  const params = useParams();
  const navigate = useNavigate();
  const [Warrior, setWarrior] = useState<WarriorInterface>();

  const getDetail = async () => {
    try {
      const response = await warriorsService.getDetailPeople(params.idWarrior);
      setWarrior(response);
    } catch {
      // TODO show alert o some feature about error
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <section className="warriors-detail-page">
      <Button
        handleClick={() => {
          navigate('/warriors');
        }}
      >
        <>
          Go List Warriors
        </>
      </Button>
      {Warrior && (
        <div className="warriors-detail-page__data">
          <p><span>Name:</span> {Warrior.name}</p>
          <p><span>Hair Color:</span> {Warrior.hair_color}</p>
          <p><span>Eye Color:</span> {Warrior.eye_color}</p>
          <p><span>Skin Color:</span> {Warrior.skin_color}</p>
          <p><span>Gender:</span> {Warrior.gender}</p>
          <p><span>Height:</span> {Warrior.height}</p>
          <p><span>Mass:</span> {Warrior.mass}</p>
          <p><span>Birth Year:</span> {Warrior.birth_year}</p>
        </div>
      )}
      {!Warrior && (<Spinner />)}
    </section>
  );
}
