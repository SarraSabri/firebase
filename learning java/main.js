var firebaseConfig = {
  apiKey: "AIzaSyCcOB_znT__locVzUGB2M8ii087U82BN-Y",
  authDomain: "test123245-cea62.firebaseapp.com",
  databaseURL: "https://test123245-cea62.firebaseio.com",
  projectId: "test123245-cea62",
  storageBucket: "",
  messagingSenderId: "531834555533",
  appId: "1:531834555533:web:b6eb1f892542c502"
};
firebase.initializeApp(firebaseConfig);

var messagesRef=firebase.database().ref("test123245");
function submitform(e){
e.preventDefault();
var name= document.getElementById('name1').value;
var gender= document.getElementById('gender1').value;
var email= document.getElementById('email1').value;
var password= document.getElementById('password1').value;
var address= document.getElementById('address1').value;
var expertise= document.getElementById('expertise').value;
saveMessage(name,gender,email,password,address,expertise);
}
document.getElementById('contactform').addEventListener('submit',submitform);
function saveMessage(name,gender,email,password,address,expertise){
  var newmessagsRef = messagesRef.push();
  newmessagsRef.set({
    name:name,
    gender:gender,
    email:email,
    password:password,
    address:address,
    expertise:expertise
  });
}
