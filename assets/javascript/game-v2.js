$(document).ready(function(){

var marvin = {
    name:"marvin",
    location: $("#marvin"),
    hp: 50,
    hpLocation: $("#marvin-hp"),
    damage: 8
    }
var pepe = {
    name:"pepe",
    location: $("#pepe"),
    hp:75,
    hpLocation: $("#pepe-hp"),
    damage: 12
    }
var popeye = {
    name:"popeye",
    location: $("#popeye"),
    hp:100,
    hpLocation: $("#popeye-hp"),
    damage: 20
    }
var rosie = {
    name:"rosie",
    location: $("#rosie"),
    hp:125,
    hpLocation: $("#rosie-hp"),
    damage: 30
    }

var info=[marvin, pepe, popeye, rosie];
var isCharChosen=false;
var isDefenderChosen=false;
var isDoneAttacking=false;
var isRestart=false;
var currentDefender;
var currentChar;
var isEnemyDefeated=false;


// var infoClone = Object.assign({},info);
// var infoClone = info.slice(0);
// console.log(infoClone);

function initializeGame(){
    console.log("initialize is working");
    isCharChosen=false;
    isDefenderChosen=false;
    isDoneAttacking=false;
    isRestart=false;
    isEnemyDefeated=false;
    currentDefender="";
    currentChar="";
    for (var k=0; k<4; k++){
        $("#characters").append(info[k].location);
        $(info[k]).empty();
        }
    $("#yourChar, #enemies, #fight, #defender, #attackMsg, #restart").empty();
    // info = infoClone.concat();
    // let infoClone = [...info];
    // info = Object.assign({}, infoClone);
    // console.log(info);
    // console.log(infoClone);
    };  

$(".charBox").on("click", function(event){
    if (isCharChosen) return;
    // console.log(event.currentTarget.id); //delete later
    for (var i=0; i<4; i++){
        $(info[i].location).detach();
        if (info[i].name===event.currentTarget.id){
            $("#yourChar").append(info[i].location);
            currentChar=info[i];
            isCharChosen=true;
        }
        else {
            (info[i].location).addClass("charBox-enemies");
            $("#enemies").append(info[i].location);
            }
        }
    }); //end .charBox click

$(document).on("click", ".charBox-enemies", function(){
    if (isDoneAttacking){
        console.log("enemy down");
        enemyDown();
    }
    if (isDefenderChosen) {
        console.log(".charBox defender chosen");
        return;}
    $("#attackMsg").empty();
    for (var j=0; j<4; j++){
        if (info[j].name===(event.path[1].id || event.path[2].id)){
            console.log("running");
            $(info[j].location).detach();
            $("#defender").append(info[j].location);
            currentDefender=info[j];
            console.log(currentDefender);
            (info[j].location).addClass("charBox-defender");
            (info[j].location).removeClass("charBox-enemies");
            isDefenderChosen=true;      
            }   
        }
    }); //end .charBox-enemies click

$("#attack").on("click", function(){
    var charCapName = capFirstLetter(currentDefender.name);
    if (!isCharChosen) return;
    console.log(isDoneAttacking);
    console.log(isDefenderChosen);
    if (!isDefenderChosen) {
        console.log("running");
        return;}
    if (currentChar.hp>0 && currentDefender.hp>0){
        if (isDoneAttacking) {
            console.log("running");
            return;
            }
        else {
            $("#attackMsg").html("You attacked " + charCapName +" for " + currentChar.damage + " damage." + "<br>"
            + charCapName + " attacked you back for " + currentDefender.damage + " damage.");
            currentChar.hp = currentChar.hp - currentDefender.damage;  
            $(currentChar.hpLocation).text(currentChar.hp);
            currentDefender.hp = currentDefender.hp - currentChar.damage;
            $(currentDefender.hpLocation).text(currentDefender.hp);
            currentChar.damage += currentChar.damage;
            }
        };

    if (currentDefender.hp<=0 && isDoneAttacking){
        console.log("need this?"); //delete this section?
        $("#attackMsg").html("No enemy here.");
        }
    else if(currentDefender.hp<=0){
        $("#attackMsg").html("You have defeated " + charCapName +". Choose another enemy to fight.");
        isDoneAttacking = true;
        isEnemyDefeated=true;
        $(currentDefender.location).detach();
        // enemyDown();
        console.log("running");
    } 
        
    else if (currentChar.hp<=0){
        if (isRestart){
            console.log("running");
            return;
            }
            console.log("running");
        $("#attackMsg").html("You've been defeated...GAME OVER.");
        var restartButton=$("<button>");
        restartButton.text("Restart");
        $("#restart").append(restartButton);
        isRestart=true;
        };

    function capFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
        }    
    }) //end function #attack

    function enemyDown (){
        isDefenderChosen=false;
        isDoneAttacking=false;
        isEnemyDefeated=false;
        console.log("running");
        $("#attackMsg").empty();
        }

$("#restart").on("click", function(){
    initializeGame();
    });

// initializeGame();
   }); //end document.ready

//choose another character
//char attack power is still increasing
//You won! Game over & restart button

