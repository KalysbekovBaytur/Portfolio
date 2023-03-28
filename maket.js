let dotts=document.getElementById("dotts")
let crest=document.getElementById("crest")  
let home=document.getElementById("home")  
dotts.onclick=function(){
    dotts.style.opacity=0;
    // home.classList.toggle("view")
    home.classList.replace("home","view")
    crest.style.opacity=1;
    // home.style.opacity=1;
}
crest.onclick=function(){
    home.classList.replace("view","home")
     dotts.style.opacity=1;
//     crest.style.opacity=0;
//     home.style.opacity=0;
//
 }