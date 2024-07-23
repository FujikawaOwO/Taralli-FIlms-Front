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
  

}
