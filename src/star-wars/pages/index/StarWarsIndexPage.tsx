import React, { useEffect, useState } from 'react';

// import './StarWarsIndexPage.scss';
import { starWarsService } from '../../services';
import { StarWarInterface } from '../../interfaces';
import { StarWarCard, StarWarFilter } from '../../components';

export default function StarWarsIndexPage(): JSX.Element {
  const [starWars, setStarWars] = useState<StarWarInterface[]>();

  const getList = async () => {
    try {
      const response = await starWarsService.getPeople();
      setStarWars(response.results);
    } catch {
      // TODO show alert o some feature about error
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <section className="star-wars-index-page">
      <h4>Star Wars List</h4>
      <StarWarFilter
        starWars={starWars}
        sortStarWars={setStarWars}
      />
      {starWars && starWars.length > 0 && starWars.map((starWar) => (
        <StarWarCard
          key={starWar.name}
          starWar={starWar}
        />
      ))}
    </section>
  );
}
