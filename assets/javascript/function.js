var config = {
    apiKey: "AIzaSyDzhsEFNzXjQ0YhOkdS3YWIdzrxOG4HHX0",
    authDomain: "pistachio-4a3df.firebaseapp.com",
    databaseURL: "https://pistachio-4a3df.firebaseio.com",
    projectId: "pistachio-4a3df",
    storageBucket: "pistachio-4a3df.appspot.com",
    messagingSenderId: "1062361334522"
  };
 firebase.initializeApp(config);

var database = firebase.database();

//pulling input information and pushing it to firebase
$(".submit").on("click",function(event){
    event.preventDefault();

    var name = $("#name-input").val().trim();
    var location = $("#location-input").val().trim();
    var departing = $("#departing-input").val();
    var returning = $("#returning-input").val();

    var key = {
        name: name,
        location: location,
        departing: departing,
        returning: returning,
    };

    database.ref().push(key);

    location.href="agenda.html"

});



//referring to firebase to get information and appending it
database.ref().limitToLast(1).on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
 
    var name = childSnapshot.val().name;
    var location = childSnapshot.val().location;
    var departing = childSnapshot.val().departing;
    var returning = childSnapshot.val().returning;
  
    $("#name-display").append(name + "'s");
    $("#city-display").append(location);
    $("#departing-display").append(departing.toString("MMM DD YYYY"));
    $("#returning-display").append(returning.toString("MMM DD YYYY"));
});


