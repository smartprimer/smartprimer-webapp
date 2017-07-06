'use strict';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCbh2nnDeAyemSpqltO7Aa7y_vTkUW0Q6g",
  authDomain: "smartprimer-e0b94.firebaseapp.com",
  databaseURL: "https://smartprimer-e0b94.firebaseio.com",
  projectId: "smartprimer-e0b94",
  storageBucket: "smartprimer-e0b94.appspot.com",
  messagingSenderId: "920348273264"
};
firebase.initializeApp(config);

function SandhiniPrimer() {

  this.checkSetup();
  this.initFirebase();

  this.login = document.querySelector("#getInfo");
  this.answer1 = document.querySelector("#submited");
  this.userAnswer = document.querySelector('#userAnswer');

  this.page9a = document.querySelector('#air-mass');
  this.page9b = document.querySelector('#dirt-mass');
  this.page9c = document.querySelector('#air-volume');
  this.page9d = document.querySelector('#dirt-volume');
  if (this.login != undefined)this.login.addEventListener('click', this.writeUserData.bind(this));
  if (this.answer1 != undefined) this.answer1.addEventListener('click', this.writeUserAnswer.bind(this));
};


// Sets up shortcuts to Firebase features and initiate firebase auth.
SandhiniPrimer.prototype.initFirebase = function() {
  // Shortcuts to Firebase SDK features.
  this.database = firebase.database();

  this.auth = firebase.auth();
  this.storage = firebase.storage();
   //Initiates Firebase auth and listen to auth state changes.
  //this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};

SandhiniPrimer.prototype.checkSetup = function() {
  if (!window.firebase || !(firebase.app instanceof Function) || !firebase.app().options) {
    window.alert('You have not configured and imported the Firebase SDK. ' +
        'Make sure you go through the codelab setup instructions and make ' +
        'sure you are running the codelab using `firebase serve`');
  }
};

// Signs-in Friendly Chat.
SandhiniPrimer.prototype.signIn = function(event) {
  event.preventDefault();
  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider = new firebase.auth.GoogleAuthProvider();
  this.auth.signInWithPopup(provider);
};

SandhiniPrimer.prototype.writeUserData = function(event) {
  console.log(localStorage.first_name);
  firebase.database().ref('users/' + localStorage.first_name).set({
    firstName: localStorage.first_name,
    lastName: localStorage.last_name,
    School: localStorage.school,
    Gender: localStorage.gender,
    Age: localStorage.age,
  });
}

SandhiniPrimer.prototype.writeUserAnswer = function(event) {
  let userEnteredAnswer = "";
  if (this.page9a != undefined){
    userEnteredAnswer = "air-mass: " + this.page9a.value + ", dirt-mass: " + this.page9b.value + ", air-volume: " + this.page9c.value + ", dirt-volume: " + this.page9d.value;
  }
  else userEnteredAnswer = this.userAnswer.value;

  const params = window.location.pathname.split( '/' );
  const lengthEnd = params[1].length;
  const name = params[1].slice(0, lengthEnd-5);
  const inputElem = {};
  inputElem[name] = userEnteredAnswer;
  console.log(inputElem);
  firebase.database().ref('users/' + localStorage.first_name).update(inputElem);
}

window.onload = function() {
  window.sandhiniPrimer = new SandhiniPrimer();
};
