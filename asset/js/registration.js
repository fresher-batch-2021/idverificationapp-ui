

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
        validator.isValidString(dateofbirth, "Enter_Date_Of_Birth");
        validator.isValidString(emailid, "Enter_Your_MailID");
        validator.isValidString(user_name, "Enter_User_Name");
        validator.isValidString(mobilenumber, "Enter_User_Mobile_Numbe");
        Password.isValidPassword(password1, "Enter_Password");
        Password.isValidPassword(password2, "Dose_Not_Match_Password")

        
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
            alert("successfull");
            progressBar()
        })
     } catch(err)  {
        toastr.error("Unable to register");
        setTimeout(function () {
            console.log(Timeoutfunction);
        }, 1000);
        }
    }
    setDates()
    function setDates() {
        let todayObj = new Date();
        let previousDay = dayjs().subtract(18, 'year').toDate();
        let today = previousDay.toJSON().substr(0, 10);
        document.querySelector("#dob").setAttribute("max", today);   
    }
    
    function progressBar() {
        var element = document.getElementById("myprogressBar");
        var width = 1;
        var identity = setInterval(scene, 15);
        function scene() {
            if (width >= 10) {
            clearInterval(identity),
            window.location.href = "loginpage.html";
            } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width * 1 + '%';
            }
        }
        }