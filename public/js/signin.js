

function validate(){
    let email = document.getElementById("email");
    let pwd = document.getElementById("pwd");
    let admin = document.getElementById("admin");
    
    let emailError = false;
    let pwdError = false;

    //admin
    

    //email
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/
    if(!regexp.test(email.value.trim())){
        error.innerHTML = "Invalid email";
        error.style.color = "red";
        email.style.border = "2px solid red";
        emailError = true;
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
            pwder.innerHTML = "Week Password";
            pwder.style.color = "red";
            pwd.style.border = "2px solid red";
            pwdError = true;
        }
        else if(pwd.value.length<15){
            pwder.innerHTML = "Medium Strength";
            pwder.style.color = "orange";
            pwd.style.border = "2px solid orange";
        }
        else{
            pwder.innerHTML = "Strong Password";
            pwder.style.color = "green";
            pwd.style.border = "2px solid green";
        }
    }
    else{
        pwder.innerHTML = "Invalid";
        pwder.style.color = "red";
        pwd.style.border = "2px solid red";
        pwdError = true;
    }


    if(emailError===true||pwdError===true){
        return false;
    }
    else{
        return true;
    }
}








   
   
   
   






   
    