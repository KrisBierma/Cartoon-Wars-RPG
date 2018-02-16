//to start, click on char
    //that char goes to "your char" and stays white
    //other char go to "enemies" and turns red

$("#marvin").on("click", function(){
    var marvinStorage =$("#marvin").detach();
    $("#yourChar").append(marvinStorage);

    var pepeStorage=$("#pepe").detach();
    pepeStorage.addClass("charBox-enemies");
    $("#enemies").append(pepeStorage);
    
    var popeyeStorage=$("#popeye").detach();
    popeyeStorage.addClass("charBox-enemies");
    $("#enemies").append(popeyeStorage);

    var rosieStorage=$("#rosie").detach();
    rosieStorage.addClass("charBox-enemies");
    $("#enemies").append(rosieStorage);
})


//click on enemy
    //that char goes to "defender" and turns black
$


