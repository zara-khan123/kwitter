var firebaseConfig = {
      apiKey: "AIzaSyD2W7_SWyQupPiQ6ocim0C1__kuvs3sYb0",
      authDomain: "kwitter-73d9e.firebaseapp.com",
      databaseURL: "https://kwitter-73d9e-default-rtdb.firebaseio.com",
      projectId: "kwitter-73d9e",
      storageBucket: "kwitter-73d9e.appspot.com",
      messagingSenderId: "933814068118",
      appId: "1:933814068118:web:fb8ecc5ff96773513733b7",
      measurementId: "G-SYD9P9NGX2"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML =  "Welcome " + user + "!";
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) { 
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick ='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML += row;
      });});}
getData();

 function addRoom()
 {
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
 }

 function redirectToRoomName(name)
 {
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
 }
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}
