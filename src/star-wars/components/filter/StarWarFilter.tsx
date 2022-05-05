import React, { useState } from 'react';

import './StarWarFilter.scss';
import { StarWarInterface } from '../../interfaces';

interface Props {
  starWars?: StarWarInterface[];
  sortStarWars: (sortStarWars: StarWarInterface[]) => void;
}

export function StarWarFilter(props: Props): JSX.Element {
  const {
    starWars,
    sortStarWars,
  } = props;

  const [isSortAsc, setIsSortAsc] = useState(true);

  const sortByName = (): void => {
    const sortableByName = starWars?.sort((a, b) => isSortAsc
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name));
    setIsSortAsc(!isSortAsc);
    if (sortableByName) sortStarWars([...sortableByName]);
  };

  return (
    <section className="star-war-filter">
      <button onClick={sortByName} disabled={!starWars}>
        Ordenar por nombre
        {isSortAsc ? ' Ascendente' : ' Descendente'}        </button>
    </section>
  );
}
