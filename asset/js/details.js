const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

function viewDetails(id) {
    console.log(id)
    userServise.detailspage().then(res => {
        console.log(res.data)
        const requestObj = res.data

        $("#username").html(requestObj.name);
        $("#aadharNumber").html(requestObj.aadharnumber);
        $("#oldNumber").html(requestObj.oldNumber);
        $("#newNumber").html(requestObj.newNumber);
        $("#oldAadress").html(requestObj.oldAddress);
        $("#newAadress").html( requestObj.changeAddress);
        $("#status").html(requestObj.status);
    })
        .catch(err => console.error(err))
}
viewDetails(id)