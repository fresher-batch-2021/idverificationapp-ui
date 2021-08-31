function adminpage() {
    event.preventDefault();
    const userName = document.querySelector("#userName").value;
    const password = document.querySelector("#password").value;
    let userObj = {
        "userName": userName,
        "password": password
    };
    if (userName == "Ganesh1011") {
        alert("UserName Cannot Be Blank");
        return true;
    } else if (password == "ganesh1011" ) {
        alert("Password Contain Atleast 6 Characters");
        return true;
    } else {
        console.log(userObj);
        alert("Login Successfull");
        window.location.href = "userlist.html";
    }
}