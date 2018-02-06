
'use strict';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAOiDUH8_63fXJfVrvBJA6VSc_ofvwf8h4",
    authDomain: "primer-archimedes.firebaseapp.com",
    databaseURL: "https://primer-archimedes.firebaseio.com",
    projectId: "primer-archimedes",
    storageBucket: "primer-archimedes.appspot.com",
    messagingSenderId: "671806136657"
  };
  firebase.initializeApp(config);

function SandhiniPrimer() {

  this.checkSetup();
  this.initFirebase();

  this.login = document.querySelector("#getInfo");
  this.answer1 = document.querySelector("#submited");
  this.answer2 = document.querySelector("#submited2");
  this.answer3 = document.querySelector("#submited3");
  this.answer4 = document.querySelector("#submited4");


  if (this.login != undefined)this.login.addEventListener('click', this.writeUserData.bind(this));
  if (this.answer1 != undefined) this.answer1.addEventListener('click', this.getUserInputPage3.bind(this));
  if (this.answer2 != undefined) this.answer2.addEventListener('click', this.getUserInputPage9.bind(this));
  if (this.answer3 != undefined) this.answer3.addEventListener('click', this.getUserInputPage10.bind(this));
  if (this.answer4 != undefined) this.answer4.addEventListener('click', this.getUserInputPage8.bind(this));

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

SandhiniPrimer.prototype.writeUserData = function(event) {
  event.preventDefault();
  console.log(localStorage.first_name);
  firebase.database().ref('users/' + localStorage.first_name).update({
    firstName: localStorage.first_name,
    lastName: localStorage.last_name,
    School: localStorage.school,
    Gender: localStorage.gender,
    Age: localStorage.age,
  });
  window.location.href = "1_attention.html";
}

SandhiniPrimer.prototype.getUserInputPage3 = function(event){
  const userAnswer = document.querySelector('#userAnswer');
  const height = document.querySelector('#heightAnswer');
  const length = document.querySelector('#lengthAnswer');
  const width = document.querySelector('#widthAnswer')
  const userEnteredAnswer = userAnswer.value + " Height::" + height.value + " Length::" + length.value + " Width::" + width.value;
  this.writeUserAnswer(userEnteredAnswer);
}

SandhiniPrimer.prototype.getUserInputPage8 = function(event){
  const userAnswer = document.querySelector('#userAnswer');
  const userEnteredAnswer = userAnswer.value;
  this.writeUserAnswer(userEnteredAnswer);
}

SandhiniPrimer.prototype.getUserInputPage9 = function(event){
  const page9a = document.querySelector('#air-mass');
  const page9b = document.querySelector('#dirt-mass');
  const page9c = document.querySelector('#air-volume');
  const page9d = document.querySelector('#dirt-volume');
  const userEnteredAnswer = "air-mass: " + page9a.value + ", dirt-mass: " + page9b.value + ", air-volume: " + page9c.value + ", dirt-volume: " + page9d.value;
  this.writeUserAnswer(userEnteredAnswer);
}

SandhiniPrimer.prototype.getUserInputPage10 = function(event){
  console.log("10600");
  const page10a = document.querySelector('#userAnswer');
  const page10b = document.querySelector('#userAnswer2');
  const page10c = document.querySelector('#userAnswer3');
  const userEnteredAnswer = "Ans1: " + page10a.value + ", Ans2: " + page10b.value + ", Ans3: " + page10c.value;
  console.log("oijoj");
  const params = window.location.pathname.split( '/' );
  const num = params.length - 1;
  const lengthEnd = params[num].length;
  const name = params[num].slice(0, lengthEnd-5);
  const inputElem = {};
  inputElem[name] = userEnteredAnswer;
  console.log(inputElem);
  firebase.database().ref('users/' + localStorage.first_name).update(inputElem);
}

SandhiniPrimer.prototype.writeUserAnswer = function(userEnteredAnswer) {
  console.log("oijoj");
  const params = window.location.pathname.split( '/' );
  const num = params.length - 1;
  const lengthEnd = params[num].length;
  const name = params[num].slice(0, lengthEnd-5);
  const inputElem = {};
  inputElem[name] = userEnteredAnswer;
  console.log(inputElem);
  firebase.database().ref('users/' + localStorage.first_name).update(inputElem);
}

window.onload = function() {
  window.sandhiniPrimer = new SandhiniPrimer();
};
