import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCm49yetz3CR4EeBMEjQ05iCpcvABuOR_4",
    authDomain: "blinke-app.firebaseapp.com",
    projectId: "blinke-app",
    storageBucket: "blinke-app.appspot.com",
    messagingSenderId: "547054538268",
    appId: "1:547054538268:web:9a87e51d80ea842c6c59d9",
    measurementId: "G-DZ5ZKPGBH5"
};
// This line of code connects the firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();

// This gets the authentication
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
