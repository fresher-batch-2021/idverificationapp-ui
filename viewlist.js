
let application=[];    
    userServise.viewList().then(res => {
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
                        </td><td>${userObj.doc.EmailID}</td><td>${userObj.doc.AadharNumber}</td><td>${userObj.doc.Gender}</td>
                        </tr>`; 
                console.log(content);
                document.querySelector("#applicationTable").innerHTML = content;
            }
        }