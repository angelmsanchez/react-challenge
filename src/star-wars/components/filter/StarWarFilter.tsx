import React, { useState, ChangeEvent } from 'react';

import './StarWarFilter.scss';
import { StarWarInterface } from '../../interfaces';
import { Button } from '../../../shared/components';

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
    if (filterStarWars && filterStarWars.length > 0) handleSortByTitle([...sorteableFunction(filterStarWars)]);
  };

  const changeSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
    const newValue = event.target.value;
    setHairColorSelected(newValue);
    let filterByHairColor = originalStarWars?.filter((starWar) => starWar.hair_color.includes(newValue));
    if (filterByHairColor && filterByHairColor.length > 0) filterByHairColor = [...sorteableFunction(filterByHairColor)];
    if (filterByHairColor && filterByHairColor.length > 0) handleFilterColorHair([...filterByHairColor]);
  };

  return (
    <section className="star-war-filter">
      <Button
        handleClick={sortByName}
        disabled={!originalStarWars}
      >
        <>
          Sort by name
        {isSortAsc ? ' Ascendant' : ' Descendant'}
        </>
      </Button>
      <div role="select-role" className="star-war-filter__select">
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
        <Button
          handleClick={() => {
            setIsSortAsc(true);
            setHairColorSelected('');
            handleSetDefault();
          }}
        >
          <>
            Set Default
          </>
        </Button>
      </div>
    </section>
  );
}
