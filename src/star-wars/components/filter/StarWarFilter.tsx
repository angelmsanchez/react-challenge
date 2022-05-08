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
  const [hairColorSelected, setHairColorSelected] = useState('');

  const sorteableFunction = (starWars: StarWarInterface[]): StarWarInterface[] => {
    return starWars.sort((a, b) => isSortAsc
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name));
  };

  const sortByName = (): void => {
    setIsSortAsc(!isSortAsc);
    if (filterStarWars) handleSortByTitle([...sorteableFunction(filterStarWars)]);
  };

  const changeSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
    const newValue = event.target.value;
    setHairColorSelected(newValue);
    let filterByHairColor = originalStarWars?.filter((starWar) => starWar.hair_color.includes(newValue));
    if (filterByHairColor) filterByHairColor = [...sorteableFunction(filterByHairColor)];
    console.log('filterByHairColor', filterByHairColor);
    if (filterByHairColor) handleFilterColorHair([...filterByHairColor]);
  };

  return (
    <section className="star-war-filter">
      <button onClick={sortByName} disabled={!originalStarWars}>
        <span className="button-custom">
          Sort by name
        {isSortAsc ? ' Ascendant' : ' Descendant'}
        </span>
      </button>
      <div className="star-war-filter__select">
        <label>Filter by hair color</label>
        <select value={hairColorSelected} onChange={changeSelect}>
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
          setIsSortAsc(true);
          setHairColorSelected('');
          handleSetDefault();
        }}>
          <span className="button-custom">Set Default</span>
        </button>
      </div>
    </section>
  );
}
