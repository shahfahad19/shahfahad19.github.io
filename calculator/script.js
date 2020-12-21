function input(val) {
    if (val=='c') {
        txt = $("#display").text();
        $("#display").html(txt.substring(0, txt.length-1));
    }
    else if (val=='=') {
        $("#display").html(eval($("#display").text()));
    }
    else if (val=='ac') {
        $("#display").html('');
    }
    else {
        $("#display").html($("#display").text()+val);
    }
}
