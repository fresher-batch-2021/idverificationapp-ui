const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

function viewDetails(id) {
    console.log(id)
    const dbUsername = 'apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2';
    const dbPassword = 'bd763fb0b51e2d8e968a8154ae9b7869';
    const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
    const url = `https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/request_to_change/${id}`
    axios.get(url, { headers: { 'Authorization': basicAuth } }).then(res => {
        console.log(res.data)
        const requestObj = res.data

        document.querySelector("#username").innerHTML = requestObj.name;
        document.querySelector("#idNumber").innerHTML = requestObj.idnumber;
        document.querySelector("#aadharNumber").innerHTML = requestObj.aadharnumber;
        document.querySelector("#oldNumber").innerHTML = requestObj.oldNumber;
        document.querySelector("#newNumber").innerHTML = requestObj.newNumber;
        document.querySelector("#oldAadress").innerHTML = requestObj.oldAddress;
        document.querySelector("#newAadress").innerHTML = requestObj.changeAddress;
        document.querySelector("#status").innerHTML = requestObj.status;
    })
        .catch(err => console.error(err))
}
viewDetails(id)