function loginpage() {
  event.preventDefault();
  const user = $("#username").val();
 const passWord = $("#password").val();
  
   if (user == "" || user == null || user.trim == "") {
    toastr.error("Enter_User_Name");
        console.log("toastr completed");
        setTimeout(function () {
            console.log(Timeoutfunction);
        }, 3000);
    return false;
  }
 
  else if (passWord == " " || password == null) {
    toastr.error("invalid_password");
        console.log("toastr completed");
        setTimeout(function () {
            console.log(Timeoutfunction);
        }, 3000);
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
        toastr.error("Invalid Login Credentials");
        setTimeout(function () {
            console.log(Timeoutfunction);
        }, 2000);
      }else{
        const users = data[0];
        toastr.success("successfull");
        setTimeout(function () {
          window.location.href = "index.html";
            console.log(Timeoutfunction);
           
        }, 2000);
        console.log(loginData);      
      }
      }).catch(err => {
        toastr.error("invalid");
        setTimeout(function () {
            console.log(Timeoutfunction);
        }, 2000);
        console.log(err.response.data);
        // alert("invalid")
      }
        )
    }
}