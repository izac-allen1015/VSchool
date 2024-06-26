function changeTextContent(elementId,newText){
document.getElementById(elementId).textContent=newText
}
//changeTextContent("paragraph", "This is new text.")
//changeTextContent("heading", "New Header.")

const button = document.getElementById("changeButton")
button.addEventListener("click", function(){
changeTextContent("heading", "New Header.")
})