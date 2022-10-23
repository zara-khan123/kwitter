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
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
   
      });});}
getData();
