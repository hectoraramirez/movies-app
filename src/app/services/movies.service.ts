import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url: string;
  urlM: string;
  apiKey: string;

  constructor( private http: HttpClient ) {
    this.url = environment.urlDiscover;
    this.urlM = environment.urlMovie;
    this.apiKey = environment.api_key;
  }

  public getDetailMovie(id: string): Observable <any> {
    return this.http.get<any>(this.urlM +  id + this.apiKey);
  }


  public getMoviesList(): Observable <any> {
    return this.http.get<any>(this.url + '&language=en-US');
  }

}
