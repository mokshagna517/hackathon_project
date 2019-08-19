import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export class ApiService {

  constructor(
    private http: HttpClient
  ) { }
  getMoviesByTitle(title: String) {
    return this.http.get('http://www.omdbapi.com/?apikey=aa44e6ff&t='+title);
}
}
