function validation(){
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let email = document.getElementById("email");
    let pwd = document.getElementById("pwd");
    let phNo = document.getElementById("phNo");
    let address1 = document.getElementById("address1");
    let address2 = document.getElementById("address2");
    let state = document.getElementById("state");
    let city = document.getElementById("city");
    let zip = document.getElementById("zip");
    
    let emailError = false;
    let pwdError = false;
    let phoneError = false;
    let fnameError = false;
    let lnameError = false;
    let address1Error = false;
    let address2Error = false;
    let stateError = false;
    let cityError = false;
    let zipError = false;
    

    //email
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
    if(!regexp.test(email.value.trim())){
        error.innerHTML = "Invalid email";
        error.style.color="red";
        email.style.border = "2px solid red";
        emailError= true;
    }
    else{
        error.innerHTML = "Valid email";
        error.style.color = "green";
        email.style.border = "2px solid green";
    }

    //password
    let regpwd = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/
    if(regpwd.test(pwd.value)){
        if(pwd.value.length<9){
            pwdcmt1.innerHTML = "Week Password";
            pwdcmt1.style.color = "red";
            pwd.style.border = "2px solid red";
            pwdError = true;
        }
        else if(pwd.value.length<15){
            pwdcmt1.innerHTML = "Medium Strength";
            pwdcmt1.style.color = "orange";
            pwd.style.border = "2px solid orange";
        }
        else{
            pwdcmt1.innerHTML = "Strong Password";
            pwdcmt1.style.color = "green";
            pwd.style.border = "2px solid green";
        }
    }
    else{
        pwdcmt1.innerHTML = "Invalid";
        pwdcmt1.style.color = "red";
        pwd.style.border = "2px solid red";
        pwdError = true;
    }

     //phone number
    let regph = /^(\d{10})|(\d{4}-\d{3}-\d{3})|(\d{3}\s\d{3}\s\d{4})|(\d{3}\.\d{3}\.\d{4})$/
      if(!regph.test(phNo.value)){
        phno.innerHTML = "Invalid";
        phno.style.color = "red";
        phNo.style.border = "2px solid red";
        phoneError= true;
    }
    else{
        phno.innerHTML = "Valid";
        phno.style.color = "green";
        phNo.style.border = "2px solid green";
    }


    //Name
    let regfname = /^([a-zA-Z]{2,20})$/
    if(!regfname.test(fname.value.trim())){
        fName.innerHTML = "Invalid";
        fName.style.color = "red";
        fname.style.border = "2px solid red";
        fnameError = true;
    }
    else{
        fName.innerHTML = "Valid";
        fName.style.color = "green";
        fname.style.border = "2px solid green";
    }

    let reglname = /^([a-zA-Z]{2,20})$/
    if(!reglname.test(lname.value.trim())){
        lName.innerHTML = "Invalid";
        lName.style.color = "red";
        lname.style.border = "2px solid red";
        lnameError = true;
    }
    else{
        lName.innerHTML = "Valid";
        lName.style.color = "green";
        lname.style.border = "2px solid green";
    }
    //address
    let regadd =/^([a-zA-Z].{2,30})$/
    if(!regadd.test(address1.value.trim())){
        add1.innerHTML = "Invalid";
        add1.style.color = "red";
        address1.style.border = "2px solid red";
        address1Error = true;
    }
    else{
        add1.innerHTML = "Valid";
        add1.style.color = "green";
        address1.style.border = "2px solid green";
    }

    //address2
    if(!regadd.test(address2.value.trim())){
        add2.innerHTML = "Invalid";
        add2.style.color = "red";
        address2.style.border = "2px solid red";
        address2Error = true;
    }
    else{
        add2.innerHTML = "Valid";
        add2.style.color = "green";
        address2.style.border = "2px solid green";
    }

    let regstate =/^([a-zA-Z]{2,30})$/

    //city
    if(!regstate.test(city.value.trim())){
        cities.innerHTML = "Invalid";
        cities.style.color = "red";
        city.style.border = "2px solid red";
        cityError = true;
    }
    else{
        cities.innerHTML = "Valid";
        cities.style.color = "green";
        city.style.border = "2px solid green";
    }

    //state
    if(!regstate.test(state.value.trim())){
        states.innerHTML = "Invalid";
        states.style.color = "red";
        state.style.border = "2px solid red";
        stateError = true;
    }
    else{
        states.innerHTML = "Valid";
        states.style.color = "green";
        state.style.border = "2px solid green";
    }

    //zip
    let regzip = /^(\d{6})$/
    if(!regzip.test(zip.value.trim())){
        Zip.innerHTML = "Invalid";
        Zip.style.color = "red";
        zip.style.border = "2px solid red";
        zipError = true;
    }
    else{
        Zip.innerHTML = "Valid";
        Zip.style.color = "green";
        zip.style.border = "2px solid green";
    }


    if(emailError===true||pwdError===true||phoneError===true||fnameError===true||lnameError===true||address1Error===true||address2Error===true||stateError===true||cityError===true||zipError===true){
        return false;
    }
    else{
        
        return true;
    }
}