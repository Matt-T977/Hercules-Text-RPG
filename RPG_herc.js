"use strict"
//////code below//////


////Character Object Stat Blocks////
const hercules = {
    name: "Hercules",
    health: 100,
    swing: 50,
    bash: 100,
    block: 100
}
const cerberus = {
    name: "Cerberus",
    health: 500,
    bite: 50,
    slash: 25,
    special: 100
}
const hydra = {
    name: "Nine-Headed Lernaean Hydra",
    health: 250,
    bite: 50,
    slash: 25,
    special: 75,
}
const lion = {
    name: "Nemean Lion",
    health: 150,
    bite: 25,
    slash: 10,
    special: 50
}
////Character Object Stat Blocks////


////Encounter Structure////
//Player Attack Choice
function playerMenu(){
    let playerInput = Number(prompt("1: Swing - 50 damage 2: Bash - 100 damage 3: Block"));
    return playerInput;
}
//Returns Player attack Stats
function playerTurn(playerInput){
    switch(playerInput){
        case 1:
            return hercules.swing;
        case 2:
            return hercules.bash;
        case 3:
            return hercules.block;
        default:
            return "Invalid Response"         
    }
}
//Enemy Attack Choice Randomizer
function enemyAi(){
    let enemyInput = Math.floor(Math.random()*3);
    return enemyInput;
}
//Returns Enemy Attack Stats
function enemyTurn(enemyInput, enemyType){
    switch(enemyInput){
        case 0:
            return enemyType.bite;
        case 1:
            return enemyType.slash;
        case 2:
            return enemyType.special;
        default:
            return "Invalid Response"
    }
}
//Player Attack Hit Check
function playerHit(playerInput){
    let roll = Math.floor(Math.random()*20) + 1;
    if(playerInput === 1){
        if(roll >= 10){
            console.log("Swing Hit")
            return true;
        }
        else{
            console.log("Swing Miss");
            return false;
        } 
    }
    else if(playerInput === 2){
        if(roll >= 15){
            console.log("Bash Hit");
            return true;
        }
        else{
            console.log("Bash Miss");
            return false;
        }
    }
    else if(playerInput === 3){
        console.log("Block.")
        return "block";
    }
}
//Enemy Attack Hit Check
function enemyHit(enemyInput){
    let roll = Math.floor(Math.random()*20) + 1;
    if(enemyInput === 0){
        if(roll >= 10){
            console.log("Bite Hit");
            return true;
        }
        else{
            console.log("Bite Miss");
            return false;
        } 
    }
    else if(enemyInput === 1){
        if(roll >= 5){
            console.log("Slash Hit");
            return true;
        }
        else{
            console.log("Slash Miss");
            return false;
        }
    }
    else if(enemyInput === 2){
        if(roll >= 15){
            console.log("Special Hit");
            return true;
        }
        else{
            console.log("Special Miss");
            return false;
        }
    }
}
//Damage Calculation Check
function attack(attacker, defender){
    let encounterOver;
    defender.health -= attacker;
    if(defender.health === 0){
        return encounterOver = true;
    }
    else{
        return encounterOver = false;
    }
}
//Health Bar Display
function healthBar(enemyType, character){
    let enemyHealth = enemyType.health;
    let characterHealth = character.health;
    console.log(`Enemy Health:${enemyHealth}/???`);
    console.log(`Player Health:${characterHealth}/100`)
}
//Encounter Sequence Controller WIP
function encounterInitiator(encounterCheck, type){
    if (encounterCheck === true){
        let enemyType = type;
        let encounterActive = true;
        while (encounterActive){
            let playerInput = playerMenu();
            let playerAttack = playerTurn(playerInput);
            let playerSuccess = playerHit(playerInput);
            if(playerSuccess === true){
                attack(playerAttack, enemyType);
            }
            let enemyInput = enemyAi();
            let enemyAttack = enemyTurn(enemyInput, enemyType);
            let enemySuccess = enemyHit(enemyInput);
            if(enemySuccess === true && playerInput !== 3){ 
                attack(enemyAttack, hercules);
                healthBar(enemyType, hercules);
            }
            if(enemyType.health <= 0 && hercules.health <= 0){
                encounterActive = false;
            }
            else if(enemyType.health <= 0 || hercules.health <= 0){
                encounterActive = false;
            }    
        }
        if (enemyType.health <= 0 && hercules.health <= 0){
            alert("You both died.")
            return (false);
        }
        else if (enemyType.health <= 0 && hercules.health >= 0){
            alert("Enemy is dead.")
            return (true);
        }
        else{
            alert("You died.")
            return (false);
        }
    }
}
////Encounter Structure////


