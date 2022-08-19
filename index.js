function fun() {
    if(document.getElementById("uname").value != "Gaurav" || document.getElementById("pass").value != "Pass@123") {
        document.getElementById("para1").innerHTML = "UserName: " + document.getElementById("uname").value;;
        document.getElementById("para2").innerHTML = "Password: " + document.getElementById("pass").value;
        document.getElementById("para3").innerHTML = "Your Username or password is wrong";
    }
    else {
        document.getElementById("para1").innerHTML = "UserName: " + document.getElementById("uname").value;;
        document.getElementById("para2").innerHTML = "Password: " + document.getElementById("pass").value;
        document.getElementById("para3").innerHTML = "Login Success ...";
    } 
}