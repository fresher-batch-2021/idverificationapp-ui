function loginpage() {
  event.preventDefault();

  const user = document.querySelector("#username").value;
   const password = document.querySelector("#password").value;
  if (user == "" || user == null || user.trim == "") {
    alert("Enter_User_Name");
    return false;
  }
 
  else if (password == " " || password == null) {
    alert("invalid_password");
    return false;
  }
  else{
  const url = "https://product-mock-api.herokuapp.com/identityapp/api/v1/auth/login"
    const loginData = {
        username: user,
        password: password
    }
    const usernameobj={
      "userName":user
    }
    console.log(usernameobj);
    localStorage.setItem('nameform' , JSON.stringify(usernameobj));

    axios.post(url, loginData).then(res => {
        console.log(loginData);
        alert("successfull")
        window.location.href = "index.html";
      }).catch(err => alert(" invalid details"))
    }
}