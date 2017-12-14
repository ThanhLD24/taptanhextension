console.log(window.location.hostname);
if(window.location.hostname==='exacoin.co'){
	var myScript1 = document.createElement("script");
	myScript1.type = 'text/javascript';
	myScript1.src = chrome.extension.getURL('scripts/jquery-3.2.1.js');
	$("body").append(myScript1);

	var myScript = document.createElement("script");
	myScript.type = 'text/javascript';
	myScript.src = chrome.extension.getURL('scripts/autoclick.js');
	//myScript.setAttribute('src','scrips/autoclick.js');
	myScript.setAttribute('onload', 'autoClick()');
	$("body").append(myScript);
}
