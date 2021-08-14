var back=0, menu, cities, res, isLoaded=0;
function getList() {
   $("#back").css("display", "none");
   var boxHeight = (window.innerHeight-120) + "px";
   var savedData = JSON.parse(localStorage.getItem('data'));
  
  if (savedData != undefined ) {
      isLoaded = 1;
      getNewspapers(savedData);
  }
  fetch('https://api.codetabs.com/v1/proxy?quest=sfahad1.000webhostapp.com/php/data.json')
.then(res => res.json())
.then((jsonData) => {
    //Start Code
    res = jsonData;
    localStorage.setItem('data', JSON.stringify(res));
    if (isLoaded == 0) {
        getNewspapers(res);
        
    }
   //End Code
 })
.catch(err => { throw err });
} 

function getNewspapers(data) {
    var getData = data;
  var paperList = getData.newspapers.length;
  menu ="";
 for (var x = 0; x<paperList ;x++) {
 var z = getData.newspapers[x];
 menu+='<button id="'+x+'" onclick="citiesList('+x+')" class="menu">'+z.name+'</button>';
 }
 menu = menu.replace("Express", "ایکسپریس");
 menu = menu.replace("Naibaat", "نئی بات");
 menu = menu.replace("ISLAM", "اسلام");
 menu = menu.replace("Jang", "جنگ");
 menu = menu.replace("Mashriq", "مشرق");
 menu = menu.replace("AlAkhbar", "الاخبار");
 menu = menu.replace("Jasarat", "جسارت");
 menu = menu.replace("Jinnah", "جناح");
 menu = menu.replace("Ummat", "امت");
 menu = menu.replace("Juraat", "جرات");
 $(".box").html(menu);
}
function citiesList(url) {
    cities = "";
    var cList = res.newspapers[url].cities;
    for (var i = 0;i<cList.length;i++) {
      cities += '<button onclick="newspaper('+url+','+i+')">'+cList[i].name+'</button>'
    }
   cities = cities.replace("Lahore", "لاہور");
   cities = cities.replace("Peshawar", "پشاور");
   cities = cities.replace("Islamabad", "اسلام آباد");
   cities = cities.replace("Quetta", "کوئٹہ");
   cities = cities.replace("Rawalpindi", "راولپنڈی");
   cities = cities.replace("Multan", "ملتان");
   cities = cities.replace("Karachi", "کراچی");
   cities = cities.replace("Faisalabad", "فیصل آباد");
   cities = cities.replace("Gujranwala", "گوجرانوالہ");
   cities = cities.replace("Sukkur", "سکھر");
   cities = cities.replace("Raheem Yar Khan", "رحیم یار خان");
   cities = cities.replace("Sargodha", "سرگودھا");
   cities = cities.replace("London", "لندن");
   cities = cities.replace("Kashmir", "کشمیر");
   cities = cities.replace("Hyderabad", "حیدرآباد");
   $(".box").html(cities);
   $("#back").css("display", "inline-block");
   back=1;
 }

function newspaper(s,v) {
    var imgs = "";
    var images = res.newspapers[s].cities[v].images;
    for (var i = 0;i<images.length;i++) {
      imgs += `<img src="${images[i]}" onerror="this.style.display='none'"></br></br>`;
        }
        imgs += '';
   $(".box").css("display", "block");
   $(".box").html(imgs);
   back=2;
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
} 
