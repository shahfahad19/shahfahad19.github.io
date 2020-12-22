function getColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i=0;i<6;i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setGradient() {
    var gradient = "linear-gradient(to right, "+ getColor() +", " + getColor()+")";
    $("body").css("background", gradient);
    $("code").html('body {<br>    background: '+ gradient+';<br>}');
}

$(function() {
    $("#next").click(function() {
        setGradient();
    });
});

$(function() {
    $("#show").click(function() {
        $(".code").toggle(1000);
    });
});
