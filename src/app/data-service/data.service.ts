
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private httpClient: HttpClient) { 
  }

  getUser ():Observable<any[]>{
    return this.httpClient.get<any[]>(`https://api.github.com/users/ezekielkibiego/repos`)
  }
}

