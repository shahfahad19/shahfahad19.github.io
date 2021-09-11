var back = 0,	menu, cities, tries = 0, res, rescopy,tp, dl = localStorage.getItem("dlmode"), nwdate, isLoading = false, date, day, month, year;



if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}

$(document).ready(function() {
	getList();
	$("#back").css("display", "none");
});

function getList() {
	if (dl == undefined) {
		dl = "light";
		$("#dlicon").html("dark_mode");
	}
	if (dl == "dark") {
		$("body").css("background-color", "#373737");
		$("#title").css("background-color", "#00468b");
		$("#credits").css("background-color", "#00468b");
		$(".box button").css("background-color", "#00468b");
		$("#dlicon").html("light_mode");
		$("#msgbox").css("color", "white");
	} else if (dl == "light") {
		$("#dlicon").html("dark_mode");
		$("#msgbox").css("color", "RoyalBlue");
	}


	var boxHeight = (window.innerHeight - 120) + "px";
	var date, cities, citiesName, hlink;
	var td = new Date();
  year = td.getFullYear();
  month = td.getMonth() + 1;
	if (month < 10) month = "0" + month;
	day = td.getDate();
	nday = td.getDay();
	var months = ["january", "february", "march", "april", "may", "june",
		"july", "august", "september", "october", "november", "december"
	];
	var shortMonths = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
	var monthName = months[td.getMonth()];

	if (day < 10) day = "0" + day;

	/*EXPRESS NEWSPAPER START*/
	date = year + month + day;
	var ex = "https://www.express.com.pk/images/NP_";
	var cities = ["LHE", "KHI", "ISB", "FSB", "GRW", "MUX", "PEW", "RYK", "SGD", "SUK", "QTA"];
	var citiesName = ["Lahore", "Karachi", "Islamabad", "Faisalabad", "Gujranwala", "Multan", "Peshawar", "Raheem Yar Khan", "Sargodha", "Sukkur", "Quetta"];
	var express = `{"name": "Express", "cities": [`;
	for (var i = 0; i < cities.length; i++) {
		hlink = `${ex}${cities[i]}/${date}/${date}-NP_${cities[i]}-`;
		express += `{"name": "${citiesName[i]}", "images": ["${hlink}Front_Page_1.jpg", "${hlink}Metropolitan_PageC002_2.jpg", "${hlink}NAT_INT_PageC003_3.jpg", "${hlink}City_PageC004_4.jpg", "${hlink}Baqia_PageC005_5.jpg", "${hlink}Editorial_PageC006_6.jpg", "${hlink}Classified_PageC007_7.jpg", "${hlink}Sports_PageC008_8.jpg", "${hlink}Magazine_PageC009_9.jpg", "${hlink}Back_PageC010_10.jpg", "${hlink}City_Page002_2.jpg", "${hlink}National_Page003_3.jpg", "${hlink}Classified_Page004_4.jpg", "${hlink}Baqia_Page005_5.jpg", "${hlink}Commerce_PageBW_6.jpg", "${hlink}Sports_PAGE007_7.jpg", "${hlink}Back_Page008_8.jpg", "${hlink}Metropolitan_Page009_9.jpg", "${hlink}Editorial_Page10_10.jpg", "${hlink}Opinion_Page011_11.jpg", "${hlink}Magazine_Page12_12.jpg"]}`;

		if (i != cities.length - 1) {
			express += ",";
		} else express += "]}";
	}
	/*EXPRESS NEWSPAPER END*/

	/*NAIBAAT START*/
	date = `${day}-${month}-${year}`;
	cities = ["lahore", "islamabad", "peshawar", "karachi", "quetta", "faisalabad", "sargodha"];
	citiesName = ["Lahore", "Islamabad", "Peshawar", "Karachi", "Quetta", "Faisalabad", "Sargodha"];
	var naibaat = `{"name": "Naibaat", "cities": [`;
	for (var i = 0; i < cities.length; i++) {
		naibaat += `{"name": "${citiesName[i]}", "images": [`;
		for (var j = 1; j <= 12; j++) {
			var x = j;
			if (j < 10) x = "0" + j;
			naibaat += `"http://e.naibaat.pk/ePaper/${cities[i]}/${date}/pages/Page%20${x}.jpg"`;
			if (x < 12) naibaat += ", ";
		}
		naibaat += "]}";
		if (i != cities.length - 1) naibaat += ", ";
		else naibaat += "]}";

	}
	/*NAIBAAT NEWSPAPER END*/

	/*MASHRIQ START*/
	var mashriq = `{"name": "Mashriq", "cities": [{"name": "Peshawar", "images": [`;
	for (var i = 1; i <= 12; i++) {
		mashriq += `"https://mashriqtv.pk/daily-mashriq/uploads/mashriqnp/${date}/mas-${date}-${i}.jpg"`;
		if (i < 12) mashriq += ",";
		else mashriq += "]}"
	}
	mashriq += "]}";
	/*MASHRIQ NEWSPAPER END*/

	/*ALAKHBAR START*/
	var alakhbar = `{"name": "AlAkhbar", "cities": [{"name": "Islamabad", "images": [`;
	for (var i = 1; i <= 8; i++) {
		alakhbar += `"http://alakhbar.com.pk/epaper/epaper/${date}/${i}.jpg"`;
		if (i < 8) alakhbar += ", ";
		else alakhbar += "]}"
	}
	alakhbar += "]}";
	/*ALAKHBAR ENDED*/

	/*JURAAT STARTED*/
	var juraat = `{"name": "Juraat", "cities": [{"name": "Karachi", "images": [`;
	for (var i = 1; i <= 8; i++) {
		juraat += `"https://e.juraat.com/khi/${year}/${month}/${day}/News/Page00${i}.jpg"`;
		if (i < 8) juraat += ", ";
		else juraat += "]}"
	}
	juraat += "]}";
	/*JURAAT END*/

	/*JANG PAPER START*/
	cities = ["lahore", "pindi", "karachi", "quetta", "multan", "london"];
	citiesName = ["Lahore", "Rawalpindi", "Karachi", "Quetta", "Multan", "London"];
	var jang = `{"name": "Jang", "cities": [`;
	for (var i = 0; i < cities.length; i++) {
		jang += `{"name": "${citiesName[i]}", "images": [`;
		for (var j = 1; j <= 12; j++) {
			jang += `"https://e.jang.com.pk/${month}-${day}-${year}/${cities[i]}/images/main_page_images/page${j}.jpg"`;

			jang += `, "https://e.jang.com.pk/${month}-${day}-${year}/${cities[i]}/images/main_page_images/page${j}.png"`;
			if (j < 12) jang += ", ";
		}
		jang += "]}";
		if (i != cities.length - 1) jang += ", ";
		else jang += "]}";
	}
	/*JANG PAPER END*/

	/*UMMAT PAPER START*/
	cities = ["page-", "page0", "page_", "page"];
	citiesName = ["Karachi", "Peshawar", "Hyderabad", "Rawalpindi"];
	var c = 0;
	if (nday == 0) c = 12;
	else c = 10;
	var ummat = `{"name": "Ummat", "cities": [`;
	for (var i = 0; i < cities.length; i++) {
		ummat += `{"name": "${citiesName[i]}", "images": [`;

		for (var j = 1; j <= c; j++) {
			ummat += `"https://www.ummat.net/${year}/${month}/${day}/images/${cities[i]}${j}.jpg"`;
			if (j < c) ummat += ", ";
		}
		ummat += "]}";
		if (i != cities.length - 1) ummat += ", ";
		else ummat += "]}";
	}
	/* UMMAT PAPER ENDS */

	/*JINNAH PAPER START*/
	cities = ["lahore", "islamabad", "kashmir", "karachi"];
	citiesName = ["Lahore", "Islamabad", "Kashmir", "Karachi"];
	var jinnah = `{"name": "Jinnah", "cities": [`;
	for (var i = 0; i < cities.length; i++) {
		jinnah += `{"name": "${citiesName[i]}", "images": [`;

		for (var j = 1; j <= 8; j++) {
			jinnah += `"https://www.dailyjinnah.com/assets/${cities[i]}/${date}/${j}.jpg"`;
			if (j < 8) jinnah += ", ";
		}
		jinnah += "]}";
		if (i != cities.length - 1) jinnah += ", ";
		else jinnah += "]}";
	}
	/* JINNAH PAPER ENDS */

	/*NEWSPAPER START*/
	var ispaper = `{"name": "ISLAM", "cities": [{"name": "Lahore", "images": [`;
	for (var j = 1; j <= 8; j++) {
		ispaper += `"http://www.dailyislam.pk/epaper/images/lahore/${year}/${monthName}/${date}/page${j}.jpg"`;
		if (j < 8) ispaper += ", ";
	}
	ispaper += `]}, {"name": "Karachi", "images": [`;
	for (var j = 1; j <= 8; j++) {
		ispaper += `"http://www.dailyislam.pk/epaper/images/${year}/${monthName}/${date}/page${j}.jpg"`;
		if (j < 8) ispaper += ", ";
	}
	ispaper += "]}]}";

	/*NEWSPAPER ENDS*/

	/*JASARAT NEWSPAPER STARTED*/
	date = `${year}-${month}-${day}`;
	nwdate = date;
	cities = ["islamabad", "karachi", "Hyderabad"];
	citiesName = ["Islamabad", "Karachi", "Hyderabad"];
	var jasarat = `{"name": "Jasarat", "cities": [`;
	var clink = "";
	for (var i = 0; i < cities.length; i++) {
		if (i == 0) clink = "https://islamabad.jasarat.com/images/dates/" + date + "/islamabad/mm/";
		else if (i == 1) clink = "https://epaper.jasarat.com/images/dates/" + date + "/karachi/mm/";
		else clink = "https://hyderabad.jasarat.com/images/dates/" + date + "/hyderabad/mm/";
		jasarat += `{"name": "${citiesName[i]}", "images": [`;
		for (var j = 1; j <= 8; j++) {
			jasarat += `"${clink}${j}.jpg"`;
			if (j < 8) jasarat += ", ";
		}
		jasarat += "]}";
		if (i != cities.length - 1) jasarat += ", ";
		else jasarat += "]}";
	}
	/*JASARAT NEWSPAPER ENDS*/
  
  
 
	var d = new Date();
	d.setDate(d.getDate() + 0 - d.getDay());
	var sunday = d.getDate(),
		sMonth = d.getMonth() + 1;
	if (sunday < 10) sunday = "0" + sunday;
	if (sMonth < 10) sMonth = "0" + sMonth;
	var magDate = sunday + "-" + sMonth + "-" + d.getFullYear();

	var mashriqmag = `{"name": "Mashriq Magazine", "cities": [{"name": "Magazine", "images": [`;
	for (var i = 1; i <= 16; i++) {
		mashriqmag += `"https://mashriqtv.pk/wp-content/uploads/mag-${magDate}-${i}.jpg"`;
		if (i < 16) mashriqmag += ",";
		else mashriqmag += "]}"
	}
	mashriqmag += "]}";

	magDate = sunday + sMonth + d.getFullYear();
	var mag92 = `{"name": "92 Magazine", "cities": [{"name": "Magazine", "images": [`;
	for (var i = 1; i <= 24; i++) {
		mag92 += `"https://www.roznama92news.com/backend/web/uploads/emagzine/2/${d.getFullYear()}/${sMonth}/${magDate}/${i}.jpg"`;
		if (i < 24) mag92 += ",";
		else mag92 += "]}"
	}
	mag92 += "]}";
	var n2 = `{"name": "92 Newspaper", "cities": [{"name": "Karachi", "images": []}, {"name": "Lahore", "images": []}, {"name": "Islamabad", "images": []}, {"name": "Peshawar", "images": []}, {"name": "Faisalabad", "images": []}, {"name": "Sargodha", "images": []}, {"name": "Quetta", "images": []}, {"name": "Multan", "images": []}]} `;

	var nw = `{"name": "Nawaiwaqt", "cities": [{"name": "AJK", "images": []}, {"name": "Gawadar", "images": []}, {"name": "Gujranwala", "images": []}, {"name": "Islamabad", "images": []}, {"name": "Karachi", "images": []}, {"name": "Lahore", "images": []}, {"name": "Multan", "images": []}, {"name": "Quetta", "images": []}]} `;

	var pak = `{"name": "Pakistan", "cities": [{"name": "Karachi", "images": []}, {"name": "Lahore", "images": []}, {"name": "Multan", "images": []}, {"name": "Peshawar", "images": []}, {"name": "Rawalpindi", "images": []}]} `;
	var jpak = `{"name": "Jehan e Pakistan", "cities": [{"name": "Karachi", "images": []}, {"name": "Lahore", "images": []}, {"name": "Multan", "images": []}, {"name": "Islamabad", "images": []}, {"name": "Gujranwala", "images": []}]} `;
	var dunya = `{"name": "Dunya", "cities": [{"name": "Karachi", "images": []}, {"name": "Lahore", "images": []}, {"name": "Multan", "images": []}, {"name": "Islamabad", "images": []}, {"name": "Gujranwala", "images": []}, {"name": "Faisalabad", "images": []}]} `;
	res = `{"newspapers": [${express}, ${naibaat}, ${jang}, ${mashriq}, ${alakhbar}, ${ispaper}, ${ummat}, ${jasarat}, ${dunya}, ${jinnah}, ${juraat}, ${n2}, ${jpak}, ${nw}, ${pak}, ${mashriqmag}, ${mag92}]}`;
	rescopy = res;
	res = replace(res)
	res = JSON.parse(res);
	rescopy = JSON.parse(rescopy);
	var paperList = res.newspapers.length;
	menu = "";
	for (var x = 0; x < paperList; x++) {
		var z = res.newspapers[x];
		menu += '<button id="' + x + '" onclick="citiesList(' + x + ')" class="menu"><a href="#cities" >' + z.name + '</a></button>';
	}
	
	$("#msgbox").hide();
	$(".box").html(menu);
	$("#box").hide();
	$("#box").fadeIn(200);
	buttonColor();
	
	
}

