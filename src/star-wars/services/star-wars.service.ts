import { StarWarInterface } from '../interfaces';
import { PageResponseInterface } from '../../shared/interfaces';

class StarWarsService {
  url = 'https://swapi.dev/api/';

  async getPeople(): Promise<PageResponseInterface<StarWarInterface>> {
    const response = await this.requestFetch<PageResponseInterface<StarWarInterface>>(`${this.url}people/`);
    return {
      ...response,
      results: this.setIdByIndex(response.results),
    };
  }

  async getDetailPeople(idStarWar?: string): Promise<StarWarInterface> {
    const response = await fetch(`${this.url}people/${idStarWar}`, {
      method: 'GET',
    });
    return response.json();
  }

  private setIdByIndex(starWars: StarWarInterface[]): StarWarInterface[] {
    return [...starWars.map((starWar, index) => { return { ...starWar, id: index + 1 }; })];
  }

  private requestFetch<TResponse>(
    url: string,
  ): Promise<TResponse> {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => data as TResponse);
  }
}

export const starWarsService = new StarWarsService();
