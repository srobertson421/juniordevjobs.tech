import Firebase from 'firebase';
// Initialize Firebase
let config = {
  apiKey: "AIzaSyA4_GwYso9nqHaIpbu8dXK9qK739I6K2aE",
  authDomain: "vue-js-project.firebaseapp.com",
  databaseURL: "https://vue-js-project.firebaseio.com",
  storageBucket: "vue-js-project.appspot.com",
  messagingSenderId: "43724519293"
};

let firebaseApp = Firebase.initializeApp(config);
export default firebaseApp.database();