function citiesList(url) {
	cities = '<button style="grid-column: 1 / span 2; height:55px;box-shadow:0px 0px 5px grey"> ' + res.newspapers[url].name + '</button>';
	var cList = res.newspapers[url].cities;
	if (rescopy.newspapers[url].name == "92 Newspaper") {
		for (var i = 0; i < cList.length; i++) {
			cities += '<button onclick="get92(0,' + i + ')"><a href="#newspaper" >' + cList[i].name + '</a></button>'
		}
	} else if (rescopy.newspapers[url].name == "Nawaiwaqt" || rescopy.newspapers[url].name == "Pakistan") {
		for (var i = 0; i < cList.length; i++) {
			var cityName = rescopy.newspapers[url].cities[i].name;
			cities += `<button onclick="getnwpak('${cityName}', '${rescopy.newspapers[url].name}')"><a href="#newspaper" >${cList[i].name}</a></button>`;
		}
	} else if (rescopy.newspapers[url].name == "Jehan e Pakistan") {
		for (var i = 0; i < cList.length; i++) {
			var cityName = rescopy.newspapers[url].cities[i].name;
			cities += `<button onclick="jpak('${cityName}')"><a href="#newspaper" >${cList[i].name}</a></button>`;
		}
	} else if (rescopy.newspapers[url].name == "Dunya") {
	  var dunyaCities = ["KCH", "LHR", "MUL", "ISL", "GUJ", "FAB"];
		for (var i = 0; i < cList.length; i++) {
			var cityName = rescopy.newspapers[url].cities[i].name;
			cities += `<button onclick="dunya('${dunyaCities[i]}')"><a href="#newspaper" >${cList[i].name}</a></button>`;
		}
	} else {
		for (var i = 0; i < cList.length; i++) {
			cities += '<button onclick="newspaper(' + url + ',' + i + ')"><a href="#newspaper" >' + cList[i].name + '</a></button>';

		}
	}
	$(".box").html(cities);
	$("#box").fadeIn(600);
	buttonColor();
	$("#back").css("display", "inline-block");
	back = 1;
}
function dunya(city) {
  modifyPaper(true);
  wait(true);
  $.ajax({
    url: "https://api.codetabs.com/v1/proxy/?quest=https://e.dunya.com.pk/index.php?e_name="+city,
    success: function(data) {
    var search = 'c="news/';
    var re = new RegExp('((\\S+[\\b\\s]?)' + search + '([\\b\\s]?\\S+))', 'i'),
      matches = data.match(re);
      while (matches) {
        try {
            var words = data.match(re)[0].split(/\s+/);
        }
        catch { wait(false); break; }
        link = words.join(' ');
        data = data.replace(link, '');
        link = link.replace('src="', '');
        link = link.replace('"', '');
        $('.box').append('<img src="https://e.dunya.com.pk/'+link+'">')
      }
    }
  });
}

