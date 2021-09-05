
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

function editDetails(id) {
    console.log(id)
    const dbUsername = 'apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2';
    const dbPassword = 'bd763fb0b51e2d8e968a8154ae9b7869';
    const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);

    const url = `https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/idproof_personaldetails/${id}`

    axios.get(url, { headers: { 'Authorization': basicAuth } }).then(res => {
        console.log(res.data)
        const details = res.data

        document.querySelector("#username").value = details.Name;
        document.querySelector("#fathername").value = details.FatherName;
        document.querySelector("#mothername").value = details.MotherName;
        document.querySelector("#mobilenumber").value = details.MobileNumber;
        document.querySelector("#emailid").value = details.EmailID;
        document.querySelector("#dateofbirth").value = details.DateOfBirth;
        document.querySelector("#aadharnumber").value = details.AadharNumber;
        document.querySelector("#gender").value = details.Gender;
        document.querySelector("#housenumber").value = details.HouseNumber;
        document.querySelector("#streetname").value = details.StreetName;
        document.querySelector("#cityname").value = details.CityName;
        document.querySelector("#state").value = details.State;
        document.querySelector("#pincode").value = details.pinNumber;

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
