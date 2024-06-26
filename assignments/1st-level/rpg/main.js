let gameIsRunning = true;
// let quit = false;
const readline = require("readline-sync")
const name = readline.question("What is your name? ")
console.log(`Welcome ${name} to the RPG game!!!`)

class Character {
    constructor(name, health, attackPoints, inventory){
        this.name = name
        this.health = health
        this.attackPoints = attackPoints
        this.inventory = inventory
    }
    printInventory() {
        console.log(`inventory: ${this.inventory}`);
    }
}
let heroInventory = ["map","compass","sword"]
const hero = new Character (name, 30, 7, heroInventory)
const enemy1 = new Character("Gallegos", 15, 10, ["Backpack", "Knife"])
const enemy2 = new Character("Demonio", 28, 6, ["Claws","horn"]) 
const enemy3 = new Character("La LLorona", 49, 3, ["Stone", "Holy Water" ])
let enemies = [enemy1, enemy2, enemy3]
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random()*(max-min + 1) + min);
};

while (gameIsRunning){
    gamePlay();
    if(enemies.length === 0){
        console.log(`Felicidades ${hero.name}! You won and defeated all of your enemies!!!`);
        process.exit();
    

    // console.log(choices);
}
}
function gamePlay(){
    let choices = readline.question(
        "What would you like you to do? Press (w) to walk, (i) see your inventory, or (q) to quit the game",
        {limit:["w","i","q"]}
    );
    if(choices === "w"){
        console.log("You Chose to WALK");
        let enemyChance = getRandomNumber(1,4)
    
         if (enemyChance === 3) {
        let randomEnemyIndex = getRandomNumber(0,enemies.length - 1)
        console.log("You have encountered an enemy!")
        let answer = readline.question("What would you like to do? (1) Fight or (2) Run?")
        if(answer === "1"){
            fight(enemies[randomEnemyIndex]);
        } else if (answer === "2") {
            run(enemies[randomEnemyIndex]);
        }
        
        
        }
    } else if(choices === "i"){
        hero.printInventory(); 
    } else if(choices === "q"){
        console.log("You Chose to Quit, Goodbye.")
        gameIsRunning = false;
    }
}

function fight(currEnemy){
    console.log("You Chose to FIGHT!");
    while(hero.health > 0 && currEnemy.health > 0){
        currEnemy.health -= hero.attackPoints;
        console.log(
            `You have dealt ${hero.attackPoints} damag! ${currEnemy.name} has ${currEnemy.health} health left`
        );
        hero.health -= currEnemy.attackPoints;
        console.log(
            `${currEnemy.name} has dealt ${currEnemy.attackPoints} damage! You have ${hero.health} health left`
        );
    }
    if(currEnemy.health <= 0){
        console.log(`${currEnemy.name} has been defeated!`);
        enemies.splice(enemies.indexOf(currEnemy), 1);
        hero.health = 30
        console.log("You have been restored to full health!")
    }   else if (hero.health <= 0) {
        console.log(`You have been defeated by ${currEnemy.name}!`);
        gameIsRunning = false;
    }
}
function run(currEnemy){
console.log(`You Chose to RUN from ${currEnemy.name}!`); 
let escapeChance = getRandomNumber(1,2);
if (escapeChance === 1){
    console.log("You have escaped!");
} else if(escapeChance === 2) {
    console.log(`${currEnemy.name} has caught you and must fight them before it's too late!!`);
    fight(currEnemy);
}; 
}