function get92(p, station) {
	if (p == 0) {
		isLoading = true;
		station = parseInt(station);
		station++;
		p = parseInt(p);
		wait(true);
	  modifyPaper(true); 
	}
	if (isLoading) {
	  $.ajax({
      url: "https://api.codetabs.com/v1/proxy?quest=www.roznama92news.com/efrontend/web/index.php/index2?station_id="+station+"&page_id="+p,
      success: function(data) {
        var search = 'src="/backend/web/uploads/epaper';
        var re = new RegExp('((\\S+[\\b\\s]?)' + search + '([\\b\\s]?\\S+))', 'i'),
        matches = data.match(re);
         
         /* When Page is Found */
        if (matches) {
          var words = data.match(re)[0].split(/\s+/),
          link = words.join(' ');
          link = link.replace('<img src="', 'https://www.roznama92news.com');
          link = link.replace('"', '');
          if (tries==1) p=tp;
          if (p<9) {
            p++;
            get92(p, station);
          }
          else if (p==9)
            p++;
          tries = 0;
          
          if (p==10) {
            wait(false);
          }
             
          /* Display Image */
          if (isLoading)
          $(".box").append('<img src="'+link+'">');
        }
        
        /*When Page is Not Found so it will search for common Page */
        else {
          if (tries == 0 && p<=10) {
            tries = 0;
            tp = p;
            get92(p+"&is_common=Y", station);
            tries = 1;
          }
          
          else if (tries == 1 && p<=10) {
            tries = 0;
            p++;
            get92(p, station);
          }
        }
      }
	  }); 
	}
	
}

