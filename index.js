
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
    if (mother_name == "") {
        alert("Enter_Your_Mothername")
        return false;
    }
    const mobile = document.querySelector("#mobilenumber").value;
    if (mobile == "") {
        alert("Enter_Mobile_number")
        return false;
    }
    const email = document.querySelector("#Email").value;
    if (email == "") {
        alert("Enter_mailID")
        return false;
    }
    const dob = document.querySelector("#dob").value;
    if (dob == "") {
        alert("Enter_date_if_birth")
        return false;
    }
    const aadharnumber = document.querySelector("#aadharnumber").value;
    if (aadharnumber == "") {
        alert("Enter_your_Aadhar_number")
        return false;
    }
    const gender = document.querySelector("#gender").value;
    const homenumber = document.querySelector("#no").value;
    if (homenumber == "") {
        alert("Enter the Door Number")
        return false;
    }

    const arearoad = document.querySelector("#area").value;
    if (arearoad == "") {
        alert("Enter street Name")
        return false;
    }
    const citydown = document.querySelector("#city").value;
    if (citydown == "") {
        alert("Enter the city name")
        return false;
    }
    const state = document.querySelector("#state").value;
    if (state == "") {
        alert("Enter the state")
        return false;
    }
    const pinnumber = document.querySelector("#pin").value;
    if (pinnumber == "") {
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
    const dbUsername = 'apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2';
    const dbPassword = 'bd763fb0b51e2d8e968a8154ae9b7869';
    const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);

    const url = "https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/idproof_personaldetails";
    axios.post(url, userobj, { headers: { 'Authorization': basicAuth } }).then(res => console.log(res.data))
    console.log(userobj);
    alert("verified");
}
