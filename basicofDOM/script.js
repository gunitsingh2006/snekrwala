let x= document.getElementById("ele1")
x.addEventListener("click",function(){
    x.style.color="yellow"
    x.style.backgroundColor = "red";
})

let y= document.getElementById("ele2")
y.addEventListener("mousemove",function(){
    y.style.color="white"
    y.style.backgroundColor = "orange";
})
y.addEventListener("mouseleave",function(){
    y.style.color="orange"
    y.style.backgroundColor = "green";
})
let z= document.getElementById("ele3")
y.addEventListener("click",function(){
    z.style.backgroundColor = "blue";
})
y.addEventListener("click",function(){
    z.style.backgroundColor = "pink";
})