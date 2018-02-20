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
    damage: 16
    }
var rosie = {
    name:"rosie",
    location: $("#rosie"),
    hp:125,
    hpLocation: $("#rosie-hp"),
    damage: 20
    }

var info=[marvin, pepe, popeye, rosie];
//storage is now info
console.log(info[0].location);
///var marvin = $("#marvin"); 
///var pepe=$("#pepe");
///var popeye = $("#popeye");
///var rosie = $("#rosie");
///var storage=[marvin, pepe, popeye, rosie];
///var charId=["marvin", "pepe", "popeye", "rosie"];

var isCharChosen;
var isDefenderChosen;
var isDoneAttacking;
var currentDefender;
var currentChar;

function initializeGame(){
    currentDefender="";
    currentChar="";
    isCharChosen=false;
    isDefenderChosen=false;
    isDoneAttacking=false;
    $("#enemies", "#fight", "#defender").empty();
    };  

$(".charBox").on("click", function(event){
    if (isCharChosen) return;
    console.log(event.currentTarget.id); //delete later
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
            console.log(info[i].location);
            }
        }
    }); //end .charBox click

// $(".charBox-enemies").on("click", function(){
//     console.log("ok");
//     });

$(".blah").on("click", function(){
// $(".charBox-enemies").on("click", function(){
    console.log(event.currentTarget.id); //delete later
    if (isDefenderChosen) return;
    for (var j=0; j<4; j++){
        if (info[j].name===event.currentTarget.id){
            $(info[j].location).detach();
            $("#defender").append(info[j].location);
            currentDefender=info[j];
            //defenderHp=...value; //NEED THIS
            // info[j].addClass("charBox-defender");
            info[j].location.removeClass("charBox-enemies");
            isDefenderChosen=true;
            }
        }
    }
); //end .charBox-enemies click

$("#attack").on("click", function(){
    var charCapName = capFirstLetter(currentDefender.name);
    console.log(currentDefender);
    console.log(charCapName);
    console.log("attack button running");
    if (!isCharChosen) return;
    if (!isDefenderChosen) return;
    
    if (currentChar.hp>0 && currentDefender.hp>0){
        if (isDoneAttacking) {
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
            console.log(currentChar.damage);
            }
        }

    else if (currentChar.hp<=0){
        if (isDoneAttacking) {
            $("#attackMsg").html("No enemy here.");
            return;}
        $("#attackMsg").html("You've been defeated...GAME OVER");
        $("<button>").append;
        
        //if char hp =0, lose game; "You've been defeated...GAME OVER" & button "restart"
        }
    else if (currentDefender.hp<=0){
        if (isDoneAttacking) {
            $("#attackMsg").html("No enemy here.");
            return;}
        $("#attackMsg").html("You have defeated " + charCapName +". Choose another enemy to fight.");
        isDoneAttacking = true;
        //
        }

function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
    }    
})

initializeGame();
   }); //end document.ready

//text reads "You have defeated Marvin. Choose another enemy to fight."
//choose another character
//char attack power is still increasing
//You won! Game over & restart button

