var config = {                                            //informacje z firebase
  apiKey: "AIzaSyBg56JWp8CB2ys3Ale5VGS9u8cUznQGfBs",
  authDomain: "maketav2.firebaseapp.com",
  databaseURL: "https://maketav2-default-rtdb.firebaseio.com",
  projectId: "maketav2",
  storageBucket: "maketav2.appspot.com",
  messagingSenderId: "1058157173867",
  appId: "1:1058157173867:web:5d190fba0761ae65db252e",
  measurementId: "G-3RL0RD43QC"
};
firebase.initializeApp(config);                           //polaczenie z bazą danych

$(document).ready(function(){
  //deklaracja zmiennych zmiennych
  var database = firebase.database();
  var lamp1Status;
  var lamp2Status;
  var lamp3Status;
  var lamp4Status;
  var lamp5Status;
  var lamp6Status;

  database.ref().on("value", function(snap){
    lamp1Status = snap.val().lamp1Status;
    lamp2Status = snap.val().lamp2Status;
    lamp3Status = snap.val().lamp3Status;
    lamp4Status = snap.val().lamp4Status;
    lamp5Status = snap.val().lamp5Status;
    lamp6Status = snap.val().lamp6Status;

    /********** lamp1  **********/
    if(lamp1Status == 1){                               //jesli jest 1 tekst na stronie zmieniany jest na
      $(".lamp1Status").text("Lamp 1 is on");           //"Lamp 1 is on"
    } else if(lamp1Status == 0){                        //jeśli jest 0 wtedy tekst zmieniany jest na
      $(".lamp1Status").text("Lamp 1 is off");          // "Lamp 1 is off"
    }
    /********** lamp2  **********/
    if(lamp2Status == 1){
      $(".lamp2Status").text("Lamp 2 is on");
    } else if(lamp2Status == 0){
      $(".lamp2Status").text("Lamp 2 is off");
    }
    /********** lamp3  **********/
    if(lamp3Status == 1){
      $(".lamp3Status").text("Lamp 3 is on");
    } else if(lamp3Status == 0){
      $(".lamp3Status").text("Lamp 3 is off");
    }
    /********** lamp4  **********/
    if(lamp4Status == 1){
      $(".lamp4Status").text("Lamp 4 is on");
    } else if(lamp4Status == 0){
      $(".lamp4Status").text("Lamp 4 is off");
    }
    /********** lamp5  **********/
    if(lamp5Status == 1){
      $(".lamp5Status").text("Lamp 5 is on");
    } else if(lamp5Status == 0){
      $(".lamp5Status").text("Lamp 5 is off");
    }
    /********** lamp6  **********/
    if(lamp6Status == 1){
      $(".lamp6Status").text("Lamp 6 is on");
    } else if(lamp6Status == 0){
      $(".lamp6Status").text("Lamp 6 is off");
    }

  });
  /******obsługa przycisków*****/
  /********** lamp1  **********/
  $(".lamp1Button").click(function(){
    var firebaseRef = firebase.database().ref().child("lamp1Status");   //referencja do wybranej danej w bazie danych

    if(lamp1Status == 1){             //po kliknięciu przycisku jeżeli była wartość 1 zmień i ustaw na 0
      firebaseRef.set(0);
      lamp1Status = 0;
    } else {                          // w innym wypadku usatw 1
      firebaseRef.set(1);
      lamp1Status = 1;
    }
  });
  /********** lamp2  **********/
  $(".lamp2Button").click(function(){
    var firebaseRef = firebase.database().ref().child("lamp2Status");

    if(lamp2Status == 1){
      firebaseRef.set(0);
      lamp2Status = 0;
    } else {
      firebaseRef.set(1);
      lamp2Status = 1;
    }
  });
  /********** lamp3  **********/
  $(".lamp3Button").click(function(){
    var firebaseRef = firebase.database().ref().child("lamp3Status");

    if(lamp3Status == 1){
      firebaseRef.set(0);
      lamp3Status = 0;
    } else {
      firebaseRef.set(1);
      lamp3Status = 1;
    }
  });
  /********** lamp4  **********/
  $(".lamp4Button").click(function(){
    var firebaseRef = firebase.database().ref().child("lamp4Status");

    if(lamp4Status == 1){
      firebaseRef.set(0);
      lamp4Status = 0;
    } else {
      firebaseRef.set(1);
      lamp4Status = 1;
    }
  });
  /********** lamp5  **********/
  $(".lamp5Button").click(function(){
    var firebaseRef = firebase.database().ref().child("lamp5Status");

    if(lamp5Status == 1){
      firebaseRef.set(0);
      lamp5Status = 0;
    } else {
      firebaseRef.set(1);
      lamp5Status = 1;
    }
  });
  /********** lamp6  **********/
  $(".lamp6Button").click(function(){
    var firebaseRef = firebase.database().ref().child("lamp6Status");

    if(lamp6Status == 1){
      firebaseRef.set(0);
      lamp6Status = 0;
    } else {
      firebaseRef.set(1);
      lamp6Status = 1;
    }
  });

});

