import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  event = [];

  constructor(
    public afDB: AngularFireDatabase,
    public afSG: AngularFireStorage
  ) 
  {
    this.geteventDatabase();
  }
  geteventDatabase() {
    this.afDB.list('event/').snapshotChanges(['child_added']).subscribe(event =>{
     event.forEach(image => {
  
      //console.log('Ref de l\'image: ' + image.payload.exportVal().ref);
        this.geteventStorage(image);
      });
    });
  }
  
  geteventStorage(image: any) {
    const imgRef = image.payload.exportVal().ref;
    this.afSG.ref(imgRef).getDownloadURL().subscribe(imgUrl => {
      console.log(imgUrl);
      this.event.push({
        name: image.payload.exportVal().name,
        url: imgUrl
      });
    });
  }
   

  ngOnInit() {
  }

}
