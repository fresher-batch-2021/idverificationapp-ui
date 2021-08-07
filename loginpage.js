function loginpage() {
    event.preventDefault();
    const Username1 = "Ganeshkumar1011";
    const Password2 = "Ganesh1011";
    const user = document.querySelector("#username").value;
    if (user == "" || user == null || user.trim == "") {
      alert("Enter_User_Name");
      return false;
    }
    const password = document.querySelector("#password").value;
    if (password == " " || password == null) {
      alert("invalid_password");
      return false;
    }

    if (user == Username1 && password == Password2) {
      alert("Correct");
      window.location.href = "index.html";
    }
    else {
      alert("invalid_user_and _Password")
    }
    console.log(user + " " + password)
  }