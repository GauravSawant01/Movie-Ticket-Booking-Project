function submit() {
    const username = "Gaurav";
    const password = "Pass@123";
    if(document.getElementById("I1").value.length == 0 || document.getElementById("I2").value.length == 0) {
        if(document.getElementById("I1").value.length == 0) {
            document.getElementById("I1m").innerHTML = "Username cannot be blank";
            document.getElementById("I1").style.border = "2px solid red";
        }
        if(document.getElementById("I2").value.length == 0) {
            document.getElementById("I2m").innerHTML = "Password cannot be blank";
            document.getElementById("I2").style.border = "2px solid red";
        }
    }
    else if(document.getElementById("I1").value == username && document.getElementById("I2").value == password) {
        document.getElementById("output").innerHTML = "Login Successful";
        document.getElementById("I1").style.border = "2px solid #4fee4f";
        document.getElementById("I2").style.border = "2px solid #4fee4f";
    }
    else {
        document.getElementById("output").innerHTML = "Username or Password Incorrect";
        document.getElementById("I1").style.border = "2px solid red";
        document.getElementById("I2").style.border = "2px solid red";
    }
}