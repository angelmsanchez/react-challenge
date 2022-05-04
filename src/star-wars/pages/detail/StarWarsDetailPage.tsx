import React, { useEffect, useState } from 'react';

// import { useParams } from 'react-router-dom';

import './StarWarsDetailPage.scss';
import { starWarsService } from '../../services';
import { StarWarInterface } from '../../interfaces';

export default function StarWarsDetailPage(): JSX.Element {
  // const params = useParams();
  const [starWar, setStarWar] = useState<StarWarInterface>();

  const getDetail = async () => {
    try {
      // TODO FIND THE ID IN THE API
      const response = await starWarsService.getDetailPeople('1');
      // const response = await starWarsService.getDetailPeople(params.idStarWar);
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
      StarWarsDetailPage
      {starWar?.name}
    </section>
  );
}
