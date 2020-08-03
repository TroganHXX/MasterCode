import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';
import 'firebase/firestore';
import {ActivatedRoute} from '@angular/router';
var a;

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.page.html',
  styleUrls: ['./profiles.page.scss'],
})


export class ProfilesPage {
  dataReceived: string="";
  messages: any;
  private db: any;
  model: any = {};
  isEditing: boolean = false;

  constructor(public navCtrl: NavController,
    public activatedRoute : ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.dataReceived = JSON.stringify(data);
      a = this.dataReceived;
      console.log("HI");
      console.log(data);


    })
    this.db = firebase.firestore();
    this.loadData();
  }

  loadData(){
    this.getAllDocuments("messages").then((e)=>{
      this.messages = e;
  });
  }

addMessage(){
    if(!this.isEditing){
      var a = document.getElementById('mname') as HTMLInputElement;
      var b = document.getElementById('meid') as HTMLInputElement;
      var c = document.getElementById('mpno') as HTMLInputElement;
      var d = document.getElementById('mcity') as HTMLInputElement;
      this.model = {"name": a.value  , "email": b.value , "mobile" : c.value , "city" : d.value}
      
    this.addDocument("messages", this.model).then(()=>{
      this.loadData();//refresh view
    });
  }else{
    this.updateDocument("messages", this.model.$key, this.model).then(()=>{
      this.loadData();//refresh view
    });
  }
  this.isEditing = false;
  //clear form
}

updateMessage(obj){
  this.model = obj;
  this.isEditing = true;
}

deleteMessage(key){
  this.deleteDocument("messages", key).then(()=>{
    this.loadData();//refresh view
    this.isEditing = false;
  });
}





//CRUD operation methods------------------------------------------------------------------------------------------

getAllDocuments(collection: string): Promise<any> {
    return new Promise((resolve, reject) => {
        this.db.collection(collection)
            .get()
            .then((querySnapshot) => {
                let arr = [];
                querySnapshot.forEach(function (doc) {
                    var obj = JSON.parse(JSON.stringify(doc.data()));
                    var b = window.location.href.split("emailid")[3].split("%5C%22:%5C%22")[1].split("%5C%22%7D%22%7D")[0].split(",")[0];
                    if(obj.email==b){

                      obj.$key = doc.id
                      console.log(obj)
                      arr.push(obj);
                    }
                    console.log(a);
                    
                });

                if (arr.length > 0) {
                    console.log("Document data:", arr);
                    resolve(arr);
                } else {
                    console.log("No such document!");
                    resolve(null);
                }


            })
            .catch((error: any) => {
                reject(error);
            });
    });
}

deleteDocument(collectionName: string, docID: string): Promise<any> {
  return new Promise((resolve, reject) => {
      this.db
          .collection(collectionName)
          .doc(docID)
          .delete()
          .then((obj: any) => {
              resolve(obj);
          })
          .catch((error: any) => {
              reject(error);
          });
  });
}

addDocument(collectionName: string, dataObj: any): Promise<any> {
  return new Promise((resolve, reject) => {
      this.db.collection(collectionName).add(dataObj)
          .then((obj: any) => {
              resolve(obj);
          })
          .catch((error: any) => {
              reject(error);
          });
  });
}

updateDocument(collectionName: string, docID: string, dataObj: any): Promise<any> {
  return new Promise((resolve, reject) => {
      this.db
          .collection(collectionName)
          .doc(docID)
          .update(dataObj)
          .then((obj: any) => {
              resolve(obj);
          })
          .catch((error: any) => {
              reject(error);
          });
  });
}

}
