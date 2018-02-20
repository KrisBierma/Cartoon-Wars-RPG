//to start, click on char
    //that char goes to "your char" and stays white
    //other char go to "enemies" and turns red
$(document).ready(function(){

var marvin = $("#marvin"); 
var pepe=$("#pepe");
var popeye = $("#popeye");
var rosie = $("#rosie");
var storage=[marvin, pepe, popeye, rosie];
var threeEnemies =[];
var run=0;
var isCharChosen;
var isDefenderChosen;

function initializeGame(){
    isCharChosen=false;
    isDefenderChosen=false;
    $("#enemies", "#fight", "#defender").empty();
}

chooseYourChar();
//chooseDefender();

function chooseYourChar(){
    //var run=0;
    $("#marvin").on("click", function(){
        while(run<3){
            for (var i=0; i<4; i++){
                $(storage[i]).detach();
            
                if (storage[i]===marvin){
                    $("#yourChar").append(storage[i])
                }
                else {
                    storage[i].addClass("charBox-enemies");
                    $("#enemies").append(storage[i]);
                    threeEnemies[i]=storage[i];
                    console.log(threeEnemies);
                    run++;
                    console.log(run);
                    }
            }
            chooseDefender();
        }})

    $("#pepe").on("click", function(){
        while(run<3){
            for (var i=0; i<4; i++){
                $(storage[i]).detach();
                
                if (storage[i]===pepe){
                    $("#yourChar").append(storage[i])
                }
                else {
                    storage[i].addClass("charBox-enemies");
                    $("#enemies").append(storage[i]);
                    threeEnemies[i]=storage[i];
                    console.log(threeEnemies);
                    run++;
                    console.log(run);        }}
            chooseDefender();
                }})

    $("#popeye").on("click", function(){
        while(run<3){
            for (var i=0; i<4; i++){
            $(storage[i]).detach();
            
            if (storage[i]===popeye){
                $("#yourChar").append(storage[i])
            }
            else {
                storage[i].addClass("charBox-enemies");
                $("#enemies").append(storage[i]);
                threeEnemies[i]=storage[i];
                run++;
        }}
        chooseDefender();
        }})

    $("#rosie").on("click", function(){
        while(run<3){
            for (var i=0; i<4; i++){
            $(storage[i]).detach();
            
            if (storage[i]===rosie){
                $("#yourChar").append(storage[i])
            }
            else {
                storage[i].addClass("charBox-enemies");
                $("#enemies").append(storage[i]);
                threeEnemies[i]=storage[i];
                run++;
        }}}
        chooseDefender();
        })
    } //end chooseYourChar function

function chooseDefender(){ 
    $("#marvin").on("click", function(){
        console.log("running");   
        if (threeEnemies[0]===undefined){
            console.log("can't do this");
        }
        else {
            storage[0].addClass("charBox-fight");
            $(storage[0]).detach();
            $("#fight").append(storage[0]);
        }
        })

    $("#pepe").on("click", function(){
        console.log("running");   
        if (threeEnemies[1]===undefined){
            console.log("can't do this");
        }
        else {
            storage[1].addClass("charBox-fight");
            $(storage[1]).detach();
            $("#fight").append(storage[1]);
        }
       })

    $("#popeye").on("click", function(){
        console.log("running");   
        if (threeEnemies[2]===undefined){
            console.log("can't do this");
        }
        else {
            storage[2].addClass("charBox-fight");
            $(storage[2]).detach();
            $("#fight").append(storage[2]);
        }
       })

    $("#rosie").on("click", function(){
        console.log("running");   
        if (threeEnemies[3]===undefined){
            console.log("can't do this");
        }
        else {
            storage[3].addClass("charBox-fight");
            $(storage[3]).detach();
            $("#fight").append(storage[3]);
        }
        })

    } //end chooseDefender function

//cycle through threeEnemies array and move one click to #fight????? do i need threeEnemies
//stop chooseDefender function

initializeGame();
   }) //end document.ready

//click attack
//reduce hp of char and defender
//if char hp =0, lose game; "You've been defeated...GAME OVER" & button "restart"
//marvin damage 8, pepe damage 12, popeye damage 16, rosie damage 20
//script shows up "You attacked snoopy for 8 damage. <br> snoopy attacked you back for 25 damage"
//each attack, char increase attack by that number 8, 16, 24. enemy attack stays the same 25
//if enemy hp is 0 it's removed.
//text reads "You have defeated Marvin. Choose another enemy to fight."
//if attack is clicked again "No enemy here."
//choose another character
//char attack power is still increasing
//You won! Game over & restart button

