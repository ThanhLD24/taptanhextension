// var loginDashboard = $("#login_dashboard .btn2 btn_white");
console.log("Đã vào file autoclick");
// function autoClick() {
// 	console.log("Đã vào hàm autoclick");
// 	var dt = new Date();
// 	var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
// 	if(dt.getMinutes() === '24') {
// 		console.log("Đã vào if");
// 		$('.lbOn').click();
// 	}
// }

var autoClick = setInterval(function(){
	console.log("Đã vào hàm autoclick");
	var dt = new Date();
	var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
	console.log($(".btn2.btn_white").attr('href'));
	$(".btn2.btn_white").click();
	if(dt.getMinutes() === 43) {
		console.log("Đã vào if");
		$("#login_dashboard .btn2.btn_white").click();
		clearInterval(autoClick);
	}
}, 1000);