var i = 0, text ="";
var txt = prompt("Enter a sentence");
try {
    var n=txt.length;
}
catch {
    txt = "A quick brown fox jumps over the lazy dog";
}
function ready() {
    var conv = function (str) {
        return str.trim().split(" ");
    };
    text = conv(txt);
    var t = text.length + 0.110;
    $("div span").css("animation", "anim 0.8s "+t);
    start();
}

function start() {
    $('div span').html(text[i]);
    i++;
    if (i != text.length){
        setTimeout("start()", 800);
    }
    else {
        setTimeout(function () {
            $("div").css("font-size", "65px");
            $('div span').html(txt);
        }, 800);
    }
}
