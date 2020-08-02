import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day1',
  templateUrl: './day1.page.html',
  styleUrls: ['./day1.page.scss'],
})
export class Day1Page implements OnInit {
  status: boolean = false;
  status1: boolean = false;
  status2: boolean = false;

  bobj()
  {
    this.status=true;
    this.status1=false;
    this.status2=false;
  }

  cb()
  {
    this.status1=true;
    this.status=false;
    this.status2=false;
  }

  sb()
  {
    this.status2=true;
    this.status1=false;
    this.status=false;
  }
  constructor() { }

  ngOnInit() {
  }

}

