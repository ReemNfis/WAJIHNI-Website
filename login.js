function auth() {
  var email = document.getElementById("usernamee").value;
  var password = document.getElementById("passwordd").value;
  if (email.value == "admin@imamu.com" && password.value == "admin123") {
    window.location.assign("editorhomepage.html");
    alert("Login Successfully ");
  } else {
    alert("Invalid Information ");
    return;
  }
}
