// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAvGNKO4UUUeiL-ahwN0O0T80t_geox9jU",
      databaseURL: "https://kwitter-277d2-default-rtdb.firebaseio.com/",
      authDomain: "kwitter-277d2.firebaseapp.com",
      projectId: "kwitter-277d2",
      storageBucket: "kwitter-277d2.appspot.com",
      messagingSenderId: "683070005634",
      appId: "1:683070005634:web:5a202fa50a9ddc2521af9b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //YOUR FIREBASE LINKS
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
firebase.database().ref(room_name).child(message_id).update({
      like : updated_likes
});
function logout(){
    localStorage.removeItem("user_name");  
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name : user_name,
      message : msg,
      like : 0
});
}