function getnwpak(city, np) {
  modifyPaper(true);
  wait(true);
  var imgsArr= [];
	if (np == "Pakistan") {
		var furl = "https://api.codetabs.com/v1/proxy?quest=https://dailypakistan.com.pk/E-Paper/";
		lim = 8;
	} else {
		furl = "https://api.codetabs.com/v1/proxy?quest=https://www.nawaiwaqt.com.pk/E-Paper/";
		lim = 10;
	}
	
		$.ajax({
    url: furl + city + "/" + nwdate + "/page-1",
    success: function(data) {
    source = data;
    var search = 'epaper_image/small';
    var re = new RegExp('((\\S+[\\b\\s]?)' + search + '([\\b\\s]?\\S+))', 'i'),
    matches = data.match(re);
    while (matches) {
      try {
        var words = data.match(re)[0].split(/\s+/);
      }
      catch {
        wait(false);
        break;
      }
      link = words.join(' ');
      data = data.replace(link, '');
      link = link.replace('src="', '');
      link = link.replace('small', 'large');
      link = link.replace('"', '');
      imgsArr.push(link);
    }
    for (var i = 0; i<(imgsArr.length/2); i++) {
        $('.box').append('<img src="'+imgsArr[i]+'">')
    }
    imgsArr = [];
    data = '';
    }
  });
}

