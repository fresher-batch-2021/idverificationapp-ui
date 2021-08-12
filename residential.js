function residential() {
    event.preventDefault();
    const homenumber = document.querySelector("#no").value;
    if (homenumber == "") {
        alert("Enter the Door Number")
        return false;
    }

    const arearoad = document.querySelector("#area").value;
    if (arearoad == "") {
        alert("Enter street Name")
        return false;
    }
    const citydown = document.querySelector("#city").value;
    if (citydown == "") {
        alert("Enter the city name")
        return false;
    }
    const state = document.querySelector("#state").value;
    if (state == "") {
        alert("Enter the state")
        return false;
    }
    const pinnumber = document.querySelector("#pin").value;
    if (pinnumber == "") {
        alert("Enter the pin number")
        return false;
    }
    let userobj={
        "HouseNumber":homenumber,
        "StreetName":arearoad,
        "CityName":citydown,
        "State":state,
        "pinNumber":pinnumber,
    };
    console.log(userobj)
   // console.log(homenumber + " " + arearoad + " " + citydown + " " + state + " " + pinnumber)
    localStorage.setItem('address', JSON.stringify(userobj));
    alert("successful");
    window.location.href = "details.html";
    
}