$(document).ready(function(){

var marvin = {
    name:"marvin",
    location: $("#marvin"),
    hp: 100,
    damage: 8
    }
var pepe = {
    name:"pepe",
    location: $("#pepe"),
    hp:120,
    damage: 12
    }
var popeye = {
    name:"popeye",
    location: $("#popeye"),
    hp:140,
    damage: 16
    }
var rosie = {
    name:"rosie",
    location: $("#rosie"),
    hp:160,
    damage: 20
    }

var storage=[marvin, pepe, popeye, rosie];

console.log(storage[0].location);
///var marvin = $("#marvin"); 
///var pepe=$("#pepe");
///var popeye = $("#popeye");
///var rosie = $("#rosie");
///var storage=[marvin, pepe, popeye, rosie];
///var charId=["marvin", "pepe", "popeye", "rosie"];

// var threeEnemies =[];
// var run=0;
var isCharChosen;
var isDefenderChosen;
var currentDefender;
var defenderHp;
var charHp;

function initializeGame(){
    currentDefender="";
    isCharChosen=false;
    isDefenderChosen=false;
    $("#enemies", "#fight", "#defender").empty();
    };  

$(".charBox").on("click", function(event){
    if (isCharChosen) return;
    console.log(event.currentTarget.id); //delete later
    //if (!isDefenderChosen);
    for (var i=0; i<4; i++){
        $(storage[i].location).detach();
    
        if (charId[i]===event.currentTarget.id){
            $("#yourChar").append(storage[i]);
            isCharChosen=true;
        }
        else {
            storage[i].addClass("charBox-enemies");
            $("#enemies").append(storage[i]);
            console.log(storage[i]);
            // console.log(marvin);
            //threeEnemies[i]=storage[i];
            //console.log(threeEnemies);
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
        if (charId[j]===event.currentTarget.id){
            $(storage[j]).detach();
            $("#defender").append(storage[j]);
            currentDefender=charId[j];
            //defenderHp=...value; //NEED THIS
            // storage[j].addClass("charBox-defender");
            storage[j].removeClass("charBox-enemies");
            isDefenderChosen=true;
            }
        }
    }
); //end .charBox-enemies click

$("#attack").on("click", function(){
    console.log("attack button running");
    if (!isCharChosen) return;
    if (!isDefenderChosen) return;
    $("#attackMsg").html("You attacked "+ currentDefender+" for "+"" +" damage." + "<br>"
    +currentDefender + " attacked you for "+""+" damage.");
    
    //reduce hp of char
    //.text of char hp 
    //reduce hp of defender
    //.text of defender hp
    //if char hp =0, lose game; "You've been defeated...GAME OVER" & button "restart"


    //script shows up "You attacked snoopy for 8 damage. <br> snoopy attacked you back for 25 damage"
//each attack, char increase attack by that number 8, 16, 24. enemy attack stays the same 25
//if enemy hp is 0 it's removed.
})

initializeGame();
   }); //end document.ready



//text reads "You have defeated Marvin. Choose another enemy to fight."
//if attack is clicked again "No enemy here."
//choose another character
//char attack power is still increasing
//You won! Game over & restart button

