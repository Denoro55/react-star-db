class SwapiService {
    BASE_API_URL = 'https://swapi.dev/api';

    async getResourse(url) {
        const response = await fetch(`${this.BASE_API_URL}${url}`);
        if (!response.ok) {
            throw new Error('Could not fetch data');
        }
        return await response.json();
    }

    async getPeopleAll() {
        const response = await this.getResourse('/people');
        return response.results;
    }

    getPeopleById(id) {
        return this.getResourse(`/people/${id}`);
    }

    async getPlanetsAll() {
        const response = await this.getResourse('/planets');
        return response.results;
    }

    async getPlanetById(id) {
        const planet = await this.getResourse(`/planets/${id}`);
        return this._transformPlanet(planet);
    }

    async getStarshipsAll() {
        const response = await this.getResourse('/starships');
        return response.results;
    }

    getStarshipById(id) {
        return this.getResourse(`/starships/${id}`);
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet(planet) {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }
}

export default SwapiService;
