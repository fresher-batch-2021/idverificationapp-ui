
let application=[];
    userServise.listOfApplication().then(res => {
        let data = res.data;
        console.log("response : ",data);
        application=data.rows;
        console.log("tablelist:", application);
    displaytable(application);
          }).catch(err =>{
            toastr.error("Invalid Error Credentials");
            setTimeout(function () {
                console.log(Timeoutfunction);
            }, 2000);
          }
            //  alert("error ")
             )

          function displaytable(application) {
            let content = "";
            for (let userObj of application) {
                let user=localStorage.getItem('LOGGED_IN_USER')
                let userData=JSON.parse(user)
                let userdetail=userData.map(e=>e._id).toString()
                console.log(userObj.doc)
                if(userdetail===userObj.doc.userid){
                    content =
                    content +
                        `<tr><td>${userObj.doc.Name}</td>
                        <td>${userObj.doc.MobileNumber}
                        </td><td>${userObj.doc.EmailID}</td>
                        <td>${userObj.doc.AadharNumber}</td>
                        <td>${userObj.doc.Gender}</td
                        ><td>${userObj.doc.State}</td>
                        <td>${userObj.doc.userStatus}</td>
                        <td><button><a href="editpage.html?id=${userObj.doc._id}?rev=${userObj.doc._rev}">Edit</a></button></td></tr>`; 
                console.log(content);
                $("#applicationTable").html(content);
                }else{
                    console.log('Not applied')
                }
                
            }
        }
        
        function searchName() {
            let searchName = $("#searchBox").val();
            let myTable = document.getElementById("myTable");
            let tableRow = myTable.getElementsByTagName("tr");
            for (var i = 0; i < tableRow.length; i++) {
                let tableDatas = tableRow[i].getElementsByTagName("td")[0];
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
















        // function delete_data(id,rev) {
        //     let cfm = confirm("do you want to delete this data")
        //     if (cfm){
        //     console.log(id);
        //     console.log(rev);
        //     let url = "https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/idproof_personaldetails/";
        //         const dbUsername = 'apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2';
        //         const dbPassword = 'bd763fb0b51e2d8e968a8154ae9b7869';
        //         const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
        //         axios.delete(url+id+"?rev="+rev, { headers: { 'Authorization': basicAuth }}).then(rev =>{
        //             alert("Delete Succesfull");
        //             window.location.reload()
        //             .catch(err =>{
        //                 alert("Error Is Deleting")
        //             })
        //         })
        //     }      
        // }