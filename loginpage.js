function loginpage() {
  event.preventDefault();
  const user = $("#username").val();
 const passWord = $("#password").val();
  
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
      },fields:['_id','username','role']
       
    }
     const usernameobj={
       "userName":user
     }
     console.log(loginData);
 userServise.login(loginData).then(res => {
       let data = res.data.docs;
       console.log(data);

       localStorage.setItem('LOGGED_IN_USER' , JSON.stringify(data));
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