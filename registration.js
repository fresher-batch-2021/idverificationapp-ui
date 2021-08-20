
function registration() {
    event.preventDefault();
const name = document.querySelector("#yourname").value;
const dateofbirth = document.querySelector("#datebirth").value;
const emailid = document.querySelector("#email1").value;
const user_name = document.querySelector("#username").value;
const mobilenumber = document.querySelector("#mobileNo").value;
const password1 = document.querySelector("#password").value;
const password2 = document.querySelector("#confirmpassword").value;

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
                confirmpassword:password2
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

    /* function setDate() {
         let todayObj = new Date();
         let previousDay = dayjs().subtract(1, 'day').toDate();
         let today = previousDay.toJSON().substr(0, 10);
         document.querySelector("#dob").setAttribute("max", today);
      }
     setDate()*/
