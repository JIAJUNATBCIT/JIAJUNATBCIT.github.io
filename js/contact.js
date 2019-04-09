function checkName() {
    var name = document.getElementById("usrname").value;
    if (name === null || name === "") {
        alert("Please input your name!!");
        return false;
    }else {
        return true;
    }
}

function checkEmail() {
    var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
    var email = document.getElementById("email").value;
    if(email === ""){
        alert("Please input your email !!");
        return false;
    }else if(!reg.test(email)){
        alert("Not a valid email !!");
        return false;
    }else{
        return true;
    }
}

function checkInfo() {
    var info = document.getElementById("introduction").value;
    if (info === null || info === "")
    {
        alert("Please tell us why do you want to reach us !!");
        return false;
    }else {
        return true;
    }
}

function validateForm() {
    return checkName() && checkEmail() && checkInfo();

}

function addData(){
    var db = firebase.firestore();
    var user_name = document.getElementById("usrname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var intro = document.getElementById("introduction").value;
    if (validateForm()) {
        alert("adding data");
        db.collection("introductions").add({
            user_name: user_name,
            email: email,
            password: password,
            intro : intro
        }).then(
            alert("Thank you for your submission!")
        );
    }
}