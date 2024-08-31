const firebase = require('firebase/app');
require('firebase/firestore');

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCz7Ev2arYz2MknkAG1LHNyx3PM_1kh1ZE",
    authDomain: "appformom-d49e8.firebaseapp.com",
    projectId: "appformom-d49e8",
    storageBucket: "appformom-d49e8.appspot.com",
    messagingSenderId: "386765130646",
    appId: "1:386765130646:web:66a9a6093a8013c90debb7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export Firestore
const db = firebase.firestore();
module.exports = db;
