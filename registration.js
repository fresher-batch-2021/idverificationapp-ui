
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
        Validator.isValidString(name, "Enther_Your_Name");
        Validator.isValidString(dateofbirth, "Enter_date_of_birth");
        Validator.isValidString(emailid, "Enter_your_mailID");
        Validator.isValidString(user_name, "Enter_User_name");
        Validator.isValidString(mobilenumber, "Enter_User_Mobile_numbe");
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
        const dbUsername = 'apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2';
        const dbPassword = 'bd763fb0b51e2d8e968a8154ae9b7869';
        const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);

        const url = "https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/idproofapplication_user";
       
       
        axios.post(url, registerData, { headers: { 'Authorization': basicAuth } }).then(res => {
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

    function setDate() {
        let todayObj = new Date();
        let previousDay = dayjs().subtract(1, 'day').toDate();
        let today = previousDay.toJSON().substr(0, 10);
        document.querySelector("#dob").setAttribute("max", today);
     }
    setDate()

















 /* function registration() {
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
        alert("Enter_password")
        return false;
    }
    const password2 = document.querySelector("#confirmpassword").value;
    if (password2 !== password1) {
        alert("Dose_Not_Match_Password")
    }
    else {
            const dbUsername = 'apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2';
            const dbPassword = 'bd763fb0b51e2d8e968a8154ae9b7869';
            const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);

            const url = "https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/idproofapplication_user"
            const registerData = {
                name: name,
                dob: dateofbirth,
                email: emailid,
                username: user_name,
                mobileNo: mobilenumber,
                password: password1
            }
        
            axios.post(url, registerData, { headers: { 'Authorization': basicAuth } }).then(res => {
                console.log(registerData);
                alert("successfull")
                window.location.href = "loginpage.html";
            }).catch(err => alert("error "))
        }
    }  
    */