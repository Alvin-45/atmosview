if(localStorage.getItem('username'))
{
    usern.innerHTML=localStorage.getItem('username')
    name1.innerHTML=localStorage.getItem('username')
    email1.innerHTML=localStorage.getItem('email1')
    logout1.style.display='block'


}else{
    alert("Please Login!!!")
    window.location="login.html"
}

const logout=()=>{
    localStorage.removeItem('username')
    localStorage.removeItem('email1')
    window.location="index.html"
}