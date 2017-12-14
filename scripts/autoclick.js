// var loginDashboard = $("#login_dashboard .btn2 btn_white");
console.log("Đã vào file autoclick");

// var autoClick = setInterval(function(){
// 	console.log("Đã vào hàm autoclick");
// 	var dt = new Date();
// 	var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
// 	console.log($(".btn2.btn_white").length);
// 	console.log($(".btn2.btn_white").attr('href'));
// 	$(".btn2.btn_white")[0].click();
// 	if(dt.getMinutes() === 43) {
// 		console.log("Đã vào if");
// 		$("#login_dashboard .btn2.btn_white").click();
// 		clearInterval(autoClick);
// 	}
// }, 1000);

// var autoClick = setInterval(function(){
// 	console.log("Đã vào hàm autoclick");
// 	var dt = new Date();
// 	var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
// 	console.log($(".btn2.btn_white").length);
// 	console.log($(".btn2.btn_white").attr('href'));
// 	$(".btn2.btn_white")[0].click();
// 	if(dt.getMinutes() === 43) {
// 		console.log("Đã vào if");
// 		$("#login_dashboard .btn2.btn_white").click();
// 		clearInterval(autoClick);
// 	}
// }, 1000);

var autoClick = setInterval(function(){
	console.log("Đã vào hàm autoclick");
	var dt = new Date();
	var hour = dt.getHours();
	var minute = dt.getMinutes();
	var second = dt.getSeconds();
	// $(".txt-balance").find("button").length
	$(".txt-balance").find("button")[0].click();
	$(".frm-code2fa").find("input").val(localStorage['2fa']);
	if(hour == 23 && minute == 0 && second == 0) {
		if($(".c56.c65.c69.txt-balance")[0] != "0.00000000") {
			$(".txt-balance").find("button")[0].click();
			$(".frm-code2fa").find("input")[0].val(localStorage['2fa']);
		} else {
			$(".txt-balance").find("button")[1].click();
			$(".frm-code2fa").find("input")[1].val(localStorage['2fa']);
		}
		clearInterval(autoClick);
	}
}, 1000);