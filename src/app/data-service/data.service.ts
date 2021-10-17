
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../users/user';
import { Repos } from '../users/repos';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userGottenDetails: any;
  userRepos: any;
  getUserRequest(githubUsername: string) {
    throw new Error('Method not implemented.');
  }
  Users: User[] = [];;
  Repos: Repos[] = [];

  private BaseUrl = environment.BASEURL
  

  constructor(private httpClient: HttpClient) { 
    
  }
  

  getUser (username:string){
   const endpoint = 'users'
    return this.httpClient.get<any[]>(`${this.BaseUrl}/${endpoint}/${username}/repos`, {

    }
    ).toPromise()
  }
}

