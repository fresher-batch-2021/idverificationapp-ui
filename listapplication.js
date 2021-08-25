
let application=[];
    userServise.listOfApplication().then(res => {
        let data = res.data;
        console.log("response : ",data);
        application=data.rows;
        console.log("tablelist:", application);
    displaytable(application);
          }).catch(err => alert("error "))

          function displaytable(application) {
            let content = "";
            for (let userObj of application) {
                content =
                    content +
                    `<tr><td>${userObj.doc._id}</td><td>${userObj.doc.Name}</td><td>${userObj.doc.MobileNumber}
                        </td><td>${userObj.doc.EmailID}</td><td>${userObj.doc.AadharNumber}</td><td>${userObj.doc.Gender}</td><td>${userObj.doc.State}</td><td><button><a href="editpage.html?id=${userObj.doc._id}?rev=${userObj.doc._rev}">Edit</a></button></td>
                        </tr>`; 
                console.log(content);
                document.querySelector("#applicationTable").innerHTML = content;
            }
        }
        function searchName() {
            let searchName = document.getElementById("searchBox").value;
            let myTable = document.getElementById("myTable");
            let tableRow = myTable.getElementsByTagName("tr");
            for (var i = 0; i < tableRow.length; i++) {
                let tableDatas = tableRow[i].getElementsByTagName("td")[1];
                if (tableDatas) {
                    let textValue = tableDatas.textContent.toLowerCase() || tableDatas.innerText.toLowerCase();
                    if (textValue.indexOf(searchName) > -1) {
                        tableRow[i].style.display = "";
                    } else {
                        tableRow[i].style.display = "none";
                    }
                }
            }
        }