let userapplication = [];
const dbUsername = 'apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2';
const dbPassword = 'bd763fb0b51e2d8e968a8154ae9b7869';
const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);

const url = "https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/idproofapplication_user/_all_docs?include_docs=true"
axios.get(url, { headers: { 'Authorization': basicAuth } }).then(res => {
    let data = res.data;
    console.log("response : ", data);
    userapplication = data.rows;
    console.log("tablelist:", userapplication);
    userlist(userapplication);
}).catch(err => alert("error "))

function userlist(userapplication) {
    let content = "";
    for (let userObj of userapplication) {
        content =
            content +
            `<tr><td>${userObj.doc.name}</td>
            <td>${userObj.doc.dob}</td>
            <td>${userObj.doc.email}</td>
            <td>${userObj.doc.mobileNo}</td>
            </td><td>${userObj.doc.username}</td>
            </tr>`;
        console.log(content);
        $("#userTable").html(content);
    }
}