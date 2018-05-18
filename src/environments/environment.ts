// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  MAPBOX_API_KEY: 'pk.eyJ1Ijoia2FuYXZtYWxpazEwIiwiYSI6ImNqZmJrMDl0dTJ2NzIzM3BlanV5NmJpcjQifQ.DJnq4rBtCtm5-FQm_mlflQ',
  firebase: {
    apiKey: 'AIzaSyCP9GHWdH9x9OlsT4FCW8t-o713QD_RzA4',
    authDomain: 'test-790fb.firebaseapp.com',
    databaseURL: 'https://test-790fb.firebaseio.com',
    projectId: 'test-790fb',
    storageBucket: 'test-790fb.appspot.com',
    messagingSenderId: '47447622568'
  },
  mapbox: {
    accessToken: 'pk.eyJ1Ijoia2FuYXZtYWxpazEwIiwiYSI6ImNqZmJrMDl0dTJ2NzIzM3BlanV5NmJpcjQifQ.DJnq4rBtCtm5-FQm_mlflQ',
  },
};
