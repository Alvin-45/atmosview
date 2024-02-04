const submit=()=>{
    if(fname!="" && email!=="" && tarea!=""){
        form1.style.display="none"
        result.innerHTML=`Thank you for reaching out to us our team will soon contact you!!`
    }
}
if(localStorage.getItem('username'))
{
    logout1.style.display='block'
}