function jpak(city) {
  modifyPaper(true);
  wait(true);
	city = city.toLowerCase();
  date = day +""+ month +""+  (''+year).substr(2);
  $.ajax({
    url: "https://api.codetabs.com/v1/proxy?quest=www.jehanpakistan.com/epaper/epaper.php?edition="+city+"&date="+date,
    success: function(data) {
      source = data;
      var search = '/thumb';
      var re = new RegExp('((\\S+[\\b\\s]?)' + search + '([\\b\\s]?\\S+))', 'i'),
      matches = data.match(re);
      while (matches) {
        try {
            var words = data.match(re)[0].split(/\s+/);
        }
        catch { wait(false); break; }
        link = words.join(' ');
        data = data.replace(link, '');
        link = link.replace('src="', '');
        link = link.replace('"', '');
        link = link.replace('thumb_', '');
        link = 'https://www.jehanpakistan.com'+link;
        $('.box').append('<img src="'+link+'">');
      } 
      }
  });
}

function newspaper(s, v) {
  modifyPaper(true); 
	var imgs = "";
	var images = res.newspapers[s].cities[v].images;
	for (var i = 0; i < images.length; i++) {
		if (i == 0) {
			imgs += `<div class="img"><img src="${images[i]}" onerror="notAvail()"></div>`;
		} else {
			imgs += `<div class="img"><img src="${images[i]}" onerror="remove(this)"></div>`;
		}

	}
	imgs += '';
	$(".box").html(imgs);
	wait(true);
	var mainImg = new Image();
	mainImg.src = images[0];
	mainImg.onload = function() {
		wait(false);
	}
}

