
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
        document.querySelector("#fathername").value = details.Fathername;
        document.querySelector("#mothername").value = details.Mothername;
        document.querySelector("#mobilenumber").value = details.MobileNumber;
        document.querySelector("#emailid").value = details.EmailId;
        document.querySelector("#dateofbirth").value = details.DateOfbirth;
        document.querySelector("#aadharnumber").value = details.AadharNumber;
        document.querySelector("#gender").value = details.Gender;
        document.querySelector("#housenumber").value = details.HouseNo;
        document.querySelector("#streetname").value = details.StreetName;
        document.querySelector("#cityname").value = details.CityName;
        document.querySelector("#state").value = details.StateName;
        document.querySelector("#pincode").value = details.PinCode;

    })
        .catch(err => console.error(err))
}
function modifyinformation(){
let applicantName = document.querySelector("#username").value;
let father_Name = document.querySelector("#fathername").value;
let mother_Name = document.querySelector("#mothername").value;
let mobile_Number = document.querySelector("#mobilenumber").value;
let emaid_Id = document.querySelector("#emailid").value;
let dateOfBirth = document.querySelector("#dateofbirth").value;
let aadhar_Number = document.querySelector("#aadharnumber").value;
let genderSelect = document.querySelector("#gender").value
let house_Number = document.querySelector("#housenumber").value;
let street_Name = document.querySelector("#streetname").value;
let city_Name = document.querySelector("#cityname").value;
let statename = document.querySelector("#state").value;
let pin_Code = document.querySelector("#pincode").value;

let modifyinformation = {
    "Name": applicantName,
    "Fathername": father_Name,
    "Mothername": mother_Name,
    "MobileNumber": mobile_Number,
    "EmailId": emaid_Id,
    "DateOfbirth": dateOfBirth,
    "AadharNumber": aadhar_Number,
    "Gender": genderSelect,
    "HouseNo": house_Number,
    "StreetName": street_Name,
    "CityName": city_Name,
    "StateName": statename,
    "PinCode": pin_Code
}
console.log(modifyinformation);

const dbUsername = 'apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2';
const dbPassword = 'bd763fb0b51e2d8e968a8154ae9b7869';
const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);

const url = "https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/idproof_personaldetails"

axios.post(url, modifyinformation,{ headers: {'Authorization': basicAuth }}).then(res => {
    console.log(modifyinformation);
    alert("successfull")
  }).catch(err => alert("error "))

}

editDetails(id)