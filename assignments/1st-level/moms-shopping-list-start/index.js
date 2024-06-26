// var form = document.addItem
// for (var i = 0; i < title.lenth; i++) {
//     form.addEventListener("submit", function(event){
//         event.preventDefault()
//         var title = form.title.value
//         form.title.value = ""
//         console.log(title)
//     })
// }

function newListItem(items){
    const list = document.querySelector("#list")
    const listItem = document.createElement("li")
    const div = document.createElement("div")
    const editButton = document.createElement("button")
    const xButton = document.createElement("Button")
    //listItem.innerHTML =` <div>${items}</div>
    // <button class="delete">X</button>`
    div.textContent = items
    editButton.textContent = "Edit"
    xButton.textContent = "X"
    xButton.addEventListener("click", function() {
        listItem.remove()
    })
    listItem.appendChild(div)
    listItem.appendChild(editButton)
    listItem.appendChild(xButton)
    list.appendChild(listItem)
}


list.addEventListener("click", (event)=> {
    const target = event.target
    if (target.classList.contains("delete")){
        target.parentElement.remove()
    }
})

const form = document.querySelector("#add-todo")
form.addEventListener("submit", (event)=>{
    event.preventDefault()
    const title = form.title.value
    if (title){
        newListItem(title)
        form.reset()
    }
})