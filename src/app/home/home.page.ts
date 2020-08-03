import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

var a;


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  status: boolean = true ;
  dataReceived: string="";

  slideOpts = {  
    initialSlide: 1,  
    speed: 300,  
    effect: 'flip',  
  };  
  
  constructor(
    public activatedRoute : ActivatedRoute,
    private router: Router,
  ) { 
    this.activatedRoute.queryParams.subscribe((data) => {
      this.dataReceived = JSON.stringify(data);
      a = this.dataReceived;
      console.log("HI");
      console.log(data);


    })
  }

  ngOnInit() {
    
    
  }
  hide(){
    this.status = false;
    
  }
  to(){
    this.router.navigate(['profiles'],{queryParams : {emailid:this.dataReceived}})
  }

}
