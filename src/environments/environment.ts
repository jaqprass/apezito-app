// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const firebaseConfig = {
  apiKey: "AIzaSyDiO9BP2x3AZdMq7jnQiGCJSjixgSp9Voo",
  authDomain: "apezito-app.firebaseapp.com",
  projectId: "apezito-app",
  storageBucket: "apezito-app.appspot.com",
  messagingSenderId: "377555696864",
  appId: "1:377555696864:web:a025712389aff527536485",
  measurementId: "G-FGWFZYZ6G7"
};

export const environment = {
  production: false,
  firebase: firebaseConfig,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
