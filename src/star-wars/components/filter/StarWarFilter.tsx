import React, { useState, ChangeEvent } from 'react';

import './StarWarFilter.scss';
import { StarWarInterface } from '../../interfaces';

interface Props {
  originalStarWars?: StarWarInterface[];
  filterStarWars?: StarWarInterface[];
  handleSetDefault: () => void;
  handleSortByTitle: (sortStarWars: StarWarInterface[]) => void;
  handleFilterColorHair: (sortStarWars: StarWarInterface[]) => void;
}

export function StarWarFilter(props: Props): JSX.Element {
  const {
    originalStarWars,
    filterStarWars,
    handleSetDefault,
    handleSortByTitle,
    handleFilterColorHair,
  } = props;

  const [isSortAsc, setIsSortAsc] = useState(true);

  const sortByName = (): void => {
    const sortableByName = filterStarWars?.sort((a, b) => isSortAsc
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name));
    setIsSortAsc(!isSortAsc);
    if (sortableByName) handleSortByTitle([...sortableByName]);
  };

  const changeSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
    console.log('event', event.target.value);
    const filterByHairColor = originalStarWars?.filter((starWar) => starWar.hair_color.includes(event.target.value));
    console.log('filterByHairColor', filterByHairColor);
    if (filterByHairColor) handleFilterColorHair([...filterByHairColor]);
  };

  return (
    <section className="star-war-filter">
      <button onClick={sortByName} disabled={!originalStarWars}>
        Sort by name
        {isSortAsc ? ' Ascendant' : ' Descendant'}
      </button>
      <div className="star-war-filter__select">
        <label>Filter by hair color</label>
        <select onChange={changeSelect}>
          <option value=""> - </option>
          <option value="auburn">Auburn</option>
          <option value="blond">Blond</option>
          <option value="brown">Brown</option>
          <option value="grey">Grey</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="n/a">n/a</option>
          <option value="none">None</option>
        </select>
      </div>
      <div className="star-war-filter__default-button">
        <button onClick={() => {
          
          handleSetDefault();
        }}>
          Set Default
        </button>
      </div>
    </section>
  );
}
