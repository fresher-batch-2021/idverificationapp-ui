function requestChange() {
    event.preventDefault();
    const applicant_Name =$("#applicantname").val();
    if (applicant_Name == "" || applicant_Name == null || applicant_Name.trim == "") {
        toastr.error("Enter_Name");
        console.log("toastr completed");
        setTimeout(function () {
            console.log(Timeoutfunction);
        }, 3000);
        return false;
    }
    const aadhar_Number = $("#aadharNumber").val();
    if (aadhar_Number == "" || aadhar_Number == null) {
        toastr.error("Enter_Your_AadharNumber");
        console.log("toastr completed");
        setTimeout(function () {
            console.log(Timeoutfunction);
        }, 3000);
        return false;
    }
    const old_Mobile = $("#mobileNumber").val();
    if (old_Mobile == "" || old_Mobile == null) {
        toastr.error("Enter_Old_Mobile_number");
        console.log("toastr completed");
        setTimeout(function () {
            console.log(Timeoutfunction);
        }, 3000);
        return false;
    }
    const new_Mobile = $("#changeNumber").val();
    if (new_Mobile == "" || new_Mobile == null) {
        toastr.error("Enter_New_Mobile_number");
        console.log("toastr completed");
        setTimeout(function () {console.log(Timeoutfunction);
        }, 3000);
      
        return false;
    }
    const oldAddress = $("#oldAddress").val();
    if (oldAddress == "" || oldAddress == null) {
        toastr.error("Enter_Old_Aadress");
        console.log("toastr completed");
        setTimeout(function () {
            console.log(Timeoutfunction);
        }, 3000);

        return false;
    }
    const newAddress = $("#changeAddress").val();
    if (newAddress == "" || newAddress == null) {
        toastr.error("Enter_New_Aadress");
        console.log("toastr completed");
        setTimeout(function () {console.log(Timeoutfunction);
        }, 3000);
      
        return false;
    }
    const statusCard= $("#status").val();
    if (statusCard == "") {
        toastr.error("Please_Select_Status");
        console.log("toastr completed");
        setTimeout(function () {
            console.log(Timeoutfunction);
        }, 3000);
      
        return false;
    }
    let requestObj = {
        "name": applicant_Name,
        "aadharnumber": aadhar_Number,
        "oldNumber": old_Mobile,
        "newNumber": new_Mobile,
        "oldAddress": oldAddress,
        "changeAddress": newAddress,
        "status":statusCard,
    };
    console.log(requestObj);
   

    const dbUsername = 'apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2';
    const dbPassword = 'bd763fb0b51e2d8e968a8154ae9b7869';
    const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);

    const url = "https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/request_to_change";

    axios.post(url, requestObj, { headers: { 'Authorization': basicAuth } }).then(res => {
        console.log(requestObj);
        toastr.success("successfull");
        console.log("toastr completed");
        setTimeout(function () {
            window.location.href="requestapplication.html";
        }, 2000);
    }).catch(err => alert("error "))

}