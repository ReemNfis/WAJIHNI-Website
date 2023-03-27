
function validateForm() {
  "use strict";

  var UserName = document.getElementById("usernamee").value;
  var email = "renad@imamu.com";
  var Password = document.getElementById("passwordd").value;
  var pass = "helloworld1";

  if (UserName == email && Password == pass) {
    window.location.href = "www.google.com";
  } else {
    alert("UserName and/or Password Do Not Match");
    return false;
  }
}
