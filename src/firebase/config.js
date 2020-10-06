import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDs6xThooUXAnQhES18-94qfuKhP-z8huU",
    authDomain: "firegram-tutorial-441b9.firebaseapp.com",
    databaseURL: "https://firegram-tutorial-441b9.firebaseio.com",
    projectId: "firegram-tutorial-441b9",
    storageBucket: "firegram-tutorial-441b9.appspot.com",
    messagingSenderId: "989504410440",
    appId: "1:989504410440:web:2148c9f85b7674bcae597d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//initialize storage and firestore for use in app
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectStorage, projectFirestore};