var i = 0, oldans=0;
function input(val) {
    
    //To delete a number
    if (val=='c') {
        txt = $("#display").text();
        $("#display").html(txt.substring(0, txt.length-1));
    }
    
    //To find answer
    else if (val=='=') {
        try {
            var ans = eval($("#display").text());
            if (ans=="Infinity") {
                $("#display").html('= &#8734;');
            }
            else if (isNaN(ans)) {
                $("#display").html('Math Error');
            }
            else {
                $("#display").html('= '+ans);
            }
            oldans=ans;
            i=1;
        }
        catch(err) {
            if (i==1) {
                $("#display").html(oldans);
                i = 0;
            }
            else {
                $("#display").html("Syntax Error");
                i = 1;
            }
        }
        
 
 }   //To clear all
    else if (val=='ac') {
        $("#display").html('');
    }
    
    //Number Input
    else {
    
        if (i==0) {
            var txt = $("#display").text();
            var last = txt.slice(-1);
            if (val=='.') {
                if (last != '.') {
                    $("#display").html(txt+val);
                }
            }
            else if (val=='+' || val=='-' || val=='*' || val=='/') {
                if (last=='+' ||last=='-' || last=='*' || last=='/' || last=='.') {}
                else
                $("#display").html($("#display").text()+val);
            }
            else {
                $("#display").html($("#display").text()+val)
            }
        }
        
        else {
            $("#display").html(val);
            i = 0;
        }
    }
}
