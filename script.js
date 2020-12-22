var infected = document.getElementById("infected");
    var recovered = document.getElementById("recovered");
    var deaths = document.getElementById("deaths");
    var severe = document.getElementById("severe");
    var active = document.getElementById("active");
    var newcases = document.getElementById("new");
    var newdeaths = document.getElementById("newdeaths");
    var cases1mil = document.getElementById("cases1mil");
    var tests = document.getElementById("tests");
    var gt = document.getElementById("gt");
    var ga = document.getElementById("ga");
    var gr = document.getElementById("gr");
    var gd = document.getElementById("gd");
    var gnc = document.getElementById("gnc");
    var gnd = document.getElementById("gnd");
    var gcm = document.getElementById("gcm");
    var gdm = document.getElementById("gdm");
    var json;
    var json2;
    onload  = () =>{
    var api = 'https://coronavirus-19-api.herokuapp.com/countries/Pakistan';
    var api2 = 'https://coronavirus-19-api.herokuapp.com/countries/World';
    fetch(api)
    .then(function(response) {
    response.text()
    .then(function(text) {
    json = text;
    done();
    });
    });
    fetch(api2)
    .then(function(response) {
    response.text()
    .then(function(text) {
    json2 = text;
    done2();
    });
    });
    function done() {
    var data = JSON.parse(json);
    infected.innerHTML = data.cases;
    recovered.innerHTML = data.recovered;
    deaths.innerHTML = data.deaths;
    severe.innerHTML = data.critical;
    active.innerHTML = data.active;
    newcases.innerHTML = data.todayCases;
    cases1mil.innerHTML = data.casesPerOneMillion;
    tests.innerHTML = data.totalTests;
    newdeaths.innerHTML = data.todayDeaths;
    }
    function done2() {
    var data2 = JSON.parse(json2);
    gt.innerHTML = data2.cases;
    gd.innerHTML = data2.deaths;
    gr.innerHTML = data2.recovered;
    ga.innerHTML = (data2.cases - data2.recovered - data2.deaths);
   gnc.innerHTML = data2.todayCases;
    gcm.innerHTML = data2.casesPerOneMillion;
    gdm.innerHTML = data2.deathsPerOneMillion;
    gnd.innerHTML = data2.todayDeaths;
    }
    }
    function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function(e) {
    var a, b, i, val = this.value;
    closeAllLists();
    if (!val) { return false;}
    currentFocus = -1;
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);
    for (i = 0; i < arr.length; i++) {
    if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
    b = document.createElement("DIV");
    b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
    b.innerHTML += arr[i].substr(val.length);
    b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
    b.addEventListener("click", function(e) {
    inp.value = this.getElementsByTagName("input")[0].value;
    closeAllLists();
    });
    a.appendChild(b);
    }
    }
    });
    inp.addEventListener("keydown", function(e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
    currentFocus++;
    addActive(x);
    } else if (e.keyCode == 38) { 
    currentFocus--;
    addActive(x);
    } else if (e.keyCode == 13) {
    e.preventDefault();
    if (currentFocus > -1) {
    if (x) x[currentFocus].click();
    }
    }
    });
    function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("autocomplete-active");
    }
    }
    function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
    if (elmnt != x[i] && elmnt != inp) {
    x[i].parentNode.removeChild(x[i]);
    }
    }
    }
    document.addEventListener("click", function (e) {
    closeAllLists(e.target);
    });
    }
    var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Saint Kitts and Nevis","Saint Lucia","St. Vincent Grenadines","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","UK","USA","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
    autocomplete(document.getElementById("countryName"), countries);
    function search() {
    logo.innerHTML ="Covid-19 in "+ countryName.value;
    title.innerHTML = countryName.value+ " stats";
    api = 'https://coronavirus-19-api.herokuapp.com/countries/'+countryName.value;
    fetch(api)
    .then(function(response) {
    response.text()
    .then(function(text) {
    json = text;
    var data = JSON.parse(json);
    infected.innerHTML = data.cases;
    recovered.innerHTML = data.recovered;
    deaths.innerHTML = data.deaths;
    severe.innerHTML = data.critical;
    active.innerHTML = data.active;
    newcases.innerHTML = data.todayCases;
    cases1mil.innerHTML = data.casesPerOneMillion;
    tests.innerHTML = data.totalTests;
    newdeaths.innerHTML = data.todayDeaths;
    });
    });
    }
