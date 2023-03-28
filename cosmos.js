let img=document.querySelector(".img");
let deg=2;
setInterval(()=>{
    img.style.transform=`rotate(${deg+'deg'})`
    deg++
    console.log
},50)
let moon=document.querySelector(".moon");
setInterval(()=>{
    moon.style.transform=`rotate(${deg+'deg'})`
    deg++
    console.log
},50)

