var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var i= 0;
var d ='', day='';
var url = "https://api.weatherapi.com/v1/forecast.json";
var key = "8a1362221e524488b3e112953200305";

$(document).ready(function(){
    weather('Islamabad');
    $("#mainbody").hide();
    $("#forecasttable").hide();
    $("#loadingbox").show();
});

function weather(city) {
var api = url+'?key='+key+'&q='+city+'&days=3';
$.getJSON(api, function(result) {
        var rc = result.current;
        $("#city").html(result.location.name);
        $("#mainbody img").attr("src", 'https:'+result.current.condition.icon);
        $("#temp").html(rc.temp_c+' °C');
        $("#chanceofrain").html(result.forecast.forecastday[0].day.daily_chance_of_rain+' %');
        $("#cond").html(rc.condition.text);
        $("#humidity").html(rc.humidity+' %');
        $("#feel").html(rc.feelslike_c+' °C');
        $("#wind").html(rc.wind_kph+' km/h');
        $("#direction").html(rc.wind_dir);
        $("#update").html(rc.last_updated);
        $("#mainbody").show();
        for(i=0;i<=2;i++) {
        var fd = result.forecast.forecastday[i];
        var date = fd.date;
        var avgtemp = fd.day.avgtemp_c+' °C';
        var humidity = fd.day.avghumidity+' %';
        var rain = fd.day.daily_chance_of_rain+' %';
        var sunrise = fd.astro.sunrise;
        var sunset = fd.astro.sunset;
        var moonrise = fd.astro.moonrise;
        var moonset = fd.astro.moonset;
        var summary = fd.day.condition.text;
        var icon = fd.day.condition.icon;
        icon = "https:" + icon;
        d = new Date(date);
        day = days[d.getDay()];
        $("#forecastlabel").html('3 Day Forecast for ' + result.location.name);
        $("#forecastlabel").show();
        if (i==0) day = "Today";
        else if (i==1) day = "Tomorrow";
        $("#forecasttable").append(`
        <div id="forecast">
            <div id="top">
            <img src="${icon}">
            <span id="date">${day}</span>
            <span id="avgtemp">${avgtemp}</span>
            </div>
            <span id="summary">${summary}</span>
            <br/>
            <div id="more">
            <span id="label">Chance of Rain:<br/>Humidity</span><span id="rainchance">${rain}<br/>${humidity}</span>
            </div>
            <div id="more">
            <span id="label">Sunrise:<br/>Sunset: </span><span id="sunrise">${sunrise}<br/>${sunset}</span>
            </div>
            <div id="more">
            <span id="label">Moonrise:<br/>Moonset</span><span id="moonrise">${moonrise}<br/>${moonset}</span>
            </div>
        </div>
        <br>
        <br>
        `);
      }
        $("#loadingbox").hide();
        $("#mainbody").show();
        $("#forecasttable").show();
});
}

$(function() {
    $("#topbar #searchicon").click(function() {
        $("#searchbox").toggle(500);
    });
});

$(document).on("keypress", "input", function(e) {
    if(e.which == 13 && $("#searchbox input").val()!="") {
        $("#searchbox").toggle(500);
        weather($("#searchbox input").val());
        $("#searchbox input").val('');
        $("#forecasttable").html(`<h2 id="forecastlabel"></h2>`);
        $("#mainbody").hide();
        $("#forecasttable").hide();
        $("#loadingbox").show();
    }
});

$(function() {
    $("#searchbox button").click(function() {
        if ($("#searchbox input").val()!="") {
            $("#searchbox").toggle(500);
            weather($("#searchbox input").val());
            $("#searchbox input").val('');
            $("#forecasttable").html(`<h2 id="forecastlabel"></h2>`);
            $("#mainbody").hide();
            $("#forecasttable").hide();
            $("#loadingbox").show();
        }
    });
});
