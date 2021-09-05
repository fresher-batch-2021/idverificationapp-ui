
function registration() {
    event.preventDefault();
const name = $("#yourname").val();
const dateofbirth = $("#datebirth").val();
const emailid = $("#email1").val();
const user_name = $("#username").val();
const mobilenumber = $("#mobileNo").val();
const password1 =$("#password").val();
const password2 =$("#confirmpassword").val();
const role="user";

console.log("Details", name, dateofbirth, emailid, mobilenumber, user_name, password1);

    try {
        validator.isValidString(name, "Enther_Your_Name");
        validator.isValidString(dateofbirth, "Enter_date_of_birth");
        validator.isValidString(emailid, "Enter_your_mailID");
        validator.isValidString(user_name, "Enter_User_name");
        validator.isValidString(mobilenumber, "Enter_User_Mobile_numbe");
        Password.isValidPassword(password1, "Enter_password");
        Password.isValidPassword(password2, "Dose_Not_Match_Password")

        alert("Registration_Done");
        const registerData = { 
                name: name,
                dob: dateofbirth,
                email: emailid,
                username: user_name,
                mobileNo: mobilenumber,
                password: password1,
                confirmpassword:password2,
                role:role
        };
        console.log(registerData);
      
        userServise.register(registerData).then(res => {
            console.log(res.data);
            alert("successfull")
         window.location.href = "loginpage.html";
        })
     } catch(err)  {
            console.error(err.message);
            alert(err.message);
            alert("Unable to register");
        }
    }
    function setDates() {
        let todayObj = new Date();
        let previousDay = dayjs().subtract(18, 'year').toDate();
        let today = previousDay.toJSON().substr(0, 10);
        document.querySelector("#dob").setAttribute("max", today);
    
    }
    setDates()