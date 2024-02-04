const login=()=> {
    if(username.value==""||pass.value==""||pass2.value==""||email1.value==""){
        alert("Please fill the details completely")
    }else{
        user=username.value
        email=email1.value
        localStorage.setItem("username",user)
        localStorage.setItem("email1",email)
        window.location="index.html"
        alert("Login Successfull")
    }
}