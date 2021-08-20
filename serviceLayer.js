class userServise {
    static login(login) {
        const loginData = {
            selector: {
                username: user,
                password: password
            }, fields: ['id', 'username']

        };
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
    static listData() {
        const dbUsername = 'apikey-v2-2q4ay3thu4r9w4i4o1vr74ypzd4tyr1lzxlt9916cky2';
        const dbPassword = 'bd763fb0b51e2d8e968a8154ae9b7869';
        const basicAuth = 'Basic ' + btoa(dbUsername + ':' + dbPassword);

        const url = "https://aacd9391-7b8b-4ac4-b12c-6b785e540ced-bluemix.cloudantnosqldb.appdomain.cloud/idproof_personaldetails/_all_docs?include_docs=true"
        return (axios.get(url, { headers: { 'Authorization': basicAuth } }));
    }
}