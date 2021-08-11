function registration() {
    event.preventDefault();
    const name = document.querySelector("#yourname").value;
    if (name == "" || name == null) {
        alert("Enther_Your_Name")
        return false;
    }
    const dateofbirth = document.querySelector("#datebirth").value;
    if (dateofbirth == " ") {
        alert("Enter_date_of_birth")
        return false;
    }
    const emailid = document.querySelector("#email1").value;
    if (emailid == " ") {
        alert("Enter_your_mailID")
        return false;
    }
    const user_name = document.querySelector("#Username").value;
    if (user_name == "") {
        alert("Enter_User_name")
        return false;
    }
    const mobilenumber = document.querySelector("#number").value;
    if (mobilenumber == "") {
        alert("Enter_User_Mobile_number")
        return false;
    }
    const password1 = document.querySelector("#password").value;
    if (password1 == "") {
        alert("invalid_password")
        return false;
    }
    const password2 = document.querySelector("#confirmpassword").value;
    if (password2 !== password1) {
        alert("Invalid_password")
    }
    else{

    const url = "https://product-mock-api.herokuapp.com/identityapp/api/v1/auth/register"
    const registerData = {
        name: name,
        dob: dateofbirth,
        email: emailid,
        username: user_name,
        mobileNo: mobilenumber,
        password: password1
    }
    
    axios.post(url, registerData).then(res => {
        console.log(registerData);
        alert("successfull")
        window.location.href = "loginpage.html";
      }).catch(err => alert("error "))
    }
      
}