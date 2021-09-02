function adminpage() {
    event.preventDefault();
    const userName = document.querySelector("#userName").value;
    const password = document.querySelector("#password").value;
    const email = "rajesh123";
    const password1 = "rajesh";
    let userObj = {
        "userName": userName,
        "password": password
    };
    if (userName == "") {
        alert("UserName Cannot Be Blank");
        return false;
    } else if (password == "") {
        alert("Password Contain Atleast 6 Characters");
        return false;
    } else if (userName != email || password != password1) {
        alert("Invalid details");
        return false;
    } else {
        console.log(userObj);
        alert("Login Successfull");
        window.location.href = "userlist.html";
    }
}