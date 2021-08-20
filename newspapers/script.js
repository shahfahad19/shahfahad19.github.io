var back=0, menu, cities, res, dl=localStorage.getItem("dlmode");
window.onload = () => {
  if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('serviceWorker.js')
  .then(function(registration) {
    console.log('Registration successful, scope is:', registration.scope);
  })
  .catch(function(error) {
    console.log('Service worker registration failed, error:', error);
  });
}
}
$( document ).ready(function() {
getList();
$("#back").css("display", "none");
});
function getList() {
   if (dl==undefined) {
     dl="light" ;
     $("#dlicon").html("dark_mode");
  }
  if (dl=="dark") {
       $("body").css("background-color", "#373737");
       $("#title").css("background-color", "#00468b");
       $("#credits").css("background-color", "#00468b");
       $(".box button").css("background-color", "#00468b");
       $("#dlicon").html("light_mode");
       $("#loadingbox").css("color", "white");
   }
   else if (dl=="light") {
   	$("#dlicon").html("dark_mode");
      $("#loadingbox").css("color", "RoyalBlue");
  }  
 
   
   var boxHeight = (window.innerHeight-120) + "px";
   var date, cities, citiesName, hlink;
    var td = new Date();
    var year = td.getFullYear();
    var month = td.getMonth() + 1;
    if (month<10) month = "0"+month;
    var day  = td.getDate();
    var nday = td.getDay();
    var months = ["january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december"];
    var monthName = months[td.getMonth()];

    if (day<10) day = "0"+day;
    
    /*EXPRESS NEWSPAPER START*/
    date = year+month+day;
    var ex = "https://www.express.com.pk/images/NP_";
    var cities = ["LHE", "KHI", "ISB", "FSB", "GRW", "MUX", "PEW", "RYK", "SGD", "SUK", "QTA"];
    var citiesName = ["Lahore", "Karachi", "Islamabad", "Faisalabad", "Gujranwala", "Multan", "Peshawar", "Raheem Yar Khan", "Sargodha", "Sukkur", "Quetta"];
    var express = `{"name": "Express", "cities": [`;
    for (var i=0;i<cities.length;i++) {
    hlink = `${ex}${cities[i]}/${date}/${date}-NP_${cities[i]}-`;
       express += `{"name": "${citiesName[i]}", "images": ["${hlink}Front_Page_1.jpg", "${hlink}Metropolitan_PageC002_2.jpg", "${hlink}NAT_INT_PageC003_3.jpg", "${hlink}City_PageC004_4.jpg", "${hlink}Baqia_PageC005_5.jpg", "${hlink}Editorial_PageC006_6.jpg", "${hlink}Classified_PageC007_7.jpg", "${hlink}Sports_PageC008_8.jpg", "${hlink}Magazine_PageC009_9.jpg", "${hlink}Back_PageC010_10.jpg", "${hlink}City_Page002_2.jpg", 
"${hlink}National_Page003_3.jpg", 
"${hlink}Classified_Page004_4.jpg", 
"${hlink}Baqia_Page005_5.jpg", 
"${hlink}Commerce_PageBW_6.jpg", 
"${hlink}Sports_PAGE007_7.jpg", 
"${hlink}Back_Page008_8.jpg", 
"${hlink}Metropolitan_Page009_9.jpg", 
"${hlink}Editorial_Page10_10.jpg", 
"${hlink}Opinion_Page011_11.jpg", 
"${hlink}Magazine_Page12_12.jpg"]}`;
   
    if (i!=cities.length-1) {
        express+=",";
    }
    else express += "]}";
    }
    /*EXPRESS NEWSPAPER END*/

    /*NAIBAAT START*/
    date = `${day}-${month}-${year}`;
    cities = ["lahore", "islamabad", "peshawar", "karachi", "quetta", "faisalabad", "sargodha"];
    citiesName = ["Lahore", "Islamabad", "Peshawar", "Karachi", "Quetta", "Faisalabad", "Sargodha"];
    var naibaat = `{"name": "Naibaat", "cities": [`;
    for (var i=0;i<cities.length;i++) {
        naibaat += `{"name": "${citiesName[i]}", "images": [`;
        for (var j=1;j<=12;j++) {
            var x = j;
            if (j<10) x="0"+j;
            naibaat += `"http://e.naibaat.pk/ePaper/${cities[i]}/${date}/pages/Page%20${x}.jpg"`;
            if(x<12) naibaat+=", ";
        }
        naibaat+="]}";
        if (i!=cities.length-1) naibaat+=", ";
        else naibaat += "]}";
        
    }
    /*NAIBAAT NEWSPAPER END*/
    
    /*MASHRIQ START*/
    var mashriq = `{"name": "Mashriq", "cities": [{"name": "Peshawar", "images": [`;
    for (var i=1;i<=12;i++) {
        mashriq+= `"https://mashriqtv.pk/daily-mashriq/uploads/mashriqnp/${date}/mas-${date}-${i}.jpg"`;
        if (i<12) mashriq += ",";
        else mashriq += "]}"
    }
    mashriq += "]}";
    /*MASHRIQ NEWSPAPER END*/
    
    /*ALAKHBAR START*/
    var alakhbar = `{"name": "AlAkhbar", "cities": [{"name": "Islamabad", "images": [`;
    for (var i=1;i<=8;i++) {
        alakhbar+= `"http://alakhbar.com.pk/epaper/epaper/${date}/${i}.jpg"`;
        if (i<8) alakhbar += ", ";
        else alakhbar += "]}"
    }
    alakhbar += "]}";
    /*ALAKHBAR ENDED*/
    
    /*JURAAT STARTED*/
    var juraat = `{"name": "Juraat", "cities": [{"name": "Karachi", "images": [`;
    for (var i=1;i<=8;i++) {
        juraat += `"https://e.juraat.com/khi/${year}/${month}/${day}/News/Page00${i}.jpg"`;
        if (i<8) juraat += ", ";
        else juraat += "]}"
    }
    juraat += "]}";
    /*JURAAT END*/
    
    /*JANG PAPER START*/
    cities = ["lahore", "pindi", "karachi", "quetta", "multan", "london"];
    citiesName = ["Lahore", "Rawalpindi", "Karachi", "Quetta", "Multan", "London"];
    var jang = `{"name": "Jang", "cities": [`;
    for (var i=0;i<cities.length;i++) {
        jang += `{"name": "${citiesName[i]}", "images": [`;
        for (var j=1;j<=12;j++) {
            jang += `"https://e.jang.com.pk/${month}-${day}-${year}/${cities[i]}/images/main_page_images/page${j}.jpg"`;
            
            jang += `, "https://e.jang.com.pk/${month}-${day}-${year}/${cities[i]}/images/main_page_images/page${j}.png"`;
            if(j<12) jang +=", ";
        }
        jang+="]}";
        if (i!=cities.length-1) jang+=", ";
        else jang += "]}";
    }
    /*JANG PAPER END*/
    
    /*UMMAT PAPER START*/
    cities = ["page-", "page0", "page_", "page"];
    citiesName = ["Karachi", "Peshawar", "Hyderabad", "Rawalpindi"];
    var c = 0;
    if (nday == 0) c=12;
    else c = 10;
    var ummat = `{"name": "Ummat", "cities": [`;
    for (var i=0;i<cities.length;i++) {
        ummat += `{"name": "${citiesName[i]}", "images": [`;
        
        for (var j=1;j<=c;j++) {
            ummat += `"https://www.ummat.net/${year}/${month}/${day}/images/${cities[i]}${j}.jpg"`;
            if(j<c) ummat+=", ";
        }
        ummat+="]}";
        if (i!=cities.length-1) ummat+=", ";
        else ummat += "]}";
    }
    /* UMMAT PAPER ENDS */
    
    /*JINNAH PAPER START*/
    cities = ["lahore", "islamabad", "kashmir", "karachi"];
    citiesName = ["Lahore", "Islamabad", "Kashmir", "Karachi"];
    var jinnah = `{"name": "Jinnah", "cities": [`;
    for (var i=0;i<cities.length;i++) {
        jinnah += `{"name": "${citiesName[i]}", "images": [`;
        
        for (var j=1;j<=8;j++) {
            jinnah += `"https://www.dailyjinnah.com/assets/${cities[i]}/${date}/${j}.jpg"`;
            if(j<8) jinnah += ", ";
        }
        jinnah += "]}";
        if (i!=cities.length-1) jinnah += ", ";
        else jinnah += "]}";
    }
    /* JINNAH PAPER ENDS */
    
    /*NEWSPAPER START*/
    var ispaper = `{"name": "ISLAM", "cities": [{"name": "Lahore", "images": [`;
    for (var j=1;j<=8;j++) {
        ispaper += `"http://www.dailyislam.pk/epaper/images/lahore/${year}/${monthName}/${date}/page${j}.jpg"`;
        if(j<8) ispaper += ", ";
    }
    ispaper+= `]}, {"name": "Karachi", "images": [`;
    for (var j=1;j<=8;j++) {
        ispaper += `"http://www.dailyislam.pk/epaper/images/${year}/${monthName}/${date}/page${j}.jpg"`;
        if(j<8) ispaper += ", ";
    }
    ispaper += "]}]}";
    
    /*NEWSPAPER ENDS*/
    
    /*JASARAT NEWSPAPER STARTED*/
    date = `${year}-${month}-${day}`;
    cities = ["islamabad", "karachi", "Hyderabad"];
    citiesName = ["Islamabad", "Karachi", "Hyderabad"];
    var jasarat = `{"name": "Jasarat", "cities": [`;
    var clink = "";
    for (var i=0;i<cities.length;i++) {
        if (i==0) clink = "https://islamabad.jasarat.com/images/dates/"+date+"/islamabad/mm/";
        else if (i==1) clink = "https://epaper.jasarat.com/images/dates/"+date+"/karachi/mm/";
        else clink = "https://hyderabad.jasarat.com/images/dates/"+date+"/hyderabad/mm/";
        jasarat += `{"name": "${citiesName[i]}", "images": [`;
        for (var j=1;j<=8;j++) {
            jasarat += `"${clink}${j}.jpg"`;
            if(j<8) jasarat += ", ";
        }
        jasarat += "]}";
        if (i!=cities.length-1) jasarat += ", ";
        else jasarat += "]}";
    }
    /*JASARAT NEWSPAPER ENDS*/
    
    var d = new Date();
d.setDate(d.getDate() + 0 - d.getDay());
var sunday= d.getDate(), sMonth=d.getMonth()+1;
if (sunday<10) sunday = "0"+sunday;
if (sMonth<10) sMonth = "0"+sMonth;
var magDate = sunday+"-"+sMonth+"-"+d.getFullYear();

    var mashriqmag = `{"name": "Mashriq Magazine", "cities": [{"name": "Magazine", "images": [`;
    for (var i=1;i<=16;i++) {
        mashriqmag+= `"https://mashriqtv.pk/wp-content/uploads/mag-${magDate}-${i}.jpg"`;
        if (i<16) mashriqmag += ",";
        else mashriqmag += "]}"
    }
    mashriqmag += "]}";
    
    

    res = `{"newspapers": [${express}, ${naibaat}, ${jang}, ${mashriq}, ${alakhbar}, ${ispaper}, ${ummat}, ${jasarat}, ${jinnah}, ${juraat}, ${mashriqmag}]}`;
  res = JSON.parse(res);
    var paperList = res.newspapers.length;
  menu ="";
 for (var x = 0; x<paperList ;x++) {
 var z = res.newspapers[x];
 menu+='<button id="'+x+'" onclick="citiesList('+x+')" class="menu">'+z.name+'</button>';
 }
 
 menu = replace(menu);
var cUrl = window.location.href;
//if (cUrl.includes("shahfahad19.github.io") && $("#credits").text().includes("Shah Fahad" )) {
$("#loading").hide();
 $(".box").html(menu);
 $("#box").hide();
  $("#box").fadeIn(800);
 buttonColor();
/*
} 
else {
window.location.replace("http://shahfahad19.github.io/newspapers");
} 
*/
   
 
}

