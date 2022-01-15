var firebaseConfig = {
      apiKey: "AIzaSyBDnJ1lwxhyp5y2DH6cfmaMvPWJG_ujkgs",
      authDomain: "practice-e7c42.firebaseapp.com",
      databaseURL: "https://practice-e7c42-default-rtdb.firebaseio.com",
      projectId: "practice-e7c42",
      storageBucket: "practice-e7c42.appspot.com",
      messagingSenderId: "529506910194",
      appId: "1:529506910194:web:f19276243756fe873ef56b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("username")
    roomname=localStorage.getItem("roomname")

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value
      firebase.database().ref(roomename).push({
            name: username,
             message:msg,
             like:0
      });
      document.getElementById("msg").innerHTML=""
}