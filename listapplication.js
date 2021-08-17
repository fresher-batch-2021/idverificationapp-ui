
let application=[];
const dbUsername = 'apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2';
        const dbPassword = 'bd763fb0b51e2d8e968a8154ae9b7869';
        const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
        
    const url = "https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/idproof_personaldetails/_all_docs?include_docs=true"

    axios.get(url, { headers: {'Authorization': basicAuth }}).then(res => {
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
                    `<tr><td>${userObj.doc._id}</td><td>${userObj.doc.FirstName}</td><td>${userObj.doc.MobileNumber}
                        </td><td>${userObj.doc.EmailID}</td><td>${userObj.doc.AadharNumber}</td><td>${userObj.doc.Gender}</td><td><a href="editpage.html?id=${userObj.doc._id}">Edit</a></td>
                        </tr>`; 
                console.log(content);
                document.querySelector("#applicationTable").innerHTML = content;
            }
        }