function citiesList(url) {
    cities = '<button style="grid-column: 1 / span 2; height:55px;box-shadow:0px 0px 5px grey"> ' +res.newspapers[url].name+'</button>';
    var cList = res.newspapers[url].cities;
    for (var i = 0;i<cList.length;i++) {
      cities += '<button onclick="newspaper('+url+','+i+')">'+cList[i].name+'</button>'
    }
   cities = replace(cities);
   $(".box").html(cities);
   $("#box").hide();
   $("#box").fadeIn(600);
   buttonColor();
   $("#back").css("display", "inline-block");
   back=1;
 }

function newspaper(s,v) {
    var imgs = "";
    var images = res.newspapers[s].cities[v].images;
    for (var i = 0;i<images.length;i++) {
    	if (i==0) {
    	imgs += `<img src="${images[i]}" onerror="notAvail()">`;
      } 
      else {
      imgs += `<img src="${images[i]}" onerror="remove(this)">`;
        }
        
     } 
        imgs += '';
   $(".box").css("display", "block");
   $(".box").html(imgs);
   $("#box").hide();
   $("#loadingbox").html("تھوڑی دیر انتظار کریں");
   $("#loadingbox").fadeIn(500);
   var mainImg = new Image() ;
    mainImg.src = images[0];
    mainImg.onload = function() {
        $("#box").fadeIn(600); 
      $("#loadingbox").hide();
   	$("#loadingbox").html('<div id="loading"></div>');
   
  } 
    
   	
   back=2;
}

