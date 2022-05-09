import React, { useEffect, useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import './StarWarsDetailPage.scss';
import { starWarsService } from '../../services';
import { StarWarInterface } from '../../interfaces';
import { Button, Spinner } from '../../../shared/components';

export default function StarWarsDetailPage(): JSX.Element {
  const params = useParams();
  const navigate = useNavigate();
  const [starWar, setStarWar] = useState<StarWarInterface>();

  const getDetail = async () => {
    try {
      const response = await starWarsService.getDetailPeople(params.idStarWar);
      setStarWar(response);
    } catch {
      // TODO show alert o some feature about error
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <section className="star-wars-detail-page">
      <Button
        handleClick={() => {
          navigate('/star-wars');
        }}
      >
        <>
          Go List Star Wars
        </>
      </Button>
      {starWar && (
        <div className="star-wars-detail-page__data">
          <p><span>Name:</span> {starWar.name}</p>
          <p><span>Hair Color:</span> {starWar.hair_color}</p>
          <p><span>Eye Color:</span> {starWar.eye_color}</p>
          <p><span>Skin Color:</span> {starWar.skin_color}</p>
          <p><span>Gender:</span> {starWar.gender}</p>
          <p><span>Height:</span> {starWar.height}</p>
          <p><span>Mass:</span> {starWar.mass}</p>
          <p><span>Birth Year:</span> {starWar.birth_year}</p>
        </div>
      )}
      {!starWar && (<Spinner />)}
    </section>
  );
}
