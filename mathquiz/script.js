var count=1, total=0, correct=0, wrong=0, lim=0;
var ans = "", question ="", input="", width= 220, t = '', n1, n2, n3, r1, r2, mode=0;

var opr = [];

$(document).ready(function() {
    $("#quizbody").hide();
    $("#diff p").html("When easy mode is on, system will automatically detect the right answer and you won't have to click done.");
});

function level(lvl) {
    if (lvl<5) {
        opr = ["+", "-", "*"];        
        if (lvl==1)
            lim = 5;
        else if (lvl==2)
            lim = 10;
        else if (lvl==3)
            lim = 15;
        else if (lvl==4)
            lim = 30;            
    }
    else if (lvl==5) {
        lim = 50;
        opr = ["+", "-", "*", "*"];
    }
    $("#diff").hide();
    $("#quizbody").show();
    quiz();
}

function quiz() {
    var len = opr.length;    
    n1 = Math.floor(Math.random() * lim);
    n2 = Math.floor(Math.random() * lim);
    n3 = Math.floor(Math.random() * lim);    
    r1 = opr[Math.floor(Math.random()*len)];
    r2 = opr[Math.floor(Math.random()*len)];    
    question = n1+r1+n2+r2+n3;
    ans = eval(question);
    $("#question").html(question+" = ?");
    t = setInterval(timeCheck, 75);
}

function check() {
    var input = $("#answer").val();
    if(input == ans) {
        Swal.fire({
          icon: 'success',
          title: 'Correct',
          text: ans + ' is correct.',
          showConfirmButton: false,
          timer: 1500
        });
        correct++;
        $("#correct").html(correct);
    }
    else {
        Swal.fire({
          icon: 'error',
          title: 'Wrong',
          text: 'The answer was '+ans,
          showConfirmButton: false,
          timer: 1500
        });
        wrong++;
        $("#wrong").html(wrong);
    } 
    $("#answer").val('');
    count++;
    total++;
    $("#no").html(count);
    $("#total").html(total);
    clearInterval(t);
    width = 220;
    bar.style.width = '200px';
    quiz();
}

function ins(num) {
    var chk = $("#answer").val().includes(".");
    if ($("#answer").val() != '' && num == '-' || num == "." && chk)
    {
      //do nothing  
    }
    
    else {
      $("#answer").val($("#answer").val() + num);
      if (mode==1) {
          if ($("#answer").val() ==ans)
              check();
      }
    }      
}

function timeCheck() {
    var bar = document.getElementById("bar");
    if(width == 0) {
        clearInterval(t);
        Swal.fire({
          icon: 'warning',
          title: 'Timeout',
          text: 'The answer was '+ans,
          showConfirmButton: false,
          timer: 1500
        });
        wrong++;
        $("#wrong").html(wrong);
    quiz();
    width = 220;
    bar.style.width = '200px';
    }
    else {
        width--;
        bar.style.width = width+'px';
    }
}

$(function() {
    $("#mode").click(function() {
        if (mode==0) {
            $(this).html("Easy Mode (ON)");
            mode=1;
        }
        else {
            $(this).html("Easy Mode (OFF)");
            mode=0;
        }
    });
    
    $("#res").click(function() {
        $("#diff").show();
        $("#quizbody").hide();
        count=1, total=0, correct=0, wrong=0, lim=0;
        $("#correct").html(correct);
        $("#wrong").html(wrong);
        $("#total").html(total);
        input.value = "";
        clearInterval(t);
        width = 220;
        bar.style.width = '200px';
    });
    
    $("#del").click(function() {
        var txt = $("#answer").val();
        txt = txt.slice(0, -1);
        $("#answer").val(txt);
    });
    
    $("#ex").click(function() {
        $("#diff p").toggle(800);
    });
});
