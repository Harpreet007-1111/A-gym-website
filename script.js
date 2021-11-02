// script for login form

function validateForm(){
  var form = document.forms["login"] ["email"].value;
  if(form == "" || form == null){
    alert("Email must be filled out");
    return false;
  }
  var pass = document.forms["login"] ["password"].value;
  if(pass.length < 8 || pass == null){
    alert("password must contain more than 8 characters and must not be empty.");
    return false;
  }
}
function myFunction(){
  let x = document.getElementById("password");
  if (x.type === "password"){
    x.type = "text";
  } else {
    x.type = "password";
  } 
}

// code for the navigation bar

function myBars () {
  var x = document.getElementById("myNav");
  if(x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// end of the code

// code for the include-html

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};
