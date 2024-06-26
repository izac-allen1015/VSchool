/* Thins are some things that may need and help with trying to do this
While loops 
varaibles
booleans 
if/else if/else or switch statement
*/


let gameOver = false;
let key = false;
const readline = require("readline-sync")
let name 
function gameLoop(){
    const options = readline.question("What would you like to do? (1) Find the key (2) Put hand in hole (3) Open the door") 
    switch (options){
        case "1":
            console.log("You found the key")
            key = true;
            break;
        case "2":
            console.log("You put your hand in the hole")
            console.log("Game Over!")
            gameOver = true;
            break;
        case "3":
            if (key === true){
                console.log("You opened the door")
                gameOver = true;
            } else { console.log("You need to find the key")
            }
            break;
        default:
            console.log("That is not a valid option")
            break;
    }
}
function start () {
   name = readline.question("What is your name? ")
}
start()
// gameLoop()

while (! gameOver){
    gameLoop()
}