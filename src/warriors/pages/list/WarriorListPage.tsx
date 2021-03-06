import React, { useEffect, useState } from 'react';

import './WarriorListPage.scss';
import { warriorsService } from '../../services/warriors.service';
import { WarriorInterface } from '../../interfaces';
import { WarriorCard, WarriorFilter } from '../../components';
import { Spinner } from '../../../shared/components';

export default function WarriorListPage(): JSX.Element {
  const [originalWarriors, setOriginalWarriors] = useState<WarriorInterface[]>();
  const [filterWarriors, setFilterWarriors] = useState<WarriorInterface[]>();

  const getList = async () => {
    try {
      const response = await warriorsService.getPeople();
      setOriginalWarriors(response.results);
      setFilterWarriors(response.results);
    } catch {
      // TODO show alert o some feature about error
    }
  };

  const handleFilterWarriors = (Warriors: WarriorInterface[]) => {
    setFilterWarriors(Warriors);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <section className="warriors-index-page">
      <h4>Warriors List</h4>
      <WarriorFilter
        originalWarriors={originalWarriors}
        filterWarriors={filterWarriors}
        handleSetDefault={() => { if (originalWarriors) setFilterWarriors([...originalWarriors]); }}
        handleSortByTitle={setFilterWarriors}
        handleFilterColorHair={handleFilterWarriors}
      />
      <div className="warriors-index-page__cards">
        {filterWarriors && filterWarriors.length > 0 && filterWarriors.map((warrior) => (
          <WarriorCard
            key={warrior.name}
            warrior={warrior}
          />
        ))}
      </div>
      {!filterWarriors && (<Spinner />)}
    </section>
  );
}
