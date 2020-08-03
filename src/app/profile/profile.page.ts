import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileModel } from './profile.model';
import { FirebaseAuthService } from '../firebase-auth.service';
var a;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: ProfileModel;
  dataReceived: string="";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: FirebaseAuthService,
    public activatedRoute : ActivatedRoute

    
  ) {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.dataReceived = JSON.stringify(data);
      a = this.dataReceived;
      console.log("HI");
      console.log(data);
    })
  }

  ngOnInit() {
    this.route.data
    .subscribe((result) => {
      this.user = result['data'];
    })
  }

  signOut() {
    this.authService.signOut().subscribe(() => {
      // Sign-out successful.
      this.router.navigate(['sign-in']);
    }, (error) => {
      console.log('signout error', error);
    });
  }

  go(){
    this.router.navigate(['home'],{queryParams : {emailid:this.dataReceived}});
  }

}
