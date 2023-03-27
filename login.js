const form = document.getElementById("submitForm");
const UserName = document.getElementById("usernamee").value;
const Password = document.getElementById("passwordd").value;
const email = "editor@imamu.com";
const pass = "helloworld1";
function validateForm () {
      if (UserName == "" || UserName == null) {
          alert("يرجى إدخال البريد الإلكتروني");
          return;
      }
      if (Password == "" || Password == null) {
          alert("يرجى إدخال كلمة المرور");
          return;

      }
      if (UserName != email || Password != pass) {
          alert("اسم المستخدم و/أو كلمة المرور غير صحيحة");
          return;
      }
      if (UserName == email && Password == pass) {
        alert("form submitted successfully")
		return true;
      }
}

