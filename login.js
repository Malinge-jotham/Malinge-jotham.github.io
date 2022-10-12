import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
  
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB2MoL_neGB99Ta56Zp5-6_LZ2N-KBpn60",
    authDomain: "signup-14804.firebaseapp.com",
    projectId: "signup-14804",
    storageBucket: "signup-14804.appspot.com",
    messagingSenderId: "436675702572",
    appId: "1:436675702572:web:e3051c8a802b7887c6c689",
    measurementId: "G-5G41J3J8E8"
  };
 // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  //signup function
  function signUp() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
    window.open("loginform.html","_self");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email").value;
    var password  = document.getElementById("password").value;
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
 // firebase.auth().onAuthStateChanged((user)=>{
 //   if(user){
  //    var email = user.email;
   //   alert("Active user "+email);

   // }else{
   //   alert("No Active user Found")
 //   }
 // })
