function requestChange() {
    event.preventDefault();
    const applicant_Name = document.querySelector("#applicantname").value;
    if (applicant_Name == "" || applicant_Name == null || applicant_Name.trim == "") {
        alert("Enter_Your_Name")
        return false;
    }
    const id_Numbers = document.querySelector("#applicantIdNumbers").value;
    if (id_Numbers == "" || id_Numbers == null || id_Numbers.trim == "") {
        alert("Enter_Your_Fathername")
        return false;
    }
    const aadhar_Number = document.querySelector("#aadharNumber").value;
    if (aadhar_Number == "" || aadhar_Number == null) {
        alert("Enter_Your_Mothername")
        return false;
    }
    const mobile = document.querySelector("#mobilenumber").value;
    if (mobile == "" || mobile == null) {
        alert("Enter_Mobile_number")
        return false;
    }


}