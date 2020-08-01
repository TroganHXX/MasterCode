import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-video',
  templateUrl: 'video.page.html',
  styleUrls: ['video.page.scss'],
})
export class VideoPage {
  url;


  constructor(public navCtrl: NavController, private sanitizer: DomSanitizer) {
    this.getSafeUrl("https://www.youtube.com/embed/-dSLhpnfLxQ");
    }

  getSafeUrl(url) {
		this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);		
  }
  
}
