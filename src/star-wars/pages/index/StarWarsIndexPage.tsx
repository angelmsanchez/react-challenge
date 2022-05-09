import React, { useEffect, useState } from 'react';

import './StarWarsIndexPage.scss';
import { starWarsService } from '../../services';
import { StarWarInterface } from '../../interfaces';
import { StarWarCard, StarWarFilter } from '../../components';
import { Spinner } from '../../../shared/components';

export default function StarWarsIndexPage(): JSX.Element {
  const [originalStarWars, setOriginalStarWars] = useState<StarWarInterface[]>();
  const [filterStarWars, setFilterStarWars] = useState<StarWarInterface[]>();

  const getList = async () => {
    try {
      const response = await starWarsService.getPeople();
      const responseWithId = starWarsService.setIdByIndex(response.results);
      setOriginalStarWars(responseWithId);
      setFilterStarWars(responseWithId);
    } catch {
      // TODO show alert o some feature about error
    }
  };

  const handleFilterStarWars = (starWars: StarWarInterface[]) => {
    setFilterStarWars(starWars);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <section className="star-wars-index-page">
      <h4>Star Wars List</h4>
      <StarWarFilter
        originalStarWars={originalStarWars}
        filterStarWars={filterStarWars}
        handleSetDefault={() => { if (originalStarWars) setFilterStarWars([...originalStarWars]); }}
        handleSortByTitle={setFilterStarWars}
        handleFilterColorHair={handleFilterStarWars}
      />
      <div className="star-wars-index-page__cards">
        {filterStarWars && filterStarWars.length > 0 && filterStarWars.map((starWar) => (
          <StarWarCard
            key={starWar.name}
            starWar={starWar}
          />
        ))}
      </div>
      {!filterStarWars && (<Spinner />)}
    </section>
  );
}
