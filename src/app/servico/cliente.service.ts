import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Cliente{
  id: string;
  nome: string;
  prato: string;
}
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
private url = 'http://127.0.0.1/participante'
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<[Cliente]>(this.url);
  }
  remove(id:any){
    return this.http.delete(this.url + '/'+id);
  }
  create(participante: Cliente){
    return this.http.post(this.url,participante);
  }

}
