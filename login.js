const login=()=> {
    if(username.value==""||pass.value==""){
        alert("Please fill the details completely")
    }else{
        user=username.value
        localStorage.setItem("username",user)
        window.location="index.html"
        alert("Login Successfull")
    }
}