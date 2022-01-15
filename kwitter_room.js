
//ADD YOUR FIREBASE LINKS HERE
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
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function addroom(){
      roomname=document.getElementById("roomname").value
      firebase.database().ref("/").child(roomname).update({
            purpose:"adding roomname"
      });
      localStorage.setItem("roomname",roomname)
      window.location="kwitter_page.html"
}
function redirectToRoomname(name){
      console.log(name)
      localStorage.setItem("roomname", name)
      window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("username")
      localStorage.removeItem("roomname")
}