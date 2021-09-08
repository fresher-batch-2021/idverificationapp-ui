
let requestapplication = [];
userServise.requestApplication().then(res => {
    let data = res.data;
    console.log("response : ", data);
    requestapplication = data.rows;
    console.log("tablelist:", requestapplication);
    requesttable(requestapplication);
}).catch(err => alert("error "))

function requesttable(requestapplication) {
    let content = "";
    for (let requestObj of requestapplication) {
        content =
            content +
            `<tr><td>${requestObj.doc.name}</td><td>${requestObj.doc.aadharnumber}</td>
                    </td><td>${requestObj.doc.oldNumber}</td><td>${requestObj.doc.newNumber}</td><td>${requestObj.doc.oldAddress}</td><td>${requestObj.doc.changeAddress}</td><td>${requestObj.doc.status}</td>
                    <td><button><a href="details.html?id=${requestObj.doc._id}?rev=${requestObj.doc._rev}">View</a></button></td> </tr>`;
        console.log(content);
       $("#requestTable").html(content);
    }
}