//Narrative Selector WIP
function narrative(section, part, choice){
// I. Introduction
// 	A. Story Start
// 	B. Enter the Maze
// 	C. Left or Right
// 		1.(If Left) first boss fight
// 		2.(If Right) Spike Pit-Game Over
// II. First Encounter
// 	A. (Win Fight) Continue into the Maze
// 		1.(If Door 1) Boulder Trap-Game Over 
// 		2.(If Door 2) Healing Potion then Next Encounter
// 		3 (If Door 3) Continue to next encounter
// 	B. (Lose Fight) Game Over
// III. Second Encounter
// 	A. (Win Fight) Continue into the Maze
// 		1. (If Left) Healing Potion Then Next Encounter
// 		2. (If Right) Continue to Next Encounter
// 		3. (Ladder) Succubus Den-Game over
// 	B. (Lose Fight) Game Over
// IIII. Third Encounter
// 	A. (Win Fight) Win the Game
// 	B. (Lose Fight) Game Over
// IIIII. Conclusion    
    //I. Intro
    if(section === 1){
        if(part === 1){
            alert("I. Introduction")
        }
        else if(part === 2){
            alert("Story Start");
        }
        else if(part === 3){
            alert("Enter the Maze");
        }
            if(choice === 1){
                alert("Left to first Encounter")
            }
            else if(choice === 2){
                alert("Game Over")
            }
    }
    //II. First Encounter
    else if(section === 2){
        if(part === 1){
            alert("You have won the fight.")
        }
            if(choice === 1){
                alert("Door 1")
            }
            else if(choice === 2){
                alert("Door 2")
            }
            else if(choice === 3){
                alert("Door 3")
            } 
        else if(part === 2){
            alert("Game Over")
        } 
    }
    //III. Second Encounter
    else if(section === 3){
        if(part === 1){
            alert("You have won the fight.")
        }
            if(choice === 1){
                alert("Left")
            }
            else if(choice === 2){
                alert("Right")
            }
            else if(choice === 3){
                alert("Ladder")
            } 
        else if(part === 2){
            alert("Game Over")
        }
    }
    //IIII. Third Encounter
    else if(section === 4){
        if(part === 1){
            alert("You have won the game.")
        }
        else if(part === 2){
            alert("Game Over.")
        }
    }
    //IIIII. Conclusion 
    else if(section === 5){
        alert("Conclusion")
    }
}
//Game Sequence Initiator WIP
function runGame(){
    let encounterCheck = true;
    let gameContinue = true;
    let playerChoice;
    narrative(1, 1, 0);
    narrative(1, 2, 0);
    playerChoice = Number(prompt("1: Left 2: Right"));
    narrative(1, 3, playerChoice);
    if(playerChoice === 2){
        encounterCheck = false;
        gameContinue = false;
    }
    gameContinue = encounterInitiator(encounterCheck, lion);
    if(gameContinue){
        playerChoice = Number(prompt("Pick a door. 1: First Door 2: Second Door 3: Third Door"));
        narrative(2, 1, playerChoice);
        if(playerChoice === 1){
            encounterCheck = false;
            gameContinue = false;
        }
        else if(playerChoice === 2){
            hercules.health = 100;
        }
        gameContinue = encounterInitiator(encounterCheck, hydra);
        if(gameContinue){
            playerChoice = Number(prompt("1: left 2: right 3: Up the ladder"));
            narrative(3, 1, playerChoice);
            if(playerChoice === 1){
                hercules.health = 100;
            }
            else if(playerChoice === 3){
                encounterCheck = false;
                gameContinue = false;
            }
            gameContinue = encounterInitiator(encounterCheck, cerberus);
            if(gameContinue){
                narrative(4, 1, 0);
                narrative(5, 0, 0);
            }
            else{
                alert("Game Over")
            }
        }
        else{
            alert("Game Over")
        } 
    }
    else{
        alert("Game Over")
    }    
}
runGame()