function replace(content) {

	content =content.replace("Mashriq Magazine", " مشرق میگزین"); 
	content =content.replace("Lahore", "لاہور");
content =content.replace("Peshawar", "پشاور");
content =content.replace("Islamabad", " اسلام آباد");
content =content.replace("Quetta", "کوئٹہ");
content =content.replace("Rawalpindi", "راولپنڈی");
content =content.replace("Multan", "ملتان");
content =content.replace("Karachi", "کراچی");
content =content.replace("Faisalabad", "فیصل آباد");
content =content.replace("Gujranwala", "گوجرانوالہ");
content =content.replace("Sukkur", "سکھر");
content =content.replace("Magazine", "میگزین");
content =content.replace("Raheem Yar Khan", "رحیم یار خان");
content =content.replace("Sargodha", "سرگودھا");
content =content.replace("London", "لندن");
content =content.replace("Kashmir", "کشمیر");
content =content.replace("Hyderabad", "حیدرآباد");
content =content.replace("Express", "روزنامہ ایکسپریس");
content =content.replace("Naibaat", "روزنامہ نئی بات");
content =content.replace("ISLAM", "روزنامہ اسلام");
content =content.replace("Jang", "روزنامہ جنگ");
content =content.replace("Mashriq", "روزنامہ مشرق");
content =content.replace("AlAkhbar", "روزنامہ الاخبار");
content =content.replace("Jasarat", "روزنامہ جسارت");
content =content.replace("Jinnah", "روزنامہ جناح");
content =content.replace("Ummat", "روزنامہ امت");
content =content.replace("Juraat", "روزنامہ جرات");

return content;
} 
function goBack() {
    if (back==2) {
        $(".box").css("display", "grid");
        $(".box").html(cities);
        back = 1;
        
    }
   
   else if (back==1) {
       $(".box").html(menu);
       back = 0;
       $("#back").css("display", "none");
       
    }
    $("#loadingbox").hide();
    $("#box").hide();
       $("#box").fadeIn(600);
   buttonColor();
}

