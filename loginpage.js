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

    const dbUsername = 'apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2';
    const dbPassword = 'bd763fb0b51e2d8e968a8154ae9b7869';
    const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
    
const url = "https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/idproofapplication_user/_find"

    const loginData = {
      selector:{
        username: user,
        password: password
      },fields:['id','username']
       
    }
     const usernameobj={
       "userName":user
     }
     console.log(usernameobj);
     localStorage.setItem('nameform' , JSON.stringify(usernameobj));

    axios.post(url, loginData,{ headers: {'Authorization': basicAuth }}).then(res => {
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