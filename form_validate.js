function validation()
{
    if (document.getElementById("uname").value == "" || document.getElementById("uname").value.trim() == "")
    {
    document.getElementById("msg1").innerHTML = "Please Enter username"
    return false
    }
    if (document.getElementById("mail").value == "")
    {
    document.getElementById("msg2").innerHTML = "Please Enter your e-mail"
    return false
    }
    if (document.getElementById("pw").value == "" || document.getElementById("pw").value.trim() == "")
    {
    document.getElementById("msg3").innerHTML = "Please Enter Password"
    return false
    }
    if (document.getElementById("cpw").value !== document.getElementById("pw").value)
    {
    document.getElementById("msg4").innerHTML = "Password not Matching"
    return false
    }
}


var agree=document.getElementById("agree")
agree.addEventListener('change', function()
{ 
    let register = document.getElementById("register")
    if (agree.checked)
    {
        register.removeAttribute('disabled')
    }
    else{
        register.setAttribute('disabled','disabled')
    }
}

)