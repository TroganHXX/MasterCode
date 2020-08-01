import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  status: boolean = true ;

  slideOpts = {  
    initialSlide: 1,  
    speed: 300,  
    effect: 'flip',  
  };  
  
  constructor() { }

  ngOnInit() {
    
    
  }
  hide(){
    this.status = false;
    
  }

}
