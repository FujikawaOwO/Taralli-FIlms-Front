import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../model/Film';

@Injectable({
  providedIn: 'root'
})
export class FilmService 
{

  constructor(private http:HttpClient) {}

  getAll():Observable<Film[]>
  {
    return this.http.get<Film[]>("/api/films"); //endpoint
  }

  getOne(id:number):Observable<any>
  {
    return this.http.get<any>(`/api/films/${id}`);
  }


  add(film: Film): Observable<Film> {
    return this.http.post<Film>('/api/films', film);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`/api/films/${id}`);
  }

  update(film: Film): Observable<Film> {
    return this.http.put<Film>(`/api/films/${film.id}`, film);
  }
}




