import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage implements OnInit {
  photo=[];
  constructor(public afDB: AngularFireDatabase,
    public afSG: AngularFireStorage) {this.getphotoDatabase(); }
    getphotoDatabase() {
      this.afDB.list('photo/').snapshotChanges(['child_added']).subscribe(photo =>{
      
        photo.forEach(image => {
        //console.log('Ref de l\'image: ' + image.payload.exportVal().ref);
        this.getphotoStorage(image);
    });
  });
}
    
    getphotoStorage(image: any) {
      const imgRef = image.payload.exportVal().ref;
      this.afSG.ref(imgRef).getDownloadURL().subscribe(imgUrl => {
        console.log(imgUrl);
        this.photo.push({
          name: image.payload.exportVal().name,
          url: imgUrl
      });
    });

  
  }
  ngOnInit() {
  }

}
