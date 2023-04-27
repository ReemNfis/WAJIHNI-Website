

function validation() {
  sessionStorage.setItem(
    "username",
    document.getElementById("usernamee").value
  );
   const admin = "admin@imamu.com"
   const pass ="admin123"
  var email = document.getElementById("usernamee").value;
  var password = document.getElementById("passwordd").value;
  if (email == admin && password == pass ) {
    window.location.assign("editorhomepage.html");
    alert("تم تسجيل الدخول بنجاح ");
  } else {
    alert("الرجاء التأكد من اسم المستخدم وكلمة المرور");
    return;
  }
}

