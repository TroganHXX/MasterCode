// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBrWBJqlInJWKRN6G7JghInNKEmxSvav5A",
    authDomain: "master-shard-283603.firebaseapp.com",
    databaseURL: "https://master-shard-283603.firebaseio.com",
    projectId: "master-shard-283603",
  },
  dialogflow: {
    angularBot: 'ab6b4bbfd3833706d8531b4625cde4140d6e57ae'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
