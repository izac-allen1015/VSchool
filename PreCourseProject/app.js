var good = document.getElementById("good")
var bad = document.getElementById("bad")
var oceanAnimals = ["Shark", "Dolphin", "Whale", "Seal", "Eal"]
    console.log(oceanAnimals.length)
    console.log(oceanAnimals[3])

var oceanMammal = [
    {
        animalName: "Dolphin",
        hasHair: true,
        needAir: true,
        likeToEat: ["fish", "jellyfish", "squid"]
    },
    {
        animalName: "Shark",
        hasHair : false,
        needsAir : false,
        lifeSpan: 30
    }
] 
console.log(oceanMammal.animalName)
    console.log('The animals name is' + this.animalName)
    // how best to console log this 
var oceanSwimmer = "Whale"
switch (oceanSwimmer){
    case "Dolphin":
        console.log("This animal is good")
        break
    case "Shark":
        console.log("This animal is bad")
        break
    default:
        console.log("This animal is huge")
}
// Where do if statments show up with interation?

for(var i = 0; i < oceanAnimals.length; i++){
    console.log(oceanAnimals[i])
}
function changeBackground(){
    document.body.style.backgroundColor = "blue"
}

var good = document.getElementById("good")
good.addEventListener("click", changeBackground )


function reverseBackground (){
    document.body.style.backgroundColor = "red"
}
var bad = document.getElementById("bad")
bad.addEventListener("click", reverseBackground)

/*for(var i = 0: i <100; i++){
    console.log(i)
}
for(var i - 0; i < 10; i += 2){   
}
for(var i = 0; i < oceanAnimals; i++){
    if(oceanAnimals[i] % 2 === 0)
        console.log(oceanAnimals[i])
}

var count = 0
while(count < 10){
    console.log("hi")
    count++
}
*/
/*Function Declaration - essentially making it a varable but something to be used
    function sun (){
        console.log(2+2)
    } 
    function sum (num1, num2){
        return rum1 + num2 
    you can't console.log anthing after a return.
    }




/*Be able to identify the following data types and notations:
Strings - '' or ""
Numbers - good for when you don't want a number to change
Booleans (true or false) if, if else, else, ===, <, >, <=, >=, !==, ==, !=, &&, ||, 
switch is to be used to ask multiple if statements, so it will run cases. Break is to be used after every case unless you want it to keep checking other cases. Default to be used as "else" in the case that all the other things don't match.
Arrays - var myArray = [1,2,3,4] console.log(myArray[0]) when inside another array console.log(myArray [][]) (Why are they useful? What does “0-indexed” mean?)
Objects - can have all of the above within and even other objects 
Use each of the following in your app.js file:
` Create an object and navigate that object using dot notation.
` Create an array and navigate that array using bracket notation.
` A conditional statement (if, else if, else)
` A for loop OR a while loop
An addEventListener method to call a function
*/

// in an array can you use a bolean in it as well?