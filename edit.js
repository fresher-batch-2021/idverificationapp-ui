
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
 
function editDetails(id){
console.log(id)
const dbUsername = 'apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2';
    const dbPassword = 'bd763fb0b51e2d8e968a8154ae9b7869';
    const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
   
const url = `https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/idproof_personaldetails/${id}`

axios.get(url,{ headers: {'Authorization': basicAuth }}).then(res=>{console.log(res.data)
const details=res.data


document.querySelector("#username").innerHTML = details.FirstName;
document.querySelector("#fathername").innerHTML = details.FatherName;
document.querySelector("#mothername").innerHTML=details.MotherName;
document.querySelector("#mobilenumber").innerHTML=details.MobileNumber;
document.querySelector("#emailid").innerHTML=details.EmailID;
document.querySelector("#dateofbirth").innerHTML=details.DataOfBirth;
document.querySelector("#aadharnumber").innerHTML=details.AadharNumber;
document.querySelector("#gender").innerHTML=details.Gender; 
document.querySelector("#housenumber").innerHTML = details.HouseNumber;
document.querySelector("#streetname").innerHTML = details.StreetName;
document.querySelector("#cityname").innerHTML = details.CityName;
document.querySelector("#state").innerHTML = details.StateName;
document.querySelector("#pincode").innerHTML = details.PinCode;

})
.catch(err=>console.error(err))
}
editDetails(id)