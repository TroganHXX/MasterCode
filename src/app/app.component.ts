import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  navigate: { title: string; url: string; icon: string; }[];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.sideMenu();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  sideMenu() {
    this.navigate =
        [
            {
                title: "Home",
                url: "/home",
                icon: "home"
            },
            {
                title: "Trip Planner",
                url: "/things",
            icon: "bicycle-sharp"                                  },
            {
                title: "Destinations",
                url: "/destination",
                icon: "boat-sharp"
        },
        {
            title: "Photos",
            url: "/photo",
            icon: "image-sharp"
        }, {
            title: "Videos",
            url: "/video",
            icon: "videocam"
        },
        {
            title: "Social channels",
            url: "/social",
            icon: "share-social-sharp"
        }, {
            title: "About",
            url: "/about",
            icon: "people-circle-sharp"
        }, {
            title: "settings",
            url: "/setting",
            icon: "settings-sharp"
        },
        ]
}
}
