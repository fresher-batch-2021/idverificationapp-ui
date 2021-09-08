let requestapplication = [];

userServise.request().then((res) => {
    let data = res.data;
    console.log("response : ", data);
    requestapplication = data.rows;
    console.log("tablelist:", requestapplication);
    requesttable(requestapplication);
  })
  .catch((err) => alert("error "));

function requesttable(requestapplication) {
  let content = "";
  for (let requestObj of requestapplication) {
    content =
      content +
      `<tr><td>${requestObj.doc.name}</td>
      <td>${requestObj.doc.aadharnumber}</td>
      </td><td>${requestObj.doc.oldNumber}</td>
      <td>${requestObj.doc.newNumber}</td>
      <td>${requestObj.doc.oldAddress}</td>
      <td>${requestObj.doc.changeAddress}</td>
      <td>${requestObj.doc.status}</td>
      <td><div class="dalete"><button type='button' onclick="delete_Data('${requestObj.doc._id}','${requestObj.doc._rev}')">Delete</button></div></td>
                    </tr>`;
    console.log(content);
    $("#requestTable").html(content);
  }
}
function delete_Data(id, rev) {
  let cfm = confirm("do you want to delete this data");
  if (cfm) {
    console.log(id);
    console.log(rev);
    userServise.request_Dalete(id, rev).then((res) => {
        alert("Delete Succesfull");
        window.location.reload().catch((err) => {
          alert("Error Is Deleting");
        });
      });
  }
}
