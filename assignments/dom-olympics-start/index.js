var header = document.getElementById("header")
header.innerHTML += "<header>JavaScript Made This!!</header>"
header.style.fontSize = "x-large";
header.style.textAlign = "center";

var spanOne = document.createElement("span")
spanOne.textContent = "Izac Petersen ";
// document.body.prepend(spanOne);
spanOne.id = "myName"
spanOne.style.color = "blue";
spanOne.style.fontSize = "small"
document.getElementById("header").appendChild(spanOne)

var spanTwo = document.createElement("span")
spanTwo.textContent = "wrote the JavaScript";
// document.body.prepend(spanTwo)
spanTwo.style.fontSize = "small"
document.getElementById("header").appendChild(spanTwo)

var messagesLeft = document.getElementsByClassName("message left")
messagesLeft[0].textContent = "Hello how are you?"
messagesLeft[1].textContent = "Congrats"

var messagesRight = document.getElementsByClassName("message right")
messagesRight[0].textContent = "I'm doing really good and I just gratuated!"
messagesRight[1].textContent = "Thank you, I'm glad to be done."
var allMessages = document.querySelector(".messages")
var clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click", function(){
        allMessages.textContent = ""
})
