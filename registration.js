function registration() {
    event.preventDefault();
    const name = document.querySelector("#yname").value;
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
    const password1 = document.querySelector("#confirmpassword").value;
    if (password1 == "") {
        alert("invalid_password")
        return false;
    }
 console.log(name + " " + dateofbirth + " " + emailid + " " + user_name + "" + password1)
    alert("success");
    window.location.href = "loginpage.html";
}