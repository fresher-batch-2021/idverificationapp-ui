
function pan() {
    event.preventDefault();
    let user=localStorage.getItem('LOGGED_IN_USER')
    console.log(user)
    let userData=JSON.parse(user)
    let loggedin=userData.map(e=>e._id)
    let userss=loggedin.toString()
    console.log(userss)
    console.log(userData)
    const name =$("#applicantnames").val();
    if (name == "" || name == null || name.trim == "") {
        toastr.error("Enter_Your_Name");
        console.log("toastr completed");
        setTimeout(function () {
            console.log(Timeoutfunction);
        }, 3000);
        return false;
    }
    const father_name = $("#fathername").val();
     if (father_name == "" || father_name == null || father_name.trim == "") {
        toastr.error("Enter_Your_Fathername");
        console.log("toastr completed");
        setTimeout(function () {
            console.log(Timeoutfunction);
        }, 3000);
        return false;
    }
    const mother_name = $("#mathername").val();
    if (mother_name == "" || mother_name == null) {
        toastr.error("Enter_Your_Mothername");
        console.log("toastr completed");
        setTimeout(function () {
            console.log(Timeoutfunction);
        }, 3000);
        return false;
    }
    const mobile = $("#mobilenumber").val();
    if (mobile == "" || mobile == null) {
        toastr.error("Enter_Mobile_number");
        console.log("toastr completed");
        setTimeout(function () {
            console.log(Timeoutfunction);
        }, 3000);
        return false;
    }
    const email = $("#Email").val();
    if (email == "" || email == null) {
        toastr.error("Enter_mailID");
        console.log("toastr completed");
        setTimeout(function () {
            console.log(Timeoutfunction);
        }, 3000);
        return false;
    }
    const dob = $("#dob").val();
    if (dob == "" || dob == null) {
        toastr.error("Enter_DateOfBirth");
        console.log("toastr completed");
        setTimeout(function () {
            console.log(Timeoutfunction);
        }, 3000);
        return false;
    }
    const aadharnumber = $("#aadharnumber").val();
    if (aadharnumber == ""|| aadharnumber == null) {
        toastr.error("Enter_your_Aadhar_number");
        console.log("toastr completed");
        setTimeout(function () {
            console.log(Timeoutfunction);
        }, 3000);
        return false;
    }
    
    const homenumber = $("#no").val();
    if (homenumber == "" || homenumber == null) {
        toastr.error("Enter_the_Door_Number");
        console.log("toastr completed");
        setTimeout(function () {
            console.log(Timeoutfunction);
        }, 3000);
        return false;
    }

    const arearoad = $("#area").val();
    if (arearoad == "" || arearoad==null ) {
        toastr.error("Enter_street_Name");
        console.log("toastr completed");
        setTimeout(function () {
            console.log(Timeoutfunction);
        }, 3000);
        return false;
    }
    const citydown = $("#city").val();
    if (citydown == "" || citydown==null) {
        toastr.error("Enter_the_city_name");
        console.log("toastr completed");
        setTimeout(function () {
            console.log(Timeoutfunction);
        }, 3000);
        return false;
    }
    const state = $("#state").val();
    if (state == "" || state==null) {
        toastr.error("Enter_the_state");
        console.log("toastr completed");
        setTimeout(function () {
            console.log(Timeoutfunction);
        }, 3000);
        return false;
    }
    const pinnumber = $("#pin").val();
    if (pinnumber == "" || pinnumber==null) {
        toastr.error("Enter_the_pin_number");
        console.log("toastr completed");
        setTimeout(function () {
            console.log(Timeoutfunction);
        }, 3000);
        return false;
    }
    const gender = $("#gender").val();
    if (gender == "") {
        toastr.error("Please_Select_Gender");
        console.log("toastr completed");
        setTimeout(function () {
            console.log(Timeoutfunction);
        }, 3000);
        return false;
    }

    let userobj = {
        "Name": name,
        "FatherName": father_name,
        "MotherName": mother_name,
        "MobileNumber": mobile,
        "EmailID": email,
        "DateOfBirth": dob,
        "AadharNumber": aadharnumber,
        "Gender": gender,
        "HouseNumber": homenumber,
        "StreetName": arearoad,
        "CityName": citydown,
        "State": state,
        "pinNumber": pinnumber,
        "userStatus":"pending",
        "userid":userss
    };
    console.log(userobj);
    // const dbUsername = 'apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2';
    // const dbPassword = 'bd763fb0b51e2d8e968a8154ae9b7869';
    // const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
 
    //  const url = "https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/idproof_personaldetails";
    //  axios.post(url, userobj, { headers: { 'Authorization': basicAuth }})
    userServise.indexdata(userobj).then(res => {
        console.log(userobj);
        toastr.success("verified");
        console.log("toastr completed");
        setTimeout(function () {
            window.location.href="listapplication.html";
        }, 2000);
    
   }).catch(err =>{
    toastr.error("Invalid Login Credentials");
    setTimeout(function () {
        console.log(Timeoutfunction);
    }, 1000);}
    //  alert("Error")
   )
}

function setDate() {
    let todayObj = new Date();
    let previousDay = dayjs().subtract(18, 'year').toDate();
    let today = previousDay.toJSON().substr(0, 10);
    document.querySelector("#dob").setAttribute("max", today);

}
setDate()