function replace(cn) {
  cn = cn.replaceAll("Jehan e Pakistan", "جہان پاکستان")
  cn = cn.replaceAll("Dunya", "روزنامہ دنیا");
	cn = cn.replaceAll("Mashriq Magazine", " مشرق میگزین")
	cn = cn.replaceAll("92 Magazine", "92 میگزین ");
	cn = cn.replaceAll("Nawaiwaqt", "نوائے وقت")
	cn = cn.replaceAll("Pakistan", "روزنامہ پاکستان ");
	cn = cn.replaceAll("Gawadar", "گوادر");
	cn = cn.replaceAll("Lahore", "لاہور");
	cn = cn.replaceAll("Peshawar", "پشاور");
	cn = cn.replaceAll("Islamabad", " اسلام آباد");
	cn = cn.replaceAll("Quetta", "کوئٹہ");
	cn = cn.replaceAll("Rawalpindi", "راولپنڈی");
	cn = cn.replaceAll("Multan", "ملتان");
	cn = cn.replaceAll("Karachi", "کراچی");
	cn = cn.replaceAll("Faisalabad", "فیصل آباد");
	cn = cn.replaceAll("Gujranwala", "گوجرانوالہ");
	cn = cn.replaceAll("Sukkur", "سکھر");
	cn = cn.replaceAll("Magazine", "میگزین");
	cn = cn.replaceAll("Raheem Yar Khan", "رحیم یار خان");
	cn = cn.replaceAll("Sargodha", "سرگودھا");
	cn = cn.replaceAll("London", "لندن");
	cn = cn.replaceAll("Kashmir", "کشمیر");
	cn = cn.replaceAll("AJK", "کشمیر");
	cn = cn.replaceAll("Hyderabad", "حیدرآباد");
	cn = cn.replaceAll("Express", "روزنامہ ایکسپریس");
	cn = cn.replaceAll("92 Newspaper", "روزنامہ 92");
	cn = cn.replaceAll("Naibaat", "روزنامہ نئی بات");
	cn = cn.replaceAll("ISLAM", "روزنامہ اسلام");
	cn = cn.replaceAll("Jang", "روزنامہ جنگ");
	cn = cn.replaceAll("Mashriq", "روزنامہ مشرق");
	cn = cn.replaceAll("AlAkhbar", "روزنامہ الاخبار");
	cn = cn.replaceAll("Jasarat", "روزنامہ جسارت");
	cn = cn.replaceAll("Jinnah", "روزنامہ جناح");
	cn = cn.replaceAll("Ummat", "روزنامہ امت");
	cn = cn.replaceAll("Juraat", "روزنامہ جرات");

	return cn;
}

