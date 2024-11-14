import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Inventor } from './inventor';
//import { INVENTORES } from './inventores.json';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoresService {

  private urlEndpoint='http://localhost:8080/api/inventores'

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http:HttpClient) { }

  getInventores():Observable<Inventor[]>{
    
   //return of (INVENTORES);
   return this.http.get(this.urlEndpoint).pipe(
    map((response) => response as Inventor[])
   )
  
  }

  create(inventor:Inventor):Observable<Inventor>{
    return this.http.post<Inventor>(this.urlEndpoint, inventor, {headers: this.httpHeaders})
  }

  //Método de editar tarea    
  getInventor(id: any):Observable<Inventor>{
    return this.http.get<Inventor>(`${this.urlEndpoint}/${id}`)
  }
  
  //Edición final
  update(inventor: Inventor):Observable<Inventor>{
    return this.http.put<Inventor>(`${this.urlEndpoint}/${inventor.id}`, inventor, {headers:this.httpHeaders})
  }
  
  //Eliminar
  delete(id:number):Observable<Inventor>{
    return this.http.delete<Inventor>(`${this.urlEndpoint}/${id}`, {headers:this.httpHeaders})
  }

}
