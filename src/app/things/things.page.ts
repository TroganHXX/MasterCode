import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-things',
  templateUrl: './things.page.html',
  styleUrls: ['./things.page.scss'],
})
export class ThingsPage implements OnInit {
  status1: boolean = false;
  status: boolean = false;
  status2: boolean = false;
  status3: boolean = false;
  status4: boolean = false;
  status5: boolean = false;
  status6: boolean = false;
  status7: boolean = false;
  status8: boolean = false;
  status9: boolean = false;
  status10: boolean = false;

  plancreate(){
    var a = document.getElementById('abc') as HTMLInputElement;

    if(a.value=="1"){ var b = document.getElementById('cardday1') as HTMLInputElement; 
      this.status1=true;
      this.status2=false;
      this.status3=false;
      this.status4=false;
      this.status5=false;
      this.status6=false;
      this.status7=false;
      this.status8=false;
      this.status9=false;
      this.status10=false;
    }
    if(a.value=="2"){ var c = document.getElementById('cardday2') as HTMLInputElement;
      this.status1=true;
      this.status2=true;
      this.status3=false;
      this.status4=false;
      this.status5=false;
      this.status6=false;
      this.status7=false;
      this.status8=false;
      this.status9=false;
      this.status10=false;}

    if(a.value=="3"){  
      this.status1=true;
      this.status2=true;
      this.status3=true;
      this.status4=false;
      this.status5=false;
      this.status6=false;
      this.status7=false;
      this.status8=false;
      this.status9=false;
      this.status10=false;}


    if(a.value=="4"){ 
      this.status1=true;
      this.status2=true;
      this.status3=true;
      this.status4=true;
      this.status5=false;
      this.status6=false;
      this.status7=false;
      this.status8=false;
      this.status9=false;
      this.status10=false;}

    if(a.value=="5"){  
      this.status1=true;
      this.status2=true;
      this.status3=true;
      this.status4=true;
      this.status5=true;
      this.status6=false;
      this.status7=false;
      this.status8=false;
      this.status9=false;
      this.status10=false;}

    if(a.value=="6"){ 
      this.status1=true;
      this.status2=true;
      this.status3=true;
      this.status4=true;
      this.status5=true;
      this.status6=true;
      this.status7=false;
      this.status8=false;
      this.status9=false;
      this.status10=false;}


    if(a.value=="7"){  
      this.status1=true;
      this.status2=true;
      this.status3=true;
      this.status4=true;
      this.status5=true;
      this.status6=true;
      this.status7=true;
      this.status8=false;
      this.status9=false;
      this.status10=false;}

    if(a.value=="8"){ 
      this.status1=true;
      this.status2=true;
      this.status3=true;
      this.status4=true;
      this.status5=true;
      this.status6=true;
      this.status7=true;
      this.status8=true;
      this.status9=false;
      this.status10=false;}

    if(a.value=="9"){  
      this.status1=true;
      this.status2=true;
      this.status3=true;
      this.status4=true;
      this.status5=true;
      this.status6=true;
      this.status7=true;
      this.status8=true;
      this.status9=true;
      this.status10=false;}

    if(a.value=="10"){  
      this.status1=true;
      this.status2=true;
      this.status3=true;
      this.status4=true;
      this.status5=true;
      this.status6=true;
      this.status7=true;
      this.status8=true;
      this.status9=true;
      this.status10=true;}}

  Day1(){
    
    this.router.navigate(['day1']);
  }

  Day2(){
    this.router.navigate(['day1']);
  }

  Day3(){
    this.router.navigate(['day1']);
  }

  Day4(){
    this.router.navigate(['day1']);
  }

  Day5(){
    this.router.navigate(['day1']);
  }

  Day6(){
    this.router.navigate(['day1']);
  }

  Day7(){
    this.router.navigate(['day1']);
  }

  Day8(){
    this.router.navigate(['day1']);
  }

  Day9(){
    this.router.navigate(['day1']);
  }

  Day10(){
    this.router.navigate(['day1']);
  }
    

  
  
  constructor(
    private router: Router,
    public afDB: AngularFireDatabase,
    public afSG: AngularFireStorage

  ) {
    
  }

  


ngOnInit(){}

}