function goBack() {
	if (back == 2) {
		$('#box').html('<div class="box"></div');
		$(".box").css("display", "grid");
		$(".box").html(cities);
		back = 1;
		isLoading = false;
		modifyPaper(false);
	} else if (back == 1) {
		$(".box").html(menu);
		back = 0;
		$("#back").css("display", "none");

	}
	$("#msgbox").hide();
	$("#box").hide();
	$("#box").fadeIn(200);
	buttonColor();
}



function notAvail() {
	$("#box").hide();
	$("#msg").html("یہ اخبار فلحال دستیاب نہیں ہے");
	$("#msgbox").fadeIn(1000);
}

function dlmode() {
	if (dl == "dark") {
		$("#dlicon").html("dark_mode");
		$("body").css("background-color", "white");
		$("#title").css("background-color", "royalblue");
		$("#credits").css("background-color", "royalblue");
		$(".box button").css("background-color", "royalblue");
		$("#msgbox").css("color", "RoyalBlue");
		dl = "light";
		localStorage.setItem("dlmode", "light");
		$("img").css("filter", "invert(0%)");
	} else {
		$("body").css("background-color", "#373737");
		$("#title").css("background-color", "#00468b");
		$("#credits").css("background-color", "#00468b");
		$(".box button").css("background-color", "#00468b");
		$("#dlicon").html("light_mode");
		$("#msgbox").css("color", "white");
		dl = "dark";
		localStorage.setItem("dlmode", "dark");
	}
}

function remove(image) {
	$(image).parent().remove();
}

function buttonColor() {
	if (dl == "dark") {
		$(".box button").css("background-color", "#00468b");
	} else {
		$(".box button").css("background-color", "RoyalBlue");
		$("img").css("filter", "invert(0%)");
	}
}

function pdf() {
  window.print();
}

function modifyPaper(paper) {
  if (paper) {
    //$('#title').hide();
    //$('#credits').hide();
    //$('body').css('display', 'block');
    $('.box').html('');
    $('.box').css('display', 'block');
    back = 2;
  }
  else {
    //$('#title').show();
    //$('#credits').show();
    //$('body').css('display', 'flex');
    $('.box').css('display', 'grid');
    $('.box').html(cities);
  }
}

function wait(waiting) {
  if(waiting) {
    $("#box").hide();
		$("#msg").html("تھوڑی دیر انتظار کریں");
		$("#msgbox").fadeIn(500);
  }
  else {
    $("#box").fadeIn(600);
		$("#msgbox").hide();
  }
}
window.onhashchange = function() {
 let url = window.location.href;
 var np = url.includes('newspaper');
 var cit = url.includes('cities');
 if (back==2 && !np) {
   goBack();
 }
 else if (back==1 && !cit)
  goBack();
}
