window.onload = function() {
    var rotate = 30;
    $("body").html(`
      <div class="clock">
        <div class="hour hand"></div>
        <div class="minute hand"></div>
        <div class="second hand"></div>
        <div class="date"></div>
      </div>
    `)
    for (var i=1;i<=12;i++) {
        
        if (i==12 || i==3 || i==6 || i==9) {
            $(".clock").append(`
            <div class="ln" style="transform: rotate(${rotate}deg);">
            <div style="transform: rotate(-${rotate}deg);">${i}</div>
            </div>
        `);
        }
        else {
            $(".clock").append(`
            <div class="num" style="transform: rotate(${rotate}deg);">
            <div style="transform: rotate(-${rotate}deg);">${i}</div>
            </div>
        `);
        }
        rotate+=30;
    }
    rotateHands();
}

setInterval(rotateHands, 1);
function rotateHands() {
    var d = new Date();
    var hour = (d.getHours()+d.getMinutes()/60) / 12 * 360;
    var min = (d.getMinutes() + d.getSeconds()/60) / 60 * 360;
    var sec = (d.getSeconds() + d.getMilliseconds()/1000) /60 * 360;
    var day = d.getDate();
    var month = d.getMonth();
    if (day<10) day="0"+day;
    if (month<10) month = "0"+month;
    var td = day+"-"+month+"-"+d.getFullYear();
    $(".date").html(td);
    $(".clock .second").css("transform", `rotate(${sec}deg)`);
    $(".clock .minute").css("transform", `rotate(${min}deg)`);
    $(".clock .hour").css("transform", `rotate(${hour}deg)`);
}    
