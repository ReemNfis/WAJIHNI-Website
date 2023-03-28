

function validation() {
  sessionStorage.setItem(
    "username",
    document.getElementById("usernamee").value
  );
  var email = document.getElementById("usernamee").value;
  var password = document.getElementById("passwordd").value;
  if (email == "admin@imamu.com" && password == "admin123") {
    window.location.assign("editorhomepage.html");
    alert("تم تسجيل الدخول بنجاح ");
  } else {
    alert("الرجاء التأكد من اسم المستخدم وكلمة المرور");
    return;
  }
}

