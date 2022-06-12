function validateUser()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if((username=="sweety"&& password=="rani")||(username=="admin"&& password=="newton"))
{
    alert("login succesfully");
    
    document.getElementById("loginSucessful").innerHTML="login succesfully"
}
else if(username==""&&password==""){
    alert("field can't be empty");
}
else
{
    alert("login failed. The username or password is incorrect");
    document.getElementById("loginFail").innerHTML="login failed"

}
}
