function requestChange() {
    event.preventDefault();
    const applicant_Name = document.querySelector("#applicantname").value;
    if (applicant_Name == "" || applicant_Name == null || applicant_Name.trim == "") {
        alert("Enter_Name")
        return false;
    }
    const idNumbers = document.querySelector("#applicantIdNumber").value;
    if (idNumbers == "" || idNumbers == null || idNumbers.trim == "") {
        alert("Enter_Your_ID_Number")
        return false;
    }
    const aadhar_Number = document.querySelector("#aadharNumber").value;
    if (aadhar_Number == "" || aadhar_Number == null) {
        alert("Enter_Your_AadharNumber")
        return false;
    }
    const old_Mobile = document.querySelector("#mobileNumber").value;
    if (old_Mobile == "" || old_Mobile == null) {
        alert("Enter_Old_Mobile_number")
        return false;
    }
    const new_Mobile = document.querySelector("#changeNumber").value;
    if (new_Mobile == "" || new_Mobile == null) {
        alert("Enter_New_Mobile_number")
        return false;
    }
    const oldAddress = document.querySelector("#oldAddress").value;
    if (oldAddress == "" || oldAddress == null) {
        alert("Enter_Old_Aadress")
        return false;
    }
    const newAddress = document.querySelector("#changeAddress").value;
    if (newAddress == "" || newAddress == null) {
        alert("Enter_New_Aadress")
        return false;
    }
    let requestObj = {
        "name": applicant_Name,
        "idnumber": idNumbers,
        "aadharnumber": aadhar_Number,
        "oldNumber": old_Mobile,
        "newNumber": new_Mobile,
        "oldAddress": oldAddress,
        "changeNumber": newAddress,
    };
    console.log(requestObj);
    alert("Done");

    const dbUsername = 'apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2';
    const dbPassword = 'bd763fb0b51e2d8e968a8154ae9b7869';
    const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);

    const url = "https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/request_to_change";

    axios.post(url, requestObj, { headers: { 'Authorization': basicAuth } }).then(res => {
        console.log(requestObj);
        alert("successfull")
    }).catch(err => alert("error "))

}