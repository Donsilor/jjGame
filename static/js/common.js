var u=1;
$('footer ul li:first').click(function(){
$('.pop_up').css('display','block');
$('.trial').css('display','block');
if(this.children[0].children[1].innerText == '试玩'){
	$('.trial_title').html('试玩模式不做任何记录！<br /><br />是否确认进入试玩模式？');
	$('.trial_btn .affirm').click(function(){
		$('footer ul li:first').addClass('on');
		$('.pop_up').css('display','none');
		$('.trial').css('display','none');
		$('footer ul li:first')[0].children[0].children[1].innerText = '退出试玩';
	})
}else{
	$('.trial_title').text('确定要退出试玩嘛？');
	$('.trial_btn .affirm').click(function(){
		$('footer ul li:first').removeClass('on');
		$('.pop_up').css('display','none');
		$('.trial').css('display','none');
		$('footer ul li:first')[0].children[0].children[1].innerText = '试玩';
		})
	}
})
$('.trial_btn .cancle').click(function(){
	$('.pop_up').css('display','none');
	$('.trial').css('display','none');
})
$('footer ul li:nth-child(2)').click(function(){
	$('.pop_up').css('display','block');
	$('.top_up').css('display','block');
	$('.top_u').addClass('topp2');
})

$('i.close1,a.submit').click(function(){
	$('.pop_up').css('display','none');
	$('.top_up').css('display','none');
})

$('footer ul li:last').click(function(){
	$('.pop_up').css('display','block');
	$('.service').css('display','block');
	$('.top_u').addClass('topp2');
})

$('i.close2').click(function(){
	$('.pop_up').css('display','none');
	$('.service').css('display','none');
})

$('.ftype a').click(function(){
	$(this).addClass('on').siblings().removeClass('on');
})

$('.top_up .view a.log').click(function(){
	sessionStorage.setItem('type','1');
})

var oDate = new Date(),
	y = oDate.getFullYear(),
	m = add0(oDate.getMonth()+1),
	d = add0(oDate.getDate());
	
function add0(n){
	if(n<10){
		return ('0'+ n).slice(-2);
	}else{
		return n;
	}
}

