import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyAgTxwgE49Off2ZXlOY1O27Ot6HP7nIrIE",
    authDomain: "mybudget-43095.firebaseapp.com",
    databaseURL: "https://mybudget-43095.firebaseio.com",
    projectId: "mybudget-43095",
    storageBucket: "mybudget-43095.appspot.com",
    messagingSenderId: "1049792120582"
};

firebase.initializeApp(config);

const db = firebase.database();

export { firebase, db as default };