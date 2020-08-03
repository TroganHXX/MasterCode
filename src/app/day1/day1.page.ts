import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';


var agedetails;



@Component({
  selector: 'app-day1',
  templateUrl: './day1.page.html',
  styleUrls: ['./day1.page.scss'],
})
export class Day1Page implements OnInit {
  status: boolean = false;
  status1: boolean = false;
  status2: boolean = false;
  status3: boolean = false;
  status4: boolean = true;
  status5: boolean = false;

  bobj()
  {
    this.status=true;
    this.status1=false;
    this.status2=false;
    this.status3=false;
  }

  cb()
  {
    this.status1=true;
    this.status=false;
    this.status2=false;
    this.status3=false;
  }

  sb()
  {
    this.status2=true;
    this.status1=false;
    this.status=false;
    this.status3=false;
  }

  temp()
  {
    this.status2=false;
    this.status3=true;
    this.status=false;
    this.status1=false;
    
    

  }
  constructor(private router: Router
  ) { }

  ngOnInit() {

    agedetails=window.location.href.split("ageinfo=")[1];
    if(agedetails=="ageabove60"){
      this.status4=false;
      this.status5=true;
    
    }
    else{
      this.status4=true;
      this.status5=false;
      
    }
    
  }

}
