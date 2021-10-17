
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username = 'ezekielkibiego'
  repository:any[] = []

  constructor(private dataService:DataService) {

  }




  ngOnInit(): void {
    this.getUserInfo ()

  }
  getUserInfo (){
    return this.dataService.getUser (this.username).subscribe((response:any[])=>{
      console.log(response)
      this.repository=response
    })
  }

}
 

  



    

  
