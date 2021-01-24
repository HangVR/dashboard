// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost/api/v1',
  firebase: {
    apiKey: 'AIzaSyC4iUWK_B00jy6R6bnBGiOVyIuK4w_Qxmw',
    authDomain: 'merkur-develop.firebaseapp.com',
    databaseURL: 'https://merkur-develop.firebaseio.com',
    projectId: 'merkur-develop',
    storageBucket: 'merkur-develop.appspot.com',
    messagingSenderId: '932084905620',
    appId: '1:932084905620:web:8384e0b3d7d2352c19e681',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
