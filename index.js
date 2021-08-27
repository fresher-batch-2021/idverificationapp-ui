
function pan() {
    event.preventDefault();
    const name = document.querySelector("#applicantnames").value;
    if (name == "" || name == null || name.trim == "") {
        alert("Enter_Your_Name")
        return false;
    }
    const father_name = document.querySelector("#fathername").value;
     if (father_name == "" || father_name == null || father_name.trim == "") {
        alert("Enter_Your_Fathername")
        return false;
    }
    const mother_name = document.querySelector("#mathername").value;
    if (mother_name == "" || mother_name == null) {
        alert("Enter_Your_Mothername")
        return false;
    }
    const mobile = document.querySelector("#mobilenumber").value;
    if (mobile == "" || mobile == null) {
        alert("Enter_Mobile_number")
        return false;
    }
    const email = document.querySelector("#Email").value;
    if (email == "" || email == null) {
        alert("Enter_mailID")
        return false;
    }
    const dob = document.querySelector("#dob").value;
    if (dob == "" || dob == null) {
        alert("Enter_date_if_birth")
        return false;
    }
    const aadharnumber = document.querySelector("#aadharnumber").value;
    if (aadharnumber == ""|| aadharnumber == null) {
        alert("Enter_your_Aadhar_number")
        return false;
    }
    const gender = document.querySelector("#gender").value;
    const homenumber = document.querySelector("#no").value;
    if (homenumber == "" || homenumber == null) {
        alert("Enter the Door Number")
        return false;
    }

    const arearoad = document.querySelector("#area").value;
    if (arearoad == "" || arearoad==null ) {
        alert("Enter street Name")
        return false;
    }
    const citydown = document.querySelector("#city").value;
    if (citydown == "" || citydown==null) {
        alert("Enter the city name")
        return false;
    }
    const state = document.querySelector("#state").value;
    if (state == "" || state==null) {
        alert("Enter the state")
        return false;
    }
    const pinnumber = document.querySelector("#pin").value;
    if (pinnumber == "" || pinnumber==null) {
        alert("Enter the pin number")
        return false;
    }

    if (gender == "") {
        alert("Please_Select_Gender")
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
    };
    userServise.indexdata(userobj).then(res => console.log(res.data))
    console.log(userobj);
    alert("verified");
}


function setDate() {
    let todayObj = new Date();
    let previousDay = dayjs().subtract(1, 'day').toDate();
    let today = previousDay.toJSON().substr(0, 10);
    document.querySelector("#dob").setAttribute("max", today);

}
setDate()