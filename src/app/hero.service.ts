import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HeroService {
    // getHeroes(): Promise<Hero[]> {
    //     return Promise.resolve(HEROES);
    // }

    private heroesUrl = 'api/heroes';  // URL to web api
    private headers = new Headers({ 'Content-Type': 'application/json' });


    constructor(private http: Http) { }
    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }
    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
