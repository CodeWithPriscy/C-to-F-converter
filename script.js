function convertion(){
    const val=document.getElementById("inbox").value;
    const fah=(val*9/5)+32;
    const result=document.getElementById("result");
    result.style.opacity = "1"; 
    result.innerHTML="RESULT : "+fah.toFixed(2)+" F";
}