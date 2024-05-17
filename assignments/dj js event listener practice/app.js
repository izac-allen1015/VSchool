var square = document.getElementById("square")
function hover(){
    square.style.backgroundColor = "blue"
}
square.addEventListener("mouseover", hover)

function mDown(){
    square.style.backgroundColor = "red"
}
square.addEventListener("mousedown", mDown)

function letGo (){
    square.style.backgroundColor = "yellow" 
}
square.addEventListener("mouseup", letGo)

function doubleClick(){
    square.style.backgroundColor = "green"
}
square.addEventListener("dblclick", doubleClick)

function mScroll (){
    square.style.backgroundColor = "orange" 
}
square.addEventListener("wheel", mScroll)

