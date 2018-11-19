import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyAZmuojaRVhYuZL98lGF_0KMENfvuJ3EcA",
    authDomain: "mcity-ee5fb.firebaseapp.com",
    databaseURL: "https://mcity-ee5fb.firebaseio.com",
    projectId: "mcity-ee5fb",
    storageBucket: "mcity-ee5fb.appspot.com",
    messagingSenderId: "629952975924"
  };

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers,
    firebaseDB
}