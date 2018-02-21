$(document).ready(function(){

var marvin = { //luke
    name:"marvin",
    location: $("#marvin"),
    hp: 120,
    hpLocation: $("#marvin-hp"),
    damage: 8
    }
var pepe = { //obi
    name:"pepe",
    location: $("#pepe"),
    hp:130,
    hpLocation: $("#pepe-hp"),
    damage: 10
    }
var popeye = { //sidious
    name:"popeye",
    location: $("#popeye"),
    hp:150,
    hpLocation: $("#popeye-hp"),
    damage: 12
    }
var rosie = { //maul
    name:"rosie",
    location: $("#rosie"),
    hp:180,
    hpLocation: $("#rosie-hp"),
    damage: 15
    }

var info=[marvin, pepe, popeye, rosie]; //array of above character objects 
var isCharChosen=false;
var isDefenderChosen=false;
var isDoneAttacking=false;
var isRestart=false;
var currentDefender;
var currentChar;
var isEnemyDefeated=false;
var enemiesLeft=3;
var currentCharDam=0;

// function initializeGame(){
//     console.log("initialize is working");
//     isCharChosen=false;
//     isDefenderChosen=false;
//     isDoneAttacking=false;
//     isRestart=false;
//     isEnemyDefeated=false;
//     currentDefender="";
//     currentChar="";
//     for (var k=0; k<4; k++){
//         $("#characters").append(info[k].location);
//         $(info[k]).empty();
//         }
//     $("#yourChar, #enemies, #fight, #defender, #attackMsg, #restart").empty();
//     };  

$(".charBox").on("click", function(event){
    if (isCharChosen) return;
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
        enemyDown();
    }
    if (isDefenderChosen) {
        return;}
    $("#attackMsg").empty();
    for (var j=0; j<4; j++){
        if (info[j].name===(event.path[1].id || event.path[2].id)){
            $(info[j].location).detach();
            $("#defender").append(info[j].location);
            currentDefender=info[j];
            (info[j].location).addClass("charBox-defender");
            (info[j].location).removeClass("charBox-enemies");
            isDefenderChosen=true;      
            }   
        }
    }); //end .charBox-enemies click

$("#attack").on("click", function(){
    var charCapName = capFirstLetter(currentDefender.name);
    currentCharDam = currentCharDam + currentChar.damage;
    if (!isCharChosen) return;
    if (!isDefenderChosen) return;
    if (currentChar.hp>0 && currentDefender.hp>0){
        if (isDoneAttacking) return; 
        else {
            $("#attackMsg").html("You attacked " + charCapName +" for " + currentCharDam + " damage." + "<br>"
            + charCapName + " attacked you back for " + currentDefender.damage + " damage.");
            currentChar.hp = currentChar.hp - currentDefender.damage;  
            $(currentChar.hpLocation).text(currentChar.hp);
            currentDefender.hp = currentDefender.hp - currentCharDam;
            $(currentDefender.hpLocation).text(currentDefender.hp);
            }
        };

    if (currentDefender.hp<=0 && isDoneAttacking){
        $("#attackMsg").html("No enemy here.");
        }
    else if(currentDefender.hp<=0){
        $("#attackMsg").html("You have defeated " + charCapName +". Choose another enemy to fight.");
        enemiesLeft--;
        anyEnemiesLeft();
        isDoneAttacking = true;
        isEnemyDefeated=true;
        $(currentDefender.location).detach();
        }   
    else if (currentChar.hp<=0){
        if (isRestart) return;
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
        $("#attackMsg").empty();
        }

    function anyEnemiesLeft (){
        if (enemiesLeft===0){
            $("#attackMsg").empty();
            $("#winMsg").html("You have defeated all enemies! You win!");
            $("#attack").remove();
        }
    }

$("#restart").on("click", function(){
    // initializeGame();
    window.location.reload();
    });

// initializeGame();
   }); //end document.ready