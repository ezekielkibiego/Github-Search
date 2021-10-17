import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service'; 
import { User } from '../users/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: User;
  repository: any;

  constructor(private requestUser:DataService) {

    getUser(githubUsername){
      this.requestUser.getUserDataRequest(githubUsername).then(
        (Response)=>{
          this.username=this.requestUser.userData
        }
      )
    }
  }




  ngOnInit(): void {
    

  }
  
}
 

  



    

  
