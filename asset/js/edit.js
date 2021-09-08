
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

function editDetails(id) {
    console.log(id)
    userServise.edit_page().then(res => {
        console.log(res.data)
        const details = res.data

        $("#username").val(details.Name);
        $("#fathername").val(details.FatherName);
        $("#mothername").val(details.MotherName);
        $("#mobilenumber").val(details.MobileNumber);
        $("#emailid").val(details.EmailID);
        $("#dateofbirth").val(details.DateOfBirth);
        $("#aadharnumber").val( details.AadharNumber);
        $("#gender").val(details.Gender);
        $("#housenumber").val(details.HouseNumber);
        $("#streetname").val(details.StreetName);
        $("#cityname").val(details.CityName);
        $("#state").val(details.State);
        $("#pincode").val(details.pinNumber);

    })
        .catch(err => console.error(err))
}
function modifyInformation(){
    const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
const rev=urlParams.get('rev')
console.log(rev)
    console.log(id)
    let user=localStorage.getItem('LOGGED_IN_USER')
    console.log(user)
    let userData=JSON.parse(user)
    let loggedin=userData.map(e=>e._id)
    let userss=loggedin.toString()
    console.log(userss)
    console.log(userData)

let applicantName = $("#username").val();
let father_Name = $("#fathername").val();
let mother_Name = $("#mothername").val();
let mobile_Number =$("#mobilenumber").val();
let emaid_Id = $("#emailid").val();
let dateOfBirth = $("#dateofbirth").val();
let aadhar_Number = $("#aadharnumber").val();
let genderSelect = $("#gender").val();
let house_Number = $("#housenumber").val();
let street_Name = $("#streetname").val();
let city_Name = $("#cityname").val();
let statename = $("#state").val();
let pin_Code = $("#pincode").val();

let modifyinformation = {
    "Name": applicantName,
    "FatherName": father_Name,
    "MotherName": mother_Name,
    "MobileNumber": mobile_Number,
    "EmailID": emaid_Id,
    "DateOfBirth": dateOfBirth,
    "AadharNumber": aadhar_Number,
    "Gender": genderSelect,
    "HouseNumber": house_Number,
    "StreetName": street_Name,
    "CityName": city_Name,
    "State": statename,
    "pinNumber": pin_Code,
    "userid":userss,
    "userStatus":"pending"
        
}
console.log(modifyinformation);

userServise.editDetails(modifyinformation).then(res => {
    console.log(modifyinformation);
    alert("successfull")
    window.location.href="listapplication.html";
  }).catch(err => alert("error "))

}
editDetails(id)
