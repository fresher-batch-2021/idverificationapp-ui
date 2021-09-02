
let application=[];  

let userData = JSON.parse(localStorage.getItem('userName'));
console.log("userdata :", userData);
let emailId = userData.email;
console.log(emailId);

    userServise.viewList(emailId).then(res => {
        let data = res.data;
        console.log("response : ",data);
        application=data.docs;
        console.log("tablelist:", application);
    displaytable(application);
          }).catch(err => alert("error "))

          function displaytable(application) {
            let content = "";
            for (let userObj of application) {
                content =
                    content +
                    `<tr><td>${userObj.doc.Name}</td><td>${userObj.doc.MobileNumber}
                        </td><td>${userObj.doc.EmailID}</td><td>${userObj.doc.AadharNumber}</td><td>${userObj.doc.Gender}</td>
                        </tr>`; 
                //console.log(content);
                document.querySelector("#applicationTable").innerHTML = content;
            }
        }