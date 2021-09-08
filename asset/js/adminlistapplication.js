let application = [];
userServise.listOfApplication()
  .then((res) => {
    let data = res.data;
    console.log("response : ", data);
    application = data.rows;
    console.log("tablelist:", application);
    displaytable(application);
  })
  .catch((err) => alert("error "));

function displaytable(applicationValue) {
  let content = "";
  for (let userObj of applicationValue) {
    content =
      content +
      `<tr><td>${userObj.doc.Name}</td>
            <td>${userObj.doc.MobileNumber}</td>
            <td>${userObj.doc.EmailID}</td>
            <td>${userObj.doc.AadharNumber}</td>
            <td>${userObj.doc.Gender}</td>
            <td>${userObj.doc.State}</td>
            <td>${userObj.doc.userStatus}</td>
            <td><div class="dalete"><button type='button' onclick="delete_data('${userObj.doc._id}','${userObj.doc._rev}')">Delete</button></div></td>
            <td><button type='button' onclick="updateStatus('${userObj.doc._id}','ACCEPTED')">Accept
            </button>&nbsp;&nbsp;&nbsp;<button type='button' onclick="updateStatus('${userObj.doc._id}','REJECTED')">Reject</button></td>
                        </tr>`;
    console.log(content);
    $("#applicationTable").html(content);
  }
}
function delete_data(id, rev) {
  let cfm = confirm("do you want to delete this data");
  if (cfm) {
    console.log(id);
    console.log(rev);
userServise.adminlist(id,rev).then(res=>
 window.location.reload());
alert("Deleted")
.catch(err=>console.log(err.message))
  }
}
function searchName() {
  let searchNames = $("#searchBox").val();
  let myTable = document.getElementById("myTable");
  let tableRow = myTable.getElementsByTagName("tr");
  for (var i = 0; i < tableRow.length; i++) {
    let tableDatas = tableRow[i].getElementsByTagName("td")[0];
    if (tableDatas) {
      let textValue =
        tableDatas.textContent.toLowerCase() ||
        tableDatas.innerText.toLowerCase();
      if (textValue.indexOf(searchNames) > -1) {
        tableRow[i].style.display = "";
      } else {
        tableRow[i].style.display = "none";
      }
    }
  }
}
function updateStatus(id, status) {
  const dbUsername = "apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2";
  const dbPassword = "bd763fb0b51e2d8e968a8154ae9b7869";
  const basicAuth = "Basic " + btoa(dbUsername + ":" + dbPassword);
  let url =
    "https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/idproof_personaldetails/" +
    id;
  axios
    .get(url, { headers: { Authorization: basicAuth } }).then((result) => {
      const applicationObj = result.data;

      applicationObj.userStatus = status;

      const updateURL = url + "?rev=" + applicationObj._rev;
      console.log(updateURL);
      axios
        .put(updateURL, applicationObj, {
          headers: { Authorization: basicAuth },
        })
        .then((result) => {
          console.log("Update row", result.data);
          alert("Updated");
          window.location.reload();
        });
    })
    .catch((err) => {
      let errorMessage = err.response.data;
      console.error(errorMessage);
      console.log("failed");
      alert("Error-" + errorMessage);
    });
}
