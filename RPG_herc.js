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
    special: 100,
    specialName: "Flames of Hades"
}
const hydra = {
    name: "Nine-Headed Lernaean Hydra",
    health: 250,
    bite: 50,
    slash: 25,
    special: 75,
    specialName: "Hydra Venom"
}
const lion = {
    name: "Nemean Lion",
    health: 150,
    bite: 25,
    slash: 10,
    special: 50,
    specialName: "Nemean Roar"
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
function enemyHit(enemyInput, enemyType){
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
            console.log(`${enemyType.specialName} Hit`);
            return true;
        }
        else{
            console.log(`${enemyType.specialName} Miss`);
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
    console.log(`${enemyType.name} Health:${enemyHealth}/???`);
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
            let enemySuccess = enemyHit(enemyInput, enemyType);
            if(enemySuccess === true && playerInput !== 3){ 
                attack(enemyAttack, hercules);
            }
            healthBar(enemyType, hercules);
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
    //I. Intro
    if(section === 1){
        if(part === 1){
            alert("The Trials of Hercules: A Text-based Adventure")
        }
        else if(part === 2){
            alert("You are the Mighty Hercules, the Greatest of the Greek Heroes.\nThe King Eurystheus has tasked you with navigating the Labyrinth and facing three trials.");
            alert("You approach the entrance of the Labyrinth, the massive walls looming above you. What was meant to only be one path becomes two.\nDo you go left or go right?");
        }
        else if(part === 3){
            alert("With determination in your stride you make way towards the start of your Legend. Where even the Gods shall know thy name by the end of your Trials.");
        }
            if(choice === 1){
                alert("The path you have chosen winds deeper and deeper into the Labyrinth. How long you have been walking now you no longer know. The heat in the air becomes suffocating as the crackling of flames in the distance becomes louder.");
                alert("You come upon a large chamber filled with light from the flames you have been hearing, the heat being almost unbearable. A loud, deafening roar rattles your bones, your first trial, The Nemean Lion, is upon you. Prepare yourself!");
            }
            else if(choice === 2){
                alert("You follow the path for what feels like hours. You start to become weary from your journey as you barely notice the stone pathway under your feet give way. In the time it takes you to realize you are falling, the spikes hidden underneath have ran you through before the world goes dark...");
            }
    }
    //II. First Encounter
    else if(section === 2){
        if(part === 1){
            alert("As the sounds of battle become deathly silent. The light from the flames paint a silhouette of a clash that will be told for generations. Hercules standing tall above the still form of the Nemean Lion. One Trial down two to go. Continue your Journey.");
            alert("Wiping the blood from your brow you look towards the back of the chamber. There before you are three massive gates of wood and stone. One leads to your salvation, another to your next Trial, and the last will cause your downfall. Which shall you choose?");
        }
            if(choice === 1){
                alert("With a heave you push open the gate and make your way down a new path. As you go farther down, you start to notice deep gouges in the walls on both sides. You hear and feel a deep rumbling behind you. You try to quicken your pace before all light goes out and the boulder overtakes you. The last hint of your existence are the sounds of your bones shattering...");
            }
            else if(choice === 2){
                alert("With a heave you push open the gate and make your way down a new path. A warm, welcoming light guides you down the winding path before opening up to a wonderous chamber. Fountains of water and beautiful art line the walls, you feel at peace as your wounds fade to nothing. Your eyes flutter shut before the cold darkness closes on you again. You are back in the Labyrinth again.");
                alert("You shake yourself from your stupor before starting your Journey again. You notice as you continue down the path that the walls grow damp and what was once flat ground begins to go into a sharp decline. It's as if you are walking into the very depths of the Underworld. After what seems like hours, if not days, you stop before a gate lined with lanterns of green fire.");
                alert("You pass through the gate, before a wave of moisture and foul odor hits you. You continue farther into the chamber as it expands to the point you can't see the walls or ceiling anymore through the darkness. You feel a hot breath on your neck before turning around looking into the maw of your next Trial, The Nine-Headed Lernaean Hydra. You leap back and brandish your weapon, ready for battle!")
            }
            else if(choice === 3){
                alert("With a heave you push open the gate and make your way down a new path. You notice as you continue down the path that the walls grow damp and what was once flat ground begins to go into a sharp decline. It's as if you are walking into the very depths of the Underworld. After what seems like hours, if not days, you stop before a gate lined with lanterns of green fire.");
                alert("You pass through the gate, before a wave of moisture and foul odor hits you. You continue farther into the chamber as it expands to the point you can't see the walls or ceiling anymore through the darkness. You feel a hot breath on your neck before turning around looking into the maw of your next Trial, The Nine-Headed Lernaean Hydra. You leap back and brandish your weapon, ready for battle!");
            } 
        else if(part === 2){
            alert("Game Over")
        } 
    }
    //III. Second Encounter
    else if(section === 3){
        if(part === 1){
            alert("The Earth beneath your feet trembles as the last head of the Hydra is severed and the body collapses. You stand there gasping for breath covered in all manner of filth before starting to look for a way out of the chamber. This marks your second Trial finished with only one last battle before your Legend is complete.");
            alert("After searching the chamber twice over, you note that there are three ways to continue your Journey: a stairwell to your left and another to your right, and a ladder that leads further into the dark. Which shall you choose?");
        }
            if(choice === 1){
                alert("The echoes of your footsteps bounce through the stairwell as you make your way up. The stairwell seems to never end, minutes stretch into hours, hours stretch into what feels like days. You finally come to the realization that you have reached the bottom, even though you had been going up the whole time. You should be exhausted but instead you feel invigorated and your wounds seem to have never existed.");
                alert("As you step out of the stairwell you find yourself on what would amount to a bridge made of stone. As you look down off the ledge of the bridge all you see is eternal darkness. You shift your gaze towards where the ceiling of the chamber should be but nothing but inky black meets your sight. Your steps don't even seem to echo anymore as you continue across the bridge. Uncertainty starts to seep into you.");
                alert("Before long you reach the final leg of your Journey. There before the final gate of the Labyrinth, Cerberus stands, ever watchful and vigilant; he awaits you. The final battle starts here, will your Legend live or die at the Gates of Hades?");
            }
            else if(choice === 2){
                alert("The echoes of your footsteps bounce through the stairwell as you make your way down. The stairwell seems to never end, minutes stretch into hours, hours stretch into what feels like days. You finally step on to the landing, the air flowing through the opening into the next chamber neither cold nor warm just a overwhelming sense of despair.")
                alert("As you step out of the landing you find yourself on what would amount to a bridge made of stone. As you look down off the ledge of the bridge all you see is eternal darkness. You shift your gaze towards where the ceiling of the chamber should be but nothing but inky black meets your sight. Your steps don't even seem to echo anymore as you continue across the bridge. Uncertainty starts to seep into you.");
                alert("Before long you reach the final leg of your Journey. There before the final gate of the Labyrinth, Cerberus stands, ever watchful and vigilant; he awaits you. The final battle starts here, will your Legend live or die at the Gates of Hades?");
            }
            else if(choice === 3){
                alert("You step onto the ladder before slowly climbing down. Your muscles, aching from the previous battles, now straining to hold your weight as there is no bottom in sight but you continue to endure for a while longer. You finally make it to the bottom, where you find yourself in what seems to be a bed chamber? While dazed in confusion you hear a melodic humming coming from the bed that draws you in ever closer. What meets your eyes as you look up is the gaze of a beautiful woman. You manage one last step before all that is left of your Legend is cold stone.")
            } 
        else if(part === 2){
            alert("Game Over")
        }
    }
    //IIII. Third Encounter
    else if(section === 4){
        if(part === 1){
            alert("As Cerberus manages one last howl before collapsing just before the Gates of Hades, You hold yourself up by strength of will alone. Battered, bloody, and beaten you remain standing while your enemies have fallen. Three Trials given, three Trials done, you slowly make your way back through and out of the Labyrinth head held high.")
        }
        else if(part === 2){
            alert("Game Over.")
        }
    }
    //IIIII. Conclusion 
    else if(section === 5){
        alert("Hercules returned to the King, with a trophy of irrefutable proof of each Trial. His Deeds and Legend to be recognized by mortals and Gods alike. The stories of Hercules will be told for generations to come, to never be lost by the sands of time.")
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
        playerChoice = Number(prompt("1: First Door 2: Second Door 3: Third Door"));
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
            playerChoice = Number(prompt("1: left 2: right 3: ladder"));
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
