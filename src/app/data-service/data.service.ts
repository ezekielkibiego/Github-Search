
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private BaseUrl = environment.BASEURL
  

  constructor(private httpClient: HttpClient) { 
  }

  getUser (username:string):Observable<any[]>{
   const endpoint = 'users'
    return this.httpClient.get<any[]>(`${this.BaseUrl}/${endpoint}/${username}/repos`)
  }
}