function notAvail() {
   $("#box").hide();
   $("#loadingbox").html("یہ اخبار فلحال دستیاب نہیں ہے");
   $("#loadingbox").fadeIn(1000); 
} 
    function dlmode() {
        if (dl=="dark") {
        $("#dlicon").html("dark_mode");
            $("body").css("background-color", "white");
       $("#title").css("background-color", "royalblue");
       $("#credits").css("background-color", "royalblue");
       $(".box button").css("background-color", "royalblue");
         $("#loadingbox").css("color", "RoyalBlue");
            dl="light";
            localStorage.setItem("dlmode", "light");
            $("img").css("filter", "invert(0%)");
        }
        else {
            $("body").css("background-color", "#373737");
       $("#title").css("background-color", "#00468b");
       $("#credits").css("background-color", "#00468b");
       $(".box button").css("background-color", "#00468b");
       $("#dlicon").html("light_mode");
       $("#loadingbox").css("color", "white");
       dl="dark";
       localStorage.setItem("dlmode", "dark");
        }
    }
 function remove(image) {
image.remove();
} 
    function buttonColor() {
if (dl=="dark") {
    $(".box button").css("background-color", "#00468b");
   }
   else {
   	$(".box button").css("background-color", "RoyalBlue");
   $("img").css("filter", "invert(0%)");
  } 
}
