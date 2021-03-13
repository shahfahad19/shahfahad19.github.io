var id, min, sec, moves, t;
var c1 = 'rgb(255,255,255,0.1)';
var c2 = 'rgb(255,255,255,0.145)';
var W = innerWidth;
var H = innerHeight;
var r = [1,5,9,13];
var l = [4,8,12,16];
var rl = [2,3,6,7,10,11,14,15];

window.onresize = innit;
function innit() {
   W = innerWidth;
   H = innerHeight;
   $('body').height(H+"px");
   $('#ol').height("100%");
}
function setup() {
  innit();
  $('#ol').html(`<div id="iol"> <h2>Congrats :)</h2><p>You completed the puzzle in ${moves} moves. It took you ${min} minute(s) and ${sec} second(s).</p><span>Comment your score !</span><br/><button onclick="setup()"> Restart</button></div>`);
  $("#16").css('background',c2);
  //$('#ol').hide();
  min=0, sec=0, moves=0;
  $("td").html("");
  for (var arr=[],i=0;i<15;++i)
      arr[i]=(i+1);
  var tmp, c, p = arr.length;
    if(p) while(--p) {
    c = Math.floor(Math.random() * (p + 1));
    tmp = arr[c];
    arr[c] = arr[p];
    arr[p] = tmp;
    }
  for (var i=0;i<arr.length;i++) {
      $('#'+(i+1)).html(arr[i])
  }
  t = setInterval(function() {
      sec++;
      if(sec==60) {
          min++;
          sec=0;
      }
      if(sec<10) {
          $("#time").html("0"+min+":0"+sec);
      }
      else {
        $("#time").html("0"+min+":"+sec);
      }
   }, 1000);
      
}

$(function() {
  $("td").click(function() {
    var n = $(this).text();
    id = parseInt($(this).attr('id'));
    if(r.indexOf(id)!=-1 || rl.indexOf(id)!=-1){
      if ($("#"+(id+1)).text()=="") {
        $("#"+(id+1)).html(n);
        $(this).html("");
        $("#"+(id+1)).css('background',c1);
        $(this).css('background',c2);
        moves++;
        $("#moves").html(moves);
      }
    }
    if(l.indexOf(id)!=-1 || rl.indexOf(id)!=-1){
      if ($("#"+(id-1)).text()=="") {
        $("#"+(id-1)).html(n);
        $("#"+(id-1)).css('background',c1);
        $(this).css('background',c2);
        
        $(this).html("");
        moves++;
        $("#moves").html(moves);
      }
    }
    if (id<=12) {
      if ($("#"+(id+4)).text()=="") {
        $("#"+(id+4)).html(n);
          $(this).html("");
          $("#"+(id+4)).css('background',c1);
        $(this).css('background',c2);
          moves++;
          $("#moves").html(moves);
      }
    }
    if (id>=5) {
      if ($("#"+(id-4)).text()=="") {
        $("#"+(id-4)).html(n);
        $("#"+(id-4)).css('background','rgb(255,255,255,0.1)');
        $(this).css('background','rgb(255,255,255,0.2)');
        $(this).html("");
        moves++;
        $("#moves").html(moves);
      }
    }
    check();
  });
});

function check() {
  var c = "true";
  for (i=1;i<=15;i++) {
    if (parseInt($("#"+i).text())!=i) {
        c="false";
        break;
    }
  }
  
  if (c=="true") {
    $('#ol').fadeIn(500);
    $("#iol p").html(`
    You completed the puzzle in ${moves} moves. It took you ${min} minute(s) and ${sec} second(s).
    `);
    clearInterval(t);
  }
}
