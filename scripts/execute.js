if(window.location.hostname==='exacoin.co'){
	var myScript = document.createElement("script");
	myScript.type = 'text/javascript';
	myScript.src = chrome.extension.getURL('scripts/autoclick.js');
	//myScript.setAttribute('src','scrips/autoclick.js');
	myScript.setAttribute('onload', 'autoClick()');
	$("body").append(myScript);
}
