window.onload=(()=>{$("body").html('<br><select onchange="getBill(this.value)" style="font-size: 30px"></select><br><br><div id="main">\t</div>'),$("select").html('<option value="0">Select a Bill</option><option value="03268110184802">03268110184802</option><option value="03268110184812">03268110184812</option> '),getBill(0)}),getBill=(e=>{0!=e?($("#main").html('<h1 style="margin-top:200px;">Loading... </h1>'),$.ajax({url:"https://api.codetabs.com/v1/proxy?quest=pescobill.pk/view-bill/?reference="+e,success:e=>{var l=(new DOMParser).parseFromString(e,"text/html").getElementById("theBill").innerHTML;$("#main").html(l.replace('<a href="/cdn-cgi/l/email-protection" class="__cf_email__"',"<span").replace("[email&nbsp;protected]</a>","ED@</span>").replaceAll('src="/images','src="https://pescobill.pk/images')),$(".noprint").html("")}})):$("#main").html('<h1 style="margin-top:200px;">Select A Bill</h1>')});
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
    console.log("Service Worker Registered!");
  }
  if (!navigator.onLine) {
    Toast("No Internet!","red");
  }
