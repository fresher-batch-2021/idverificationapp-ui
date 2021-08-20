function loginpage() {
  event.preventDefault();
  const user = document.querySelector("#username").value;
 const passWord = document.querySelector("#password").value;
  
   if (user == "" || user == null || user.trim == "") {
    alert("Enter_User_Name");
    return false;
  }
 
  else if (passWord == " " || password == null) {
    alert("invalid_password");
    return false;
  }
  else{
    const loginData = {
      selector:{
        username: user,
        password: passWord
      },fields:['id','username']
       
    }
     const usernameobj={
       "userName":user
     }
     console.log(loginData);
     localStorage.setItem('nameform' , JSON.stringify(usernameobj));
     console.log(usernameobj);
 userServise.login(loginData).then(res => {
       let data = res.data.docs;
       console.log(data);
       if (data.length ==0){
       alert("invalid Login credentials");
      }else{
        const users = data[0];
        console.log(loginData);
        alert("successfull")
       window.location.href = "index.html";
      }
      }).catch(err => {
        console.log(err.response.data)
        alert("invalid")
      }
        )
    }
}