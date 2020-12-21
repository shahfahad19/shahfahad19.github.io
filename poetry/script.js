var i = 0;
function ready() {
    var api = "https://poetrydb.org/author";
$.getJSON(api, function(result) {
     for (var i=0;i<=result.authors.length-1;i++)
     {
       $("#list").append(`<option value="${result.authors[i]}">${result.authors[i]}</option>`);
     }
     $(".poet-selector").show();
     $("#ldr").hide();
    });
}

function poems() {
    if($("#list").val()!=0) {
        $(".poem-selector h3").html("Select any of "+$('#list').val()+"'s poem");
        $('#back').show();
        $(".poet-selector").hide();
        $("#ldr").show();
        var api = "https://poetrydb.org/author/"+$("#list").val()+"/title";
        $.getJSON(api, function(result) {
        for(var j=0;j<=result.length-1;j++) {
        $("#list2").append(`<option value="${result[j].title}">${result[j].title}</option>`);
        }
        $("#ldr").hide();
        $(".poem-selector").show();
        });
        i=1;
    }
    else {
        alert('Please select poet name');
    }
}

function poem() {
    if($("#list2").val()!=0) {
    $(".poem-selector").hide();
    $("#ldr").show();
    var api = "https://poetrydb.org/author,title/" +$("#list").val() +";"+$("#list2").val();
$.getJSON(api, function(result) {
    $("#poem").html(`<br /><center style="background-color:white;opacity:0.8;"><span style="font-size:22px;font-weight:bold;">${$("#list2").val()}</span><br /> by <span style="font-style:italic;">${$("#list").val()}</span></center><br /><hr/><br />`);
    for (var k=0;k<=result[0].lines.length-1;k++)
    {
        $("#poem").append(result[0].lines[k]+"<br />");
    }
    $("#body").hide();
    $("#ldr").hide();
    $("#poem").toggle(1000);
    });
    i=2;
    }
    else {
        alert('Please select poem name');
    }
}

function back() {
    if(i==1) {
        $(".poet-selector").show();
        $(".poem-selector").hide();
        i=0;
        $("#back").hide();
        $("#list2").html(`<option value="0">Select Poem</option>`);
    }
    
    else if(i==2) {
        $("#poem").hide();
        $("#body").show();
        $(".poem-selector").show();
        i=1;
    }
}
