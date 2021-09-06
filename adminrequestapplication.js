let requestapplication = [];
const dbUsername = "apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2";
const dbPassword = "bd763fb0b51e2d8e968a8154ae9b7869";
const basicAuth = "Basic " + btoa(dbUsername + ":" + dbPassword);

const url ="https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/request_to_change/_all_docs?include_docs=true";
axios
  .get(url, { headers: { Authorization: basicAuth } })
  .then((res) => {
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
      `<tr><td>${requestObj.doc.name}</td><td>${requestObj.doc.aadharnumber}</td>
                    </td><td>${requestObj.doc.oldNumber}</td><td>${requestObj.doc.newNumber}</td><td>${requestObj.doc.oldAddress}</td><td>${requestObj.doc.changeAddress}</td><td>${requestObj.doc.status}</td>
                    <td><div class="dalete"><button type='button' onclick="delete_Data('${requestObj.doc._id}','${requestObj.doc._rev}')">Delete</button></div></td>
                    </tr>`;
    console.log(content);
    document.querySelector("#requestTable").innerHTML = content;
  }
}
function delete_Data(id, rev) {
  let cfm = confirm("do you want to delete this data");
  if (cfm) {
    console.log(id);
    console.log(rev);
    const url =
      "https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/request_to_change/";
    const dbUsername = "apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2";
    const dbPassword = "bd763fb0b51e2d8e968a8154ae9b7869";
    const basicAuth = "Basic " + btoa(dbUsername + ":" + dbPassword);
      axios.delete(url + id + "?rev=" + rev, {
        headers: { Authorization: basicAuth },
      })
      .then((res) => {
        alert("Delete Succesfull");
        window.location.reload().catch((err) => {
          alert("Error Is Deleting");
        });
      });
  }
}
