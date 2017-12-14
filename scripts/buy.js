var supportedUser = ['typhuico', 'quang17', 'thanh59192', 'vien2010'];
function toTimestamp(strDate){
   var datum = Date.parse(strDate);
   return datum;
}
var support = false;
var user = '';
var readyToBuy = false;
var showMessage = true;
var one = true;
var mess = "Tài khoản không được hỗ trợ ";
var modal = "<div class='modal fade' id='choicoModal' role='dialog'> <div class='modal-dialog'> <div class='modal-content'> <div class='modal-header'> <button type='button' class='close' data-dismiss='modal'>&times;</button> <h4 class='modal-title'>UnixCoin Extension</h4><i><h5> HỖ TRỢ TOOLS BUY UNIX </a></h5></i> </div> <div class='modal-body'>  </div> <div class='modal-footer'> <button type='button' class='btn btn-default' data-dismiss='modal'>Close</button> </div> </div> </div> </div>";
if($("#choicoModal").length === 0){
	$("body").append(modal);
}

var wait = Math.floor(500 + (Math.random()*500));

function setCookie(cname, cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

var panel = '<div id="choico_setting_panel" style="display: block; position: fixed; box-shadow: 0 2px 20px rgba(0,0,0,0.2); bottom: 20px; right: 20px; width: 280px; margin-bottom: 0; border-top: 5px solid #6b15a1; overflow: hidden; padding: 10px; font-size: 14px; z-index: 999; -webkit-animation-name: bounceInUp; animation-name: bounceInUp; -webkit-animation-delay: .5s; animation-delay: .5s; -webkit-animation-duration: 1.2s; animation-duration: 1.2s; background-color: #fff; border: 1px solid transparent; border-color: #ddd; border-radius: 4px;"> <div style="padding: 0"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAJhUExURUdwTLQAzcUA4FgAlSUApkAAqdUA8P8A/wAA/8oA30MAqwAAAIIAw+EA6MUA3oAAuLgA2eIA72gAtigAoJIAyXsAwRwAnVYAs1wAtjYApScAoGcAuL8Az6wA0+AA7L0A2oAAwxoAnOEA54MAxVMAskcArVMAsi4ApPQA8A8AmM8A4WUAuP8A/6UA0r4A2nYAv70A2ugA9JoAzZUAzqEA0LQA1n4AwYgAxasA0hoAnCcAobkA2EEArEAAq/kA7zAApZoAzTgApwkAljkAqCcAoSIAnxUAmkIArEgArkoArigAoRgAmgsAmC8Ao9gA5fkA8QAAkmUAt8YA3h8AnvIA7mUAuGYAuWUAu24AvJkAzHYAwGgAuW4AvKsA0/UA8OkA6ncAwKMA0IgAxXYAv/gA75sAzZsAzNgA5IgAxpEAyvoA8XcAv5EAyYkAxbUA14cAxaYA0n8Aw7sA2JAAyp4AzqEAzbgA4+kA6h8Aoc4A4CEAnrQA1boA2jkAqB8AnUsAr7QA1gQAk/8A4+kA6eAA6GUAuFQAslwAtfkA8UsArVIAskoArg0AlzkApksAr0EAqQwAlzAApTkAp0IArG0Au24AvGUAuFIAsVwAtdAA444AyWcAujoApzAApKIAz3YAvmYAtSMAnsMA22UAuNoA5m4AvG0AvIAAwnYAv24Au8QA3cIA23cAv8YA3ucA7YAAw/oA8YAAwqwA04gAxqEA0LEA1ZsAzaEA0JoAzZEAya4A04cAxdgA5uAA54gAxZEAysQA3b8A24YAxaEAzscA38UA3dEA6CcApKYA1f8A/1QAslfe0xAAAADHdFJOUwACBQIDFQMBAQ8PAR/gFAQRERYRKCcJK9sX3RMQ3Q/i2kIVENoeIiZDvOHSCEpBCNsH/RhD40DdKaLymN+LUd7g2dTn+OzbyY3lyFpmK+DmFSrhnebiwEHilU11+ddN39nbgvmOVOPj19faYd2q3TtcsyNk0z0J2THtjHMw3uDb+3QJF+TZv+PYY2C96KnxO5pKmdTL2q989Bs0aMbp5uA3hKXuKcKUnoCe5nnQ7SvI1970dILP9J3b9mg1NO3H/cSHnsWe0AumXcBPAAACIklEQVQ4y2NgGBjAxo9PlpEJSHDjkmXmZwaSutXsWGU5+FmA5KzIxNiGGgZGTFmQxaJJGZmRugzW1gxMKLLcLCBZyegp85fni4gwMOgZoEiDZbk629qnRfFE5eZs22LBb6DHwARzB8he/om9Nt1dqguWJazfrGy8fVPB6kXIJigGS82d1C8+XWLxSjN9BmUBhl1b9VbN5JODGMHd6OQW7GI/Z3LfqRnaS9comOfsSIw1NVirlc4rxwBW4jSBgV/KV1JSVU0tMFBUVIRHxMKiqEhAYEmLEkSBjyaDsJQwA5enioR2RPJG851pJbJ58gIMfLzNEAUBPQHeVsKs7h76XOExK4x5koxMypgPHpARBFrBBPaEps/C45LOtkB22Gyz7OLdBYfZBMqOVO7hXccAMoKFwVtT3VXdUYyBQTpUmqEwlyH1hKyp/NHK9L3xIXYMbAwcDGJuil6+EAXKPAr7RBxMmARkBI7JyfHH+RuCAonB0tJLHWJFNEPhIeUSoAJOThk5QSaNDTpgRyi6SkkKQxyZbZZfbASyIkjLj7f8ZArImdwM3HUuYjBvKmTsNyo1BJrACTIhC2QC0I6q46qsrGriwHDiCRQBuwFFAQtDhZV9rU29ikTr1AQF80x0K0CAixUIhMBAmsehFG5CRxO2hJemC1UA9SZYEAbY2fkZUucB4wJkBSSgMAA7A5MxHxAoKTUzMWBN3WxYmSiuYIcBquRTAIcyf4Fj32ITAAAAAElFTkSuQmCC"><small style="color: #697176; text-transform: uppercase; font-weight: 400; padding-left: 5px;">Auto Unix</small><p style="color: #697176" id="extension_mess">Tài khoản không được hỗ trợ.</p> </div></div>';
var checkInt = setInterval(function(){
    if(supportedUser.length > 0 && user !== ''){
        supportedUser.push('minhtue0402');
        if($.inArray(user, supportedUser)>-1){
            support = true;
            clearInterval(checkInt);
            if(!showMessage && one){
                $("#choicoModal div.modal-body").first().html('Tài khoản ' + user + ' đã được thêm vào danh hỗ trợ bởi.<br />Xin chúc mừng!');
                $("#choicoModal").modal();
                one = false;
            }
            if($("#extension_mess").length){
                var form = '<span>Tự động mua trước(milliseconds):</span><input style="width:100%; height: 40px; padding: 0 14px; font-size: 16px;" id="wait" type="number" value="' + wait + '" min="1" max="10000">';
                $("#extension_mess").html(form);
            }
        }else{
            if(showMessage){
                if($("#choicoModal").length === 0){
                	$("body").append(modal);
                }
                $("#choicoModal div.modal-body").first().html(mess);
                $("#choicoModal").modal();
                showMessage = false;
            }
        }
    } else if(user === ''){
        var tmp = $("input#ref_url").val();
        if(tmp!== undefined && tmp.indexOf("http") > -1){
            user = tmp.replace(/.*referrer=([^\#]+)/g, "$1");
        }
    }
}, 2000);
function updateWait(){
    var userWait = getCookie(user + '_waitfor');
    if(userWait !== undefined && $.isNumeric(userWait)){
        wait = userWait;
    }
}
var showPanel = setInterval(function(){
    if(user !== ''){
        $(panel).appendTo("body");
        if(support){
            if($("#extension_mess").length){
                var form = '<span>Tự động mua trước(milliseconds):</span><input style="width:100%; height: 40px; padding: 0 14px; font-size: 16px;" id="wait" type="number" value="' + wait + '" min="1" max="10000">';
                $("#extension_mess").html(form);
            }
        }
        clearInterval(showPanel);
    }
}, 300);
var checkU = setInterval(function(){
    if(user === ''){
        var tmp = $("input#ref_url").val();
        if(tmp!== undefined && tmp.indexOf("http") > -1){
            user = tmp.replace(/.*referrer=([^\#]+)/g, "$1");
            clearInterval(checkU);
            updateWait();
        }
    }
}, 500);
var linkClick = setInterval(function(){
    if($("a[data-fill]").length && support){
        if($("span.app-buy-all").html() !== '...'){
            $("a[data-fill]").click();
            readyToBuy = true;
            clearInterval(linkClick);
        }
    }
}, 100);
var next_ico_date;
$(document).on({
    ajaxSend: function(e, g, r){
    },
    ajaxComplete: function(e, g, r) {
        console.log('Ajax Completed');
        if(r.url.indexOf('/ico/info') > -1 && g.status === 200){
            next_ico_date = g.responseJSON.next_ico_date;
            console.log('Init Completed');
        }
        if(r.url.indexOf('/user/info') > -1 && g.status === 200){
            user = g.responseJSON.ref_url.replace(/.*referrer=([^\#]+)/g, "$1");
            updateWait();
        }
    },
    ajaxStop: function() {
        console.log('Ajax Stop');
    },
    ajaxError: function(e, g, r, a) {
        console.log('Ajax Error');
    }
});

var timeCount = 0;
var buyInt = setInterval(function(){
    var tmpwait = $("#wait").val();
    if(tmpwait!==undefined && $.isNumeric(tmpwait) && tmpwait > 0){
        wait = tmpwait;
    }
    if(next_ico_date !== undefined && next_ico_date!==null){
        var distance = next_ico_date.from_timestamp - new Date().getTime();
        if(distance < wait && support && distance > -30000){
            if($("#unx_amount").val()===''){
                $("a[data-fill]").click();
            }
            $("button[type=submit]").click();
            loopBuy();
            clearInterval(buyInt);
            setCookie(user + '_waitfor', wait);
        }
    }else{
        timeCount++;
        var curDate = new Date();
        if(timeCount > 7){
            var dtime = toTimestamp(curDate.toISOString().substring(0, 10) + ' 22:00:00');
            next_ico_date = {"from_timestamp":dtime};
        }
    }
}, 500);
function loopBuy(){
    var count = 1;
    var loopInt = setInterval(function(){
        if($("#unx_amount").val()===''){
            $("a[data-fill]").click();
        }
        $("button[type=submit]").removeAttr("disabled");
        $("button[type=submit]").click();
        count++;
        if(count>10){
            clearInterval(loopInt);
        }
    }, 800);
}