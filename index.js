
    function pan() {
        event.preventDefault();
    const name = document.querySelector("#first").value;
    if (name == "" || name == null || name.trim == "") {
        alert("Invalid Name")
                                return false;
                          }
    const father_first = document.querySelector("#ffirst").value;
    if (father_first == "" || father_first == null || father_first.trim == "") {
        alert("Fill_The_Fathername")
            return false;
                          }
    const mother_first = document.querySelector("#mfirst").value;
    if (mother_first == "") {
        alert("Fill The Mothername")
             return false;
                          }

    const mobile = document.querySelector("#mobilenumber").value;
    if (mobile == "") {
        alert("Enter mobile_number")
              return false;
                          }

    const email = document.querySelector("#Email").value;
    if (email == "") {
        alert("Enter_mail.ID")
               return false;
                          }
    const dob = document.querySelector("#dob").value
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
    if (gender == "") {
        alert("Please_Select_gender")
                return false;
          }

    console.log(name + " " + father_first + " " + mother_first + " " + mobile + " " + email + " " + dob + " " + aadharnumber + " " + gender)
    alert("verified");
    window.location.href = "residential.html";  
         }
