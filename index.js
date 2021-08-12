
    function pan() {
        event.preventDefault();
    const name = document.querySelector("#applicantnames").value;
    if (name == "" || name == null || name.trim == "") {
        alert("Enter_Your_Name")
           return false;
     }
    const father_name = document.querySelector("#fathername").value;
    if (father_name== "" || father_name == null || father_name.trim == "") {
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
    if (aadharnumber == ""  ) {
        alert("Enter_your_Aadhar_number")
              return false;
                          }
    const gender = document.querySelector("#gender").value;
    if (gender == "") {
        alert("Please_Select_Gender")
                return false;
          }
         
          let userobj={
            "Name" : name,
            "FatherName": father_name,
            "MotherName": mother_name,
            "MobileNumber":mobile,
            "EmailID":email,
            "DateOfBirth":dob,
            "AadharNumber":aadharnumber,
             "Gender":gender,
        };
        console.log(userobj);
    localStorage.setItem('indexform' , JSON.stringify(userobj)); 
    alert("verified");
    window.location.href = "residential.html";  
}
