import { WarriorInterface } from '../interfaces';
import { PageResponseInterface } from '../../shared/interfaces';

class WarriorsService {
  url = 'https://swapi.dev/api/';

  async getPeople(nextUrl?: string): Promise<PageResponseInterface<WarriorInterface>> {
    const response = await this.requestFetch<PageResponseInterface<WarriorInterface>>(nextUrl || `${this.url}people/`);
    return {
      ...response,
      results: this.setIdByIndex(response.results),
    };
  }

  async getDetailPeople(idWarrior?: string): Promise<WarriorInterface> {
    const response = await fetch(`${this.url}people/${idWarrior}`, {
      method: 'GET',
    });
    return response.json();
  }

  private setIdByIndex(Warriors: WarriorInterface[]): WarriorInterface[] {
    return [...Warriors.map((Warrior, index) => { return { ...Warrior, id: index + 1 }; })];
  }

  private requestFetch<TResponse>(
    url: string,
  ): Promise<TResponse> {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => data as TResponse);
  }
}

export const warriorsService = new WarriorsService();
