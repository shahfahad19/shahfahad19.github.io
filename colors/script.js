function done() {
    var red = $("#red").val();
    var green = $("#green").val();
    var blue = $("#blue").val();
    $(".red").html(red);
    $(".green").html(green);
    $(".blue").html(blue);
    var color = "rgb("+red+","+green+","+blue+")";
    $("body").css("background-color", color);
    $("#rgbc").html("("+red+" , "+green+" , "+blue+")");
    rhex = Number(red).toString(16);
    ghex = Number(green).toString(16);
    bhex = Number(blue).toString(16);
    var hex = "";
    if(rhex<10)
        rhex = "0"+rhex;
    if(ghex<10)
        ghex = "0"+ghex;
    if(bhex<10)
        bhex = "0"+bhex;
    hex = "#"+rhex + ghex + bhex;
    hex = hex.toUpperCase();
    $("#hexc").html(hex);
}
  
function ok() {
    done();
}
