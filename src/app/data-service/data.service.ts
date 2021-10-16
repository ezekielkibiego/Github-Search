import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../users/user';
import { Repos } from '../users/repos';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userGottenDetails!: User;
  userRepositories!: Repos;

  constructor() { }
}
