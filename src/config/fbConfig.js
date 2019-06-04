import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDmmixbiw4grgyEZ6vCSsWk-H0XoJk9_Bc",
    authDomain: "facebook-50c1e.firebaseapp.com",
    databaseURL: "https://facebook-50c1e.firebaseio.com",
    projectId: "facebook-50c1e",
    storageBucket: "",
    messagingSenderId: "623529109349",
    appId: "1:623529109349:web:f04f738487bc8d06"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 firebase.firestore().settings({timestampsInSnapshots : true});
 
 export default firebase;