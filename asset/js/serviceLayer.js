class userServise {
    static login(loginData) {
        const dbUsername = 'apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2';
        const dbPassword = 'bd763fb0b51e2d8e968a8154ae9b7869';
        const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);

        const url = "https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/idproofapplication_user/_find"
        return (axios.post(url, loginData, { headers: { 'Authorization': basicAuth } }));
    }


    static register(registerData) {
        const dbUsername = 'apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2';
        const dbPassword = 'bd763fb0b51e2d8e968a8154ae9b7869';
        const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);

        const url = "https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/idproofapplication_user";
        return (axios.post(url, registerData, { headers: { 'Authorization': basicAuth } }));
    }


    static indexdata(userobj){
   const dbUsername = 'apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2';
   const dbPassword = 'bd763fb0b51e2d8e968a8154ae9b7869';
   const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);

    const url = "https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/idproof_personaldetails";
    return  (axios.post(url, userobj, { headers: { 'Authorization': basicAuth }}));
    }


static listOfApplication(){
    const dbUsername = 'apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2';
        const dbPassword = 'bd763fb0b51e2d8e968a8154ae9b7869';
        const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
        
    const url = "https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/idproof_personaldetails/_all_docs?include_docs=true"

   return (axios.get(url, { headers: {'Authorization': basicAuth }}));
}


    static viewList() {
        const dbUsername = 'apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2';
        const dbPassword = 'bd763fb0b51e2d8e968a8154ae9b7869';
        const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
        
    const url = "https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/idproof_personaldetails/_all_docs?include_docs=true"
    return (axios.get(url, { headers: {'Authorization': basicAuth }}));
    }


    static editDetails(modifyinformation ){
    const dbUsername = 'apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2';
const dbPassword = 'bd763fb0b51e2d8e968a8154ae9b7869';
const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);

const url = `https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/idproof_personaldetails/${id}`
  return (axios.put(url, modifyinformation,{ headers: {'Authorization': basicAuth }}));
}


static adminlist(id,rev){
    let url ="https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/idproof_personaldetails/";
const dbUsername = "apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2";
const dbPassword = "bd763fb0b51e2d8e968a8154ae9b7869";
const basicAuth = "Basic " + btoa(dbUsername + ":" + dbPassword);
 return axios.delete(url + id + "?rev=" + rev, {headers: { Authorization: basicAuth },})
}


static updateState(id){
const dbUsername = "apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2";
  const dbPassword = "bd763fb0b51e2d8e968a8154ae9b7869";
  const basicAuth = "Basic " + btoa(dbUsername + ":" + dbPassword);
  let url =
    "https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/idproof_personaldetails/"+id;
   return axios.get(url, { headers: { Authorization: basicAuth } })
}


static request(){
    const dbUsername = "apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2";
const dbPassword = "bd763fb0b51e2d8e968a8154ae9b7869";
const basicAuth = "Basic " + btoa(dbUsername + ":" + dbPassword);

const url ="https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/request_to_change/_all_docs?include_docs=true";
  return axios.get(url, { headers: { Authorization: basicAuth } })
}


static request_Dalete(id,rev){
    const url ="https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/request_to_change/";
  const dbUsername = "apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2";
  const dbPassword = "bd763fb0b51e2d8e968a8154ae9b7869";
  const basicAuth = "Basic " + btoa(dbUsername + ":" + dbPassword);
  return axios.delete(url + id + "?rev=" + rev, {headers: { Authorization: basicAuth }, })
}


static detailspage(){
    const dbUsername = 'apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2';
    const dbPassword = 'bd763fb0b51e2d8e968a8154ae9b7869';
    const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
    const url = `https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/request_to_change/${id}`
   return axios.get(url, { headers: { 'Authorization': basicAuth } })
}


static edit_page(){
    const dbUsername = 'apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2';
    const dbPassword = 'bd763fb0b51e2d8e968a8154ae9b7869';
    const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);

    const url = `https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/idproof_personaldetails/${id}`

   return axios.get(url, { headers: { 'Authorization': basicAuth } })
}

static requestApplication(){
    const dbUsername = 'apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2';
const dbPassword = 'bd763fb0b51e2d8e968a8154ae9b7869';
const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
const url = "https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/request_to_change/_all_docs?include_docs=true"
return axios.get(url, { headers: { 'Authorization': basicAuth } })
}

static request_Change(requestObj){
    const dbUsername = 'apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2';
    const dbPassword = 'bd763fb0b51e2d8e968a8154ae9b7869';
    const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
    const url = "https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/request_to_change";
   return axios.post(url, requestObj, { headers: { 'Authorization': basicAuth } })
}

static user_List(){
    const dbUsername = 'apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2';
     const dbPassword = 'bd763fb0b51e2d8e968a8154ae9b7869';
     const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);
    
     const url = "https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/idproofapplication_user/_all_docs?include_docs=true"
    return axios.get(url, { headers: { 'Authorization': basicAuth } })
}
}