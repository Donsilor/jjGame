var img_path=img_path||"/pk10/",zy=zy||{},_kbs=_kbs||0,socket,wsflg=null,ifa_height=ifa_height||650,base64EncodeChars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",base64DecodeChars=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);function base64encode(e){var n,t,i,a,s,o;for(i=e.length,t=0,n="";t<i;){if(a=255&e.charCodeAt(t++),t==i){n+=base64EncodeChars.charAt(a>>2),n+=base64EncodeChars.charAt((3&a)<<4),n+="==";break}if(s=e.charCodeAt(t++),t==i){n+=base64EncodeChars.charAt(a>>2),n+=base64EncodeChars.charAt((3&a)<<4|(240&s)>>4),n+=base64EncodeChars.charAt((15&s)<<2),n+="=";break}o=e.charCodeAt(t++),n+=base64EncodeChars.charAt(a>>2),n+=base64EncodeChars.charAt((3&a)<<4|(240&s)>>4),n+=base64EncodeChars.charAt((15&s)<<2|(192&o)>>6),n+=base64EncodeChars.charAt(63&o)}return n}function base64decode(e){var n,t,i,a,s,o,r;for(o=e.length,s=0,r="";s<o;){do{n=base64DecodeChars[255&e.charCodeAt(s++)]}while(s<o&&-1==n);if(-1==n)break;do{t=base64DecodeChars[255&e.charCodeAt(s++)]}while(s<o&&-1==t);if(-1==t)break;r+=String.fromCharCode(n<<2|(48&t)>>4);do{if(61==(i=255&e.charCodeAt(s++)))return r;i=base64DecodeChars[i]}while(s<o&&-1==i);if(-1==i)break;r+=String.fromCharCode((15&t)<<4|(60&i)>>2);do{if(61==(a=255&e.charCodeAt(s++)))return r;a=base64DecodeChars[a]}while(s<o&&-1==a);if(-1==a)break;r+=String.fromCharCode((3&i)<<6|a)}return r}function utf16to8(e){var n,t,i,a;for(n="",i=e.length,t=0;t<i;t++)(a=e.charCodeAt(t))>=1&&a<=127?n+=e.charAt(t):a>2047?(n+=String.fromCharCode(224|a>>12&15),n+=String.fromCharCode(128|a>>6&63),n+=String.fromCharCode(128|a>>0&63)):(n+=String.fromCharCode(192|a>>6&31),n+=String.fromCharCode(128|a>>0&63));return n}function utf8to16(e){var n,t,i,a,s,o;for(n="",i=e.length,t=0;t<i;)switch((a=e.charCodeAt(t++))>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:n+=e.charAt(t-1);break;case 12:case 13:s=e.charCodeAt(t++),n+=String.fromCharCode((31&a)<<6|63&s);break;case 14:s=e.charCodeAt(t++),o=e.charCodeAt(t++),n+=String.fromCharCode((15&a)<<12|(63&s)<<6|(63&o)<<0)}return n}$.fn.longPress=function(e){for(var n=void 0,t=this,i=0;i<t.length;i++)t[i].addEventListener("touchstart",function(t){n=setTimeout(e,800)},!1),t[i].addEventListener("touchend",function(e){clearTimeout(n)},!1)},function(win,zy){win.lottery={},win.wslnum=0,win.onerror=function(e,n,t,i,a){"Script error."!=e&&setTimeout(function(){var s={game:win.xstype,msg:e,file:n,line:t,col:i,err:a};$.post("/ajax/err",s)},200)},zy.is_weixin=function(){return"micromessenger"==navigator.userAgent.toLowerCase().match(/MicroMessenger/i)},zy.is_mobile=function(){return navigator.userAgent.match(/android|iphone|ipad|ipod|blackberry|meego|symbianos|windowsphone|ucbrowser/i)},zy.is_app=function(){return navigator.userAgent.match(/ck 2.0/i)},zy.is_ios=function(){return navigator.userAgent.match(/iphone|ipod|ios|ipad/i)},zy.is_android=function(){return navigator.userAgent.match(/android/i)},zy.appinit=function(e){if(zy.is_app()){var n=new YDBOBJ;n.SetHeadBar(e.headbar||0),n.SetDragRefresh(e.refresh||0),n.SetMoreButton(e.more||0)}},zy.tips=function(e,n){var t=$(".zytips");(t=0==t.length?$('<div class="zytips"></div>').appendTo("body"):t).html("<div>"+e+"</div>"),$(".zytips").fadeOut(200),t.fadeIn(),n=n||2;window.setTimeout(function(){$(".zytips").fadeOut(200)},1e3*n)},zy.msg=function(e,n){return layer.open({content:e,skin:"msg",time:n||2})},zy.alert=function(e,n,t){return layer.open({content:e,btn:n||"鎴戠煡閬撲簡"})},zy.notice=function(e,n){return layer.open({title:[n||"绯荤粺鎻愮ず","background-color: #8DCE16; color:#fff;"],content:e})},zy.setcc=function(e,n,t){var i=t||30,a=new Date;a.setTime(a.getTime()+24*i*60*60*1e3),document.cookie=e+"="+escape(n)+";expires="+a.toGMTString()},zy.getcc=function(e){var n,t=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(n=document.cookie.match(t))?unescape(n[2]):null},zy.delcc=function(e){var n=new Date;n.setTime(n.getTime()-1);var t=zy.getcc(e);null!=t&&(document.cookie=e+"="+t+";expires="+n.toGMTString())},zy.color_mode=function(e){var n=zy.getcc("color_mode")?zy.getcc("color_mode"):"day";e&&(n="day"==n?"night":"day",zy.setcc("color_mode",n,1)),"night"==n?($("body").addClass("night"),$("body li.mode span").html("鏃ラ棿")):($("body").removeClass("night"),$("body li.mode span").html("澶滈棿"))},zy.sbind=function(){if("1"!=zy.getcc("sbingcc")&&!udata.username)return zy.setcc("sbingcc",1,1),layer.open({content:"鎮ㄦ湭璁剧疆鐧婚檰甯愭埛,璇峰厛璁剧疆锛�<br>璁剧疆鍚庡綋寰俊鎵爜鏃犳硶鎵撳紑鏃讹紝<br>鎮ㄥ彲浣跨敤APP,鎵嬫満娴忚鍣ㄧ櫥闄嗭紝<br>涓轰笉褰卞搷鎮ㄧ殑浣跨敤,璇峰強鏃惰缃�!",btn:["鐜板湪璁剧疆","浠ュ悗鍐嶈"],yes:function(e){layer.close(e),location.href="/member/account"}})},zy.qrcode=function(e){var n=$(e).data(),t={quiet:2,width:n.width||200,height:n.width||200,text:n.text,foreground:n.color||"#333333"};$(e).html("").qrcode(t);var i=$(e).find("canvas").get(0);0==$(0).next("img").length&&$(e).after("<img>"),$(e).hide().next("img").attr("src",i.toDataURL("image/jpg"))},zy.base64encode=function(e){return base64encode(utf16to8(e))},zy.base64decode=function(e){return utf8to16(base64decode(e))},zy.in_array=function(e,n){for(s=0;s<n.length;s++)if(tVal=n[s].toString(),tVal==e)return!0;return!1},zy.array_flip=function(e){var n,t={};for(n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t},zy.array_value=function(e){var n=[],t=0;return $.each(e,function(e,i){n[t++]=i}),n},win.document.oncontextmenu=function(e){try{event.preventDefault()}catch(e){}},win.onhashchange=function(){-1==location.href.indexOf("#menu")&&$("#ss_menu").hide()},zy.kb0init=function(){var e='<input placeholder="'+win.lang.tips+'" type="text" id=\'Message\'/>';e+='<img src="'+win.cdn+'/Public/images/kb.png" class="keybord">',e+='<span class="txtbet">'+win.lang.quick+'</span><span class="sendemaill">鍙� 閫�</span>',$(".user_messages").find(".quzhong-sub").remove(),$(".keybord_box").html(e),$(".getkeybord").hide()},zy.kb0end=function(){$(win.document).on("click","i.kclose",function(){$(".keybord").addClass("gray"),$(".keybord_div").hide(),$("#Message").attr("readonly",1!=udata.talk)}),$(".keybord").on("touchstart",function(){$(this).toggleClass("gray"),$(this).hasClass("gray")?($(".keybord_div").hide(),$("#Message").attr("readonly",1!=udata.talk)):($(".txtbet").removeClass("on"),$(".txtbet_div").hide(),$(".keybord_div").show(),$("#Message").attr("readonly",!0))}),$(".txtbet").on("touchstart",function(){$(this).toggleClass("on"),zy.kb0txtch()}),$("i.closebt").click(function(){$(".txtbet").toggleClass("on"),zy.kb0txtch()}),$(".keybord_div em").on("touchstart",function(){if($(this).addClass("on").siblings().removeClass("on"),!$(this).hasClass("c2")){var e=$("#Message").val(),n=$(this).html();return"娓�"==n?$("#Message").val(""):"鈫�"==n||"鍒�"==n?$("#Message").val(e.substr(0,e.length-1)):"脳"==n?($(".keybord").addClass("gray"),$(".keybord_div").hide(),$("#Message").attr("readonly",!1)):zy.in_array(n,[1,2,3,4,5,6,7,8,9,0])||e!=n?void((zy.in_array(n,[1,2,3,4,5,6,7,8,9,0,".","/","-","榧�","鐗�","铏�","鍏�","榫�","铔�","椹�","缇�","鐚�","楦�","鐙�","鐚�"])||-1==e.indexOf(n))&&$("#Message").val(e+n)):$("#Message").val("")}}),$(".keybord_div em").on("touchend",function(){$(this).removeClass("on")}),$(document).on("touchstart","#Message",function(){!$(this).attr("readonly")||$(".keybord_div").is(":visible")||$(".txtbet").hasClass("on")||($(".keybord_div").show(),$(".keybord").removeClass("gray"))}),1!=udata.talk&&$("#Message").attr("readonly",!0)},zy.kb0txtch=function(){var e=$(".txtbet");$(e).hasClass("on")?($(".keybord_div").hide(),$(".keybord").addClass("gray"),$(".txtbet_div").show()):($(".txtbet").removeClass("on"),$(".txtbet_div").hide())},zy.kb1init=function(){udata.cfg="";var e='<div class="foot-item"><div class="foot-box">';e+='<i class="icon-keybord off"><img src="'+win.cdn+'/Public/images/keybord1.png"/></i>',e+='<input type="text" placeholder="'+(win.lang.tips||"杞﹂亾/杞﹀彿/閲戦")+'" id=\'Message\' class="text" />',e+='<div class="hand-btn-group"><span class=squikc>'+win.lang.quick+'</span><span class="kbsend">鍙戦€�</span></div></div>',e+='<div class="foot-keybord" style="display: none;">',e+='<div class="playtype"><div class="swiper-container"><div class="swiper-wrapper kb1top"></div>',e+='<div class="swiper-pagination" style="display: none;"></div></div><i class="iconfont closer">&#xe7fa;</i></div>',e+='<div class="play-b"><div class="b-left swiper-container-l"><ul class="swiper-wrapper kb1left"></ul><div class="swiper-scrollbar"></div></div>',e+='<div class="b-center kb1num">',e+="<span><em>1</em></span><span><em>2</em></span><span><em>3</em></span>",e+="<span><em>4</em></span><span><em>5</em></span><span><em>6</em></span>",e+="<span><em>7</em></span><span><em>8</em></span><span><em>9</em></span>",e+='<span><em class="other">/</em></span>',e+="<span><em>0</em></span>",e+='<span><em class="other">.</em></span></div>',e+='<div class="b-right kb1com"><span><em data-val="clear"><i class="iconfont">&#xe6ca;</i></em></span>',e+="<span><em>鏌�</em></span>",e+="<span><em>鍥�</em></span>",e+='<span class="kbsend"><em>'+win.lang.send+"</em></span></div>",e+="</div></div>",$("div.foot-item").remove(),$("body").append(e),$(".rightdiv").css("margin-top","2%")},zy.kb1end=function(){new Swiper(".swiper-container",{pagination:".swiper-pagination",slidesPerView:"auto",spaceBetween:0,observer:!0,observeParents:!0}),new Swiper(".swiper-container-l",{slidesPerView:"auto",paginationClickable:!0,spaceBetween:0,direction:"vertical",observer:!0,observeParents:!0});var n,t=!0,i=[];for(n in kbs1="object"==typeof win.lang.keytop?win.lang.keytop:win.lang.keytop.split(""),kbs2="object"==typeof win.lang.keyleft?win.lang.keyleft:win.lang.keyleft.split(""),kbs1)i.push(kbs1[n]);for(n in kbs2)i.push(kbs2[n]);i.push("鏌�"),i.push("鍥�"),kbs1.push("澶у崟"),kbs1.push("澶у弻"),kbs1.push("灏忓崟"),kbs1.push("灏忓弻"),kbs1.push("鍗曞ぇ"),kbs1.push("鍙屽ぇ"),kbs1.push("鍗曞皬"),kbs1.push("鍙屽皬"),$(".foot-item span,.foot-item .swiper-wrapper>div,.foot-item .swiper-wrapper>li").on("touchstart",function(){if($(this).parent().hasClass("kb1num"))t=!0,a($(this),!0);else{var e=$(this);t=!1,!e.hasClass("skip")&&e.addClass("on").siblings().not(".skip").removeClass("on")}}).on("touchend",function(){a($(this),!1)}).on("touchmove",function(){t=!0}),$(".getkeybord,i.closebt").click(function(){$(".infuse").slideUp(200,function(){$(".txtbet_div").hide(),$(".foot-item").slideDown(200)})}),$(".icon-keybord").click(function(){$(this).toggleClass("off"),$(this).hasClass("off")?($(this).next().attr("readonly",1!=udata.talk),$(".foot-keybord").slideUp(300)):($(this).next().attr("readonly",!0),$(".foot-keybord").slideDown(300))}),$(".playtype .closer").click(function(){$(".icon-keybord").addClass("off").next().attr("readonly",1!=udata.talk),$(".foot-keybord").slideToggle(300)});var a=function(e,a){var s=$(e),o=s.text(),r=$("#Message").val();if(!$(e).hasClass("skip")&&$(e).removeClass("on"),(!t||a)&&!s.hasClass("skip")){if(o==win.lang.send)return $("html, body").animate({scrollTop:$(".leftdiv").offset().top},200);if(o==win.lang.quick)return $(".foot-item").slideUp(200,function(){$(".txtbet_div").show(),$(".infuse").slideDown(200),zy.go2top($(".leftdiv"))});if("顩�"==o)return $("#Message").val(r.substr(0,r.length-1));var c=zy.in_array(o,[1,2,3,4,5,6,7,8,9,0]),d=zy.in_array(o,[1,2,3,4,5,6,7,8,9,0,".","/","-"]);if(zy.in_array(o,["榧�","鐗�","铏�","鍏�","榫�","铔�","椹�","缇�","鐚�","楦�","鐙�","鐚�"]))return $("#Message").val(r+o);if(!c&&r==o)return $("#Message").val("");if(d||-1==r.indexOf(o)){if(!d&&zy.in_array(r,i)&&zy.in_array(r,["澶�","灏�"])&&zy.in_array(o,["鍗�",["鍙�"]]))return $("#Message").val(r+o);if(r&&!zy.in_array(o,["-"])&&zy.in_array(o,kbs1))for(n in kbs1)if(r.indexOf(kbs1[n])>-1&&(!zy.in_array(kbs1[n],["澶�","灏�","鍗�","鍙�","鍗�","鐧�","鍗�","涓�"])||zy.in_array(kbs1[n],["澶�","灏�"])&&zy.in_array(o,["澶�","灏�"])||zy.in_array(kbs1[n],["鍗�","鍙�"])&&zy.in_array(o,["鍗�","鍙�"])))return $("#Message").val(r.replace(kbs1[n],o));if(r&&!zy.in_array(o,["-"])&&zy.in_array(o,kbs2))for(n in kbs2)if(r.indexOf(kbs2[n])>-1)return $("#Message").val(r.replace(kbs2[n],o));$("#Message").val(r+o)}}};$(".kb1com span:first").longPress(function(){$("#Message").val(""),e.preventDefault()}),$(document).on("touchstart","#Message",function(){$(this).attr("readonly")&&!$(".foot-keybord").is(":visible")&&($(".foot-keybord").slideDown(300),$(".icon-keybord").removeClass("off"))}),1!=udata.talk&&$("#Message").attr("readonly",!0),zy.kb1show2()},zy.show_kb2=function(){zy.kb1init();for(var e="object"==typeof win.lang.keytop?win.lang.keytop:win.lang.keytop.split(""),n="",t=0;t<e.length;t++)win.lottery[win.xstype].chk_ks(e[t])&&(n+='<div class="swiper-slide">'+e[t]+"</div>");$(".kb1top").html(n),e="object"==typeof win.lang.keyleft?win.lang.keyleft:win.lang.keyleft.split(""),n="";for(t=0;t<e.length;t++)win.lottery[win.xstype].chk_ks(e[t])&&("鍘婚噸"==e[t]?n+='<li class="swiper-slide skip quzhong_key" data-cfg=1>'+e[t]+"</li>":n+='<li class="swiper-slide">'+e[t]+"</li>");$(".kb1left").html(n),zy.kb1end(),$("#xs-main .rbox").hide(),$("#xs-main .touzu").show(),zy.go2top(0),zy.kb1show(1)},zy.kb1show=function(e){return 1!=udata.kt||(0==e?$(".foot-item").slideUp(200):0!=$("#txtbet_div").length&&!$("#txtbet_div").is(":hidden")||$(".foot-item").slideDown(200))},zy.kb1show2=function(){if(1==_kbs){var e=$(".icon-keybord");$(e).hasClass("off")&&$(e).removeClass("off"),$(e).next().attr("readonly",1!=udata.talk),$(".foot-keybord").slideDown(300)}},zy.go2top=function(e){$("html, body").animate({scrollTop:"number"==typeof e?e:$(e).offset().top},300)},zy.get_now=function(){return zy.datefmt("hh:mm:ss",new Date)},zy.datefmt=function(e,n){var t={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};for(var i in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length))),t)new RegExp("("+i+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[i]:("00"+t[i]).substr((""+t[i]).length)));return e},zy.get_url=function(e,n){url=window.location.pathname;var i=",isappinstalled,from,time,"+(e?e+",":""),a=window.location.search,s="";if(n>0&&(s="puid="+n),a){a=a.substr(1).split("&");for(var o=0;o<a.length;o++)t=a[o].split("="),-1==i.indexOf(","+t[0].toLowerCase()+",")&&t[1]&&(s+=(""==s?"":"&")+t[0]+"="+t[1])}return""!=(s+=(""==s?"":"&")+"time="+(new Date).getTime())&&(s="?"+s),url+s},zy.A=function(e,n){if(!(n>e.length)){var t=[];return function(e,n,i){if(i.length==n)t.push(i);else for(var a=0,s=e.length;a<s;a++){var o=[].concat(e),r=o.splice(a,1);arguments.callee(o,n,[].concat(i,r))}}(e,n,[]),t}},zy.C=function(e,n){var t=[];return function(e,n,i){var a=e.length;if(!(n>a))if(n==a)t.push([].concat(i,e));else for(var s=0;s<a;s++){var o=[].concat(i);if(o.push(e[s]),1==n)t.push(o);else{var r=[].concat(e);r.splice(0,s+1),arguments.callee(r,n-1,o)}}}(e,n,[]),t},zy.kefumsg=function(e,n,t,i){$(".kfcs").prepend("<div class=saidright><img src="+e+" /><div class=tousaidl><span class=tousaid2 >"+i+"</span>&nbsp;&nbsp;<span class=tousaid1>"+n+"</span></div><div class=ts> <b></b><span class=neirongsaidl>"+t+"</span></div></div>")},zy.kefume=function(e,n,t,i){$(".kfcs").prepend("<div class=saidleft><img src="+e+" /><div class=tousaid><span class=tousaid1>"+n+"</span>&nbsp;&nbsp;<span class=tousaid2>"+i+"</span></div><div class=tsf><b></b><span class=neirongsaid>"+t+"</span></div></div>")},zy.load_log=function(){!$(".tzlog").is(":hidden")&&$.get("/index/mylog/lottery/"+win.xstype).then(function(e){$(".tzlog").html(e)})},zy.load_czhelp=function(e){var n=$("#xs-main .czhelp");return 1==n.data("load")||$.get("index/help/data/czhelp/lottery/"+win.xstype).then(function(e){n.html(zy.base64decode(e)),n.data("load",1)})},zy.load_kefu=function(){1!=$(".skefu").data("load")&&$.get("/index/kefu").then(function(e){$(".kfcs").append(e),$(".skefu").data("load",1)})},zy.addxitong=function(e,n,t,i){$(".rightdiv").prepend("<div class=saidright><img src="+e+" /><div class=tousaidl><span class=tousaid2 >"+i+"</span>&nbsp;&nbsp;<span class=tousaid1>"+n+"</span></div><div class=ts> <b></b><span class=neirongsaidl>"+t+"</span></div></div>")},zy.addxitong1=function(e,n,t,i){$(".rightdiv").prepend("<div class=saidright><img src="+e+" /><div class=tousaidl><span class=tousaid2 >"+i+"</span>&nbsp;&nbsp;<span class=tousaid1>"+n+"</span></div><div class=ts> <b style='border-color:transparent  transparent transparent #FFBBBB;'></b><span class=neirongsaidl style='background-color: #FFBBBB;' >"+t+"</span></div></div>")},zy.addxitong3=function(e,n,t,i){$(".rightdiv").prepend("<div class=saidright><img  src="+e+" /><div class=tousaidl><span class=tousaid2 >"+i+"</span>&nbsp;&nbsp;<span class=tousaid1>"+n+"</span></div><div class='ts' style='min-width: 60%;'> <b style='border-color:transparent  transparent transparent #98E165;'></b><span class=neirongsaidl style='background-color:#98E165;max-width: 100%'>"+t+"</span></div></div>")},zy.addtouzhu=function(e,n,t,i){$(".rightdiv").prepend("<div class=saidleft><img  src="+e+" /><div class=tousaid><span class=tousaid1>"+n+"</span>&nbsp;&nbsp;<span class=tousaid2>"+i+"</span></div><div class=tsf><b></b><span class=neirongsaid>"+t+"</span></div></div>")},zy.show_loading=function(e,n){var t=n||"鍔犺浇涓€﹁绋嶅€欙紒",i=$(".xinwin-loading");i.length||$('<div class="xinwin-loading" style="display:none"><div class="xinwin-loadbg"><div class="xinwin-loader"><div class="dot"><div class="first"></div></div><div class="dot"></div><div class="dot"></div><div class="dot"></div></div><p>'+t+"</p></div></div>").appendTo("body"),i.find("p").html(t),1==e?i.show():i.hide()},zy.init_body=function(){0==$("body #xs-top").length&&($.ajax({type:"post",url:"/ajax/init",async:!1,success:function(e){return e=$.parseJSON(zy.base64decode(e)),$.each(e.info,function(e,n){$(e).html(n)}),zy.init_my_menu()},error:function(){return zy.notice("缃戠粶杩炴帴澶辫触"),!1}}),$('<i class="totop iconfont">&#xe6fb;</i>').appendTo($("body")),$(".mlogo").attr("src",udata.headimg),$(document).on("touchstart","i.totop",function(){zy.go2top(0),$(this).hide()}),$(window).scroll(function(){$(window).scrollTop()>.3*$(window).height()?$("i.totop").fadeIn():$("i.totop").fadeOut()}),$(document).on("click","i.close",function(){var e=$(this).data();e.id?$(e.id).hide():$(this).parents().hide()}),$("img").on("error",function(){$(this).unbind("error").attr("src","/Public/images/logo.jpg")}),$(document).on("click",".confirm-pour",function(){$(this).hasClass("on")&&($("#touzhu").addClass("on"),location.href="#confirm")}),$(document).on("click",".pour-info a.close,.pour-info a.cancel",function(){$("#touzhu").removeClass("on"),location.href="#main"}),$(document).on("touchstart",".keybord_div em.c2,.kbsend",function(){zy.send_msg()}),$(document).on("click",".sendemaill",function(){zy.send_msg()})),$(".changlong,.neirong").hide().find("#changlong1>talbe,#changlong2>talbe").html(""),$("#lname").html(win.xsico||win.xsname),$(".mlogo").attr("src",win.udata.headimg),$("#ifarms").show().attr({src:win.xsuri}),setTimeout(function(){$("#ifarms").animate({height:win.xsheight}),zy.show_loading(0)},300),zy.init_lottery()},zy.init_lottery=function(d){if($("#ftlogs").remove(),$(".cl").show(),!win.lottery[win.xstype]&&!d){var a=win.udata;return a.act="xsinit",a.type=win.xstype,win.socket.send(JSON.stringify(a))}win.lottery[win.xstype]=win.lottery[win.xstype]||{},$.each(d,function(i,o){switch(i){case"fun":$.each(o,function(j,p){eval(zy.base64decode(p))});break;default:win.lottery[win.xstype][i]=win.lottery[win.xstype][i]||{},$.each(o,function(e,n){win.lottery[win.xstype][i][e]=zy.base64decode(n)})}}),win.lottery[win.xstype].show_kb(),zy.show_loading(0),d||zy.load_history()},zy.zoom=function(){$("#tables").unbind("click").click(function(){var e=zy.getcc(win.xstype+"_zoom")||1;zy.setcc(win.xstype+"_zoom",1==e?0:1),zy.show_zoom()}),zy.show_zoom()},zy.unzoom=function(){$("#tables").unbind("click"),zy.setcc(win.xstype+"_zoom",1),zy.show_zoom()},zy.show_zoom=function(){return 0==(zy.getcc(win.xstype+"_zoom")||1)?$("#tables tr").find("td:last,th:last").hide():$("#tables tr").find("td:last,th:last").show()},zy.io_init=function(e){$(".game-hd .menu").find("li").click(function(){$(this).hasClass("more-game")?($(this).toggleClass("on"),$(this).hasClass("on")?$(".sub-menu").show():$(".sub-menu").hide()):($(this).siblings().removeClass("on"),$(".sub-menu").hide())}),$(".game-hd .menu").find("a").click(function(){var n=$(this),t=n.data();t.t&&($(".game-hd .menu").find("a").removeClass("on"),n.addClass("on"),$("#game-gtype,.game-tit").html(t.n?t.n:n.text()),$(".sub-menu").hide(),$(".gamenum").hide(),$(".game-type-"+t.t).show().find(".rank-tit .change").html(t.n?t.n:n.text()),win.xsbet.bet=t.t,e.show_bet())}),$(".game-bd a.btn").click(function(){$(this).toggleClass("on"),e.show_bet()}),$(".clearnum").click(function(){$(".game-bd a.btn").removeClass("on"),e.show_bet()}),$(".money_clear").click(function(){$(this).prev().val(""),zy.delcc("bet_money"),e.show_bet()}),$("input.bet_money").keyup(function(){e.show_bet()}),$("i[data-money]").click(function(){var n=$(".bet_money"),t=$(this).data("money"),i=1*n.val();n.val(i+t),zy.setcc("bet_money",i+t),e.show_bet()}),$("input.bet_money").val(zy.getcc("bet_money")||0),$("a.confirm").click(function(){var n=1*$("b.balance").text();if(win.xsbet.money=1*$("input.bet_money").val(),0!=win.xsbet.money)if(win.xsbet.money*win.xsbet.num>n)zy.tips("鎮ㄧ殑浣欑偣涓嶈冻");else{var t=e.get_bet_msg();t.count<1||($.each(t,function(e,n){zy.send_msg(n)}),$("#touzhu").removeClass("on"),location.href="#main")}else zy.tips("璇疯緭鍏ヤ笅娉ㄩ噾棰�")})},zy.init_my_menu=function(){return $("ul.lottery li a").click(function(){var e=$(this).data(),n=$(this).find("font").html();return e.open?win.xstype==e.type||(win.xstype=e.type,win.xsico=n,zy.init_game()):zy.tips("璇ユ父鎴忔湭寮€鍚�")}),$(".leftdiv li,.nav_banner .lottery li").click(function(){var e=$(this),n=e.data();if(n.uri)location.href=n.uri;else switch(n.id){case"home":location.href="#menu",$("#ss_menu").show().find("ul").show(),$(".ss_nav").css("margin-top",($(window).height()-$(".ss_nav").height())/2*.8);break;case"lottery":location.href="#menu",$("#ss_menu").find("ul.menu").hide(),$("#ss_menu").show().find("ul.lottery").show(),$(".ss_nav").css("margin-top",($(window).height()-$(".ss_nav").height())/2*.8);break;case"reload":$(".rightdiv").html(""),zy.init_game(1);break;case"reload2":document.ifarms.location.reload(),zy.go2top(0);break;case"minmax":if($("#ifarms").is(":visible"))return $("#ifarms").toggleClass("minmax"),$(this).find("span").text($("#ifarms").hasClass("minmax")?win.lang._maxw:win.lang._minw),void zy.go2top(0);$(".neirong").is(":visible")&&($(".neirong").toggleClass("minmax"),$(this).find("span").text($(".neirong").hasClass("minmax")?win.lang._maxw:win.lang._minw),zy.go2top(0));break;case"wenzi":$(".neirong").show(),$(".changlong").hide(),$(".min_max").find("span").text($(".neirong").hasClass("minmax")?win.lang._maxw:win.lang._minw),$("#ifarms").hide(),zy.load_history(),zy.go2top(0);break;case"donghua":$(".neirong").hide(),$(".changlong").hide(),$("#ifarms").show(),$(".min_max").find("span").text($("#ifarms").hasClass("minmax")?win.lang._maxw:win.lang._minw),zy.go2top(0);break;case"changlong":$(".neirong").hide(),$(".changlong").show(),$("#ifarms").hide(),zy.load_history(),zy.go2top(0);break;case"logout":layer.open({content:"纭畾瑕侀€€鍑哄悧锛�",btn:["纭畾","鍏抽棴"],yes:function(e){layer.close(e),$.get("/member/logout").then(function(e){location.href=e.url?e.url:"/toutiao/"})}});break;case"mode":zy.color_mode(1);break;case"guize":var t=$("#xs-main").find("."+n.id);$("#xs-main .rbox").hide(),$("#xs-main .guize").removeClass("off").show(),zy.kb1show(0),n.type!=win.xstype&&($(t).html("<div class='loading'>姝ｅ湪鍔犺浇涓€�</div>"),$.get("/index/help/data/guize/lottery/"+win.xstype).then(function(n){$(t).html(zy.base64decode(n)),$(e).data("type",win.xstype)}));break;case"touzu":$("#xs-main .rbox").hide(),$("#xs-main .touzu").show(),zy.go2top(0),zy.kb1show(1);break;case"kefu":$("#xs-main .rbox").hide(),$("#xs-main .kefu").removeClass("off").show(),$(e).find("em").hide(),zy.load_kefu(),zy.go2top($(".leftdiv").offset().top),zy.kb1show(0);break;case"tzlog":$("#xs-main .rbox").hide(),$("#xs-main .tzlog").removeClass("off").show(),zy.load_log(),zy.go2top($(".leftdiv").offset().top),zy.kb1show(0);break;case"czhelp":$("#xs-main .rbox").hide(),$("#xs-main .czhelp").removeClass("off").show(),zy.load_czhelp(e),zy.go2top($(".leftdiv").offset().top),zy.kb1show(0);break;case"":case void 0:break;default:if(t=$("#frameRIGHTH").find("."+n.id)){var i=t.data()||{};$(".rbox").hide(),t.removeClass("off").show(),i.uri&&"1"!=i.load&&$.get(i.uri).then(function(e){"string"==typeof e&&($(t).html("guize"==n.id?zy.base64decode(e):e),t.data("load","0"==i.load?1:2))})}"kefu"==n.id&&$(".skefu").find("em").html(0).hide(),zy.in_array(n.id,["tzlog","kefu","guize","czhelp"])&&(zy.go2top($(".leftdiv").offset().top),zy.kb1show(0)),"touzu"==n.id&&(zy.go2top(0),zy.kb1show(1))}}),!0},zy.init_ws=function(e){win.socket=new WebSocket(win.wshost),e&&zy.init_game()},zy.init_game=function(e){if("wcup"==win.xstype)return location.href="/wcup/";if(zy.show_loading(1),$(".rightdiv").html(""),zy.addxitong3(sys_head,"绯荤粺GM","姝ｈ繛鎺ユ湇鍔♀€�",zy.get_now()),win.socket.onerror=function(e){1!=win.socket.readyState&&zy.addxitong1(sys_head,"绯荤粺GM","=鏈嶅姟鍣ㄨ繛鎺ュけ璐�=",zy.get_now())},win.socket.onclose=function(e){zy.addxitong1(sys_head,"绯荤粺GM","=杩炴帴宸叉柇寮€=<br>=閲嶆柊杩炴帴涓�=",zy.get_now()),setTimeout(function(){win.socket_check(0)},1e4)},win.socket_check=function(e){win.socket&&1==win.socket.readyState||(win.wslnum++,zy.show_loading(1,"鏈嶅姟鏂紑<br>姝ｅ湪閲嶈繛"),win.wslnum>3?(zy.addxitong1(sys_head,"绯荤粺GM","=澶氭杩炴帴澶辫触锛屾灏濊瘯鍒锋柊椤甸潰=",zy.get_now()),location.href=zy.get_url()):(zy.addxitong1(sys_head,"绯荤粺GM","=绗�"+win.wslnum+"娆￠噸杩炴湇鍔″櫒涓�=",zy.get_now()),zy.init_ws(1))),1==e&&(e&&clearTimeout(e),e=setTimeout(function(){win.socket_check(1)},5e3))},1==win.socket.readyState){var n=win.udata;n.act="login",n.type=win.xstype,win.socket.send(JSON.stringify(n))}win.socket.onopen=function(e){var n=win.udata;n.act="login",n.type=win.xstype,win.socket.send(JSON.stringify(n)),win.socket.onmessage=function(e){var n=$.parseJSON(e.data);n.sign&&(udata.sign=n.sign.key,udata.time=n.sign.time,udata.hash=n.sign.hash),n.balance>=0&&$(".balance").html(n.balance),n.online&&$(".online").html(n.online),win.wslnum=0,zy.chat_show(n),$(".rightdiv >div:gt(100)").remove()}}},zy.chat_show=function(e){switch(zy.show_loading(0,!1),e.code){case 1:zy.addxitong(e.headimg||sys_head,e.uname||"绯荤粺GM",e.msg,e.time);break;case 2:zy.addxitong1(e.headimg||sys_head,e.uname||"绯荤粺GM",e.msg,e.time);break;case 3:window.ifarms.location.reload();break;case 4:zy.addxitong1(e.headimg||sys_head,e.uname||"绯荤粺GM",e.msg,e.time);break;case 100:zy.addxitong3(sys_head,"绯荤粺GM",e.msg,e.time);break;case 101:if(zy.addxitong3(sys_head,"绯荤粺GM",e.msg,e.time),1==_tbs&&$(".game-box").is(":visible")){$(".game-bd a.btn,.kj-box dl.on").removeClass("on");try{win.lottery[win.xstype].show_bet()}catch(e){}}break;case 200:zy.addtouzhu(e.headimg,e.uname,e.msg,e.time);break;case 403:location.href=zy.get_url();break;case 666:$.extend(win,e.cfg),$(".rightdiv").html(""),$.each(e.chats,function(e,n){zy.chat_show(n)}),zy.init_body();break;case 603:zy.init_lottery(e.init),zy.load_log();case 888:e.logs&&win.lottery[win.xstype].show(e.logs),e.logs2&&win.lottery[win.xstype].clong(e.logs2),603==e.code&&(zy.addxitong3(sys_head,"绯荤粺GM","鏈嶅姟鍣ㄨ繛鎺ユ垚鍔� ^_^",zy.get_now()),win.socket_check(1));break;case 600:zy.kefume(e.headimg,e.uname,e.msg,e.time);break;case 601:if($(".kefu").is(":hidden")){var n=$(".skefu").find("em"),t=1*n.html()+1;$(n).html(t).show()}zy.kefumsg(e.headimg||kefu_head,e.uname||"瀹㈡湇",e.msg,e.time);break;case 602:zy.kefumsg(e.headimg||kefu_head,e.uname||"瀹㈡湇",e.msg,e.time)}},zy.init=function(){$.ajax({type:"post",url:"/index.php/member/me",async:!1,success:function(e){e.status?($.extend(win,$.parseJSON(zy.base64decode(e.info))),setTimeout(function(){zy.sbind()},3e4),zy.init_ws(0),zy.init_game()):layer.open({content:e.info||"鐧婚檰澶辫触,璇峰埛鏂伴噸鏂扮櫥闄�",btn:["纭畾"],yes:function(n){layer.close(n),location.href=e.url||"/"}})},error:function(){layer.open({content:res.info,btn:["纭畾"],yes:function(e){layer.close(e),location.href=res.url||"/"}})}})},zy.load_history=function(){var e=win.udata,n={act:"logs",sw:e.sw,uid:e.uid,uname:e.uname,type:win.xstype,headimg:e.headimg,sign:e.sign,time:e.time,hash:e.hash};socket.send(JSON.stringify(n))},zy.send_msg=function(e,n){if(e=e||$("#Message").val()){var t=win.udata,i={act:n||"send",sw:t.sw,cfg:t.cfg||"",uid:t.uid,uname:t.uname,type:win.xstype,headimg:t.headimg,sign:t.sign,time:t.time,hash:t.hash,content:e};zy.addtouzhu(t.headimg,t.uname,e,zy.get_now()),socket.send(JSON.stringify(i)),$("#Message").val("")}},$(function(){zy.init(),$(document).on("click","#sendkf",function(){var e=$.trim($("#kfs").val());if(e){var n=win.udata;n.act="tokefu",n.content=e,win.socket.send(JSON.stringify(n)),$("#kfs").val("")}}),$(document).on("click","*[event='ajax']",function(){var e=$(this),n=e.data();n.uri&&$.get(n.uri).then(function(n){$(e).parents(".rbox").html(n)})}),$(document).on("click",".cs-btn",function(){var e=$(this);e.hasClass("done")||layer.open({content:"纭畾瑕佹挙鍗曞悧锛�",btn:["纭畾","鍏抽棴"],yes:function(n){layer.close(n),e.hasClass("cs-batch")?$(".cs-bth").addClass("done"):e.addClass("done"),$.get($(e).data("uri")).then(function(e){zy.tips(e.info),zy.load_log(),""!=e.url&&$(".balance").html(e.url)})}})})}),$(document).on("click",".ajax_load",function(){var a=$(this).data();location.href="#win",$.get(a.uri).then(function(res){layer.closeAll(),layer.open({type:1,content:res,anim:a.anim||"up",style:"position:fixed;"+(a.css||"bottom: 0;")+"left:1%;width:98%; max-height:100%; min-height:40%; border: none;border-top-left-radius: 10px; border-top-right-radius: 10px; -webkit-animation-duration: .5s; animation-duration: .5s;"}),a.callback&&eval(a.callback)})}),$(document).on("click",".confirm-pour",function(){$(this).hasClass("on")&&($("#touzhu").addClass("on"),location.href="#confirm")}),$(document).on("click",".neirongsaid",function(){$("#Message").val($(this).text())})}(window,zy),window.onhashchange=function(){-1==location.href.indexOf("#win")&&layer.closeAll(),-1==location.href.indexOf("#menu")&&$("#ss_menu").hide(),-1==location.href.indexOf("#ajax_page")&&$("#ajax_container,.win-show").removeClass("on"),-1==location.href.indexOf("#confirm")&&$("#touzhu").removeClass("on")};