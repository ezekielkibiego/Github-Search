import { Repos } from './../users/repos';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data-service/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  @ViewChild('e') searchGithubRepoForm: NgForm
  home: string;
  userInfo: Repos;

  showRepos = false;

  searchGithubRepo(){
    this.home=this.searchGithubRepoForm.value.search;
    console.log(this.home);
    
    this.requestUser.getReposDataRequest(this.home).then(
      (Response)=>{
        this.userInfo=this.requestUser.repoData;
        console.log(this.userInfo);
      },
      (error)=>{
        console.log(error);
      }
    );
    this.showRepos=true;
  }
  constructor(private requestUser:DataService) {}



  ngOnInit(): void {
  }

}



