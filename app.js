var signin=true;
 

//hide show pop up login
$(document).ready(function(){
  setTimeout(function(){

    $('#popUpMain').css('display','block');
  },5000);
});

// function getvalue()
// {
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in
   
    // var x = document.getElementById("popUpMain");
    // x.style.display = "none"; 
    
     
    var user = firebase.auth().currentUser;


    if(user != null){
      // signin=true;
      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome to E-learning Portal.You are welcome: " + email_id;
   
    }

  } else {
    // No user is signed in.

  // signin=false;
   
  }
});

// if(signin===true)
// {   alert("signed in now in E-learning Portal");
// var a=false;  
// // var x = document.getElementById("popUpMain");
// // x.style.display = "none"; 

//   return a;
// }
// else
// {   
// var b=true;  
//   return b;
// }
// }



function login(){
  // var check=getvalue();
  //hide show pop up login
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  // else{
  //   //var x = document.getElementById("popUpMain");
  //       x.style.display = "block";
    
  // }
       
  
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    
  



    var ale=alert("Error : " + errorMessage);
    if(ale==="Error : ")
    {
      signin=true;
    }
    else{
      signin=false;
    }
    // ...
    alert(signin);
  while(signin==true)
  {
    alert("In In true condition if "+signin);
    var x = document.getElementById("popUpMain");
    x.style.display = "none";
    // var check=getvalue();
    if(signin==false)
    {
      alert("In false condition if "+signin);
      alert("Signed not in");
      document.getElementById("popUpMain").style.display="block";
      break;

    }
  }

  });
  

}

function logout(){
  firebase.auth().signOut();
}
