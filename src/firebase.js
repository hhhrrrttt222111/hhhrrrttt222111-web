import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAtV7cyRNPnm4cj2TFcyGy-J-yF6OB7hTU",
    authDomain: "hhhrrrttt222111.firebaseapp.com",
    projectId: "hhhrrrttt222111",
    storageBucket: "hhhrrrttt222111.appspot.com",
    messagingSenderId: "226356582202",
    appId: "1:226356582202:web:80278d6fdd3ea915486203",
    measurementId: "G-367XJH4FP8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;