const routes = [
    { path: '', redirectTo: 'index.html', pathMatch: 'full'},
    { path: 'index.html' },
    { path: 'loginpage.html' },
    { path: 'registration.html' },
    { path: 'listapplication.html', role: ["user"] },
    { path: 'requestchange.html', role: ["user"] },
    { path: 'editpage.html', role: ["user"] },
    { path: 'details.html', role: ["user"] },
    { path: 'requestapplication.html', role: ["user"] },
    { path: 'admin.html', role: ["admin"] },
    { path: 'userlist.html', role: ["admin"] },
    { path: 'adminlistapplication.html', role: ["admin"] },
    { path: 'adminrequestapplication.html', role: ["admin"] } 
];


function checkAccess(pageName, role) {
    let isAllowed = false;
    for (let route of routes) {
        if (route.path == pageName) {
            if (!route.role) {
                isAllowed = true;
                break;
            } else if (route.role.includes(role)) {
                isAllowed = true;
                break;
            }
        }
    }
    return isAllowed;
}
(function(){
console.log("Routes initializing")
let user = JSON.parse(localStorage.getItem("LOGGED_IN_USER"));
console.log("ABC:" ,user);
for( let x of user){
    console.log(x.role);


let role = user != null ? x.role : null;
let pathName = window.location.pathname.substr(1);
console.log("Path Name:", pathName, ",role=", x.role);
let allowedAccess = checkAccess(pathName, x.role);

console.log("Access :", allowedAccess);

if (!allowedAccess) {
    alert("You are not authorized to access this page. Redirecting to login page");
    window.location.href = "loginpage.html";
}
}
}) ();