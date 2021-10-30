import { Injectable } from '@angular/core';

import { BusquedaInterface } from 'src/app/interfaces/busqueda-interface';

import { HttpClient } from '@angular/common/http';

@Injectable({
  	providedIn: 'root'
})
export class BusquedaService {

  	cachedValues: { [query: string]: BusquedaInterface } = {};

  	constructor( private http: HttpClient ) { this.http = http }

  	busqueda = (query: string): Promise<BusquedaInterface> => {
		let promise = new Promise<BusquedaInterface>((resolve, reject) => { 
		if(this.cachedValues[query]){
			resolve(this.cachedValues[query])
		}else{
			this.http.get('https://api.themoviedb.org/3/search/movie?api_key=2bc9dafd9ebbdad12807392c17bdc23d&language=es&query=' + query)
			.toPromise()
			.then( (response) => {
			resolve(response as BusquedaInterface)
			}, (error) => {
			reject(error);
			})
		}
		});
		return promise;
	}

}
