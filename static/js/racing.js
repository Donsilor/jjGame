$(function(){
	$(window).scroll(function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrollTop > 200){
			$('i.totop').css('display','block').addClass('animi');
		}else{
			$('i.totop').css('display','none').removeClass('animi');
		}
	})
	$('i.totop').click(function(){
		$('html , body').animate({scrollTop: 0},'fast');
	})
	$('body').keydown(function(e){
		if(e.keyCode == 116){
			$('html , body').animate({scrollTop: scrollTop});
		}
	})
		
	var t = 0,s = 0,pro = 0,               //t:下注金额     s:共几注    pro:投注金额
		k = [5,10,50,100,500,1000,5000];
	
	$('.m-bd dd i').click(function(){
		t += k[$(this).index()];
		$('.m-bd input.text').val(t);
		s = $('.bet_n').text();
		pro = t*s;
		$('.bet_total').text(pro);
	})
	
	$('span.money_clear').click(function(){
		t = 0;
		pro = 0;
		$('.m-bd input.text').val('');
		$('.bet_total').text(pro);
	})
	
	var tab_control,day,
		n = sessionStorage.getItem('tab'),
		day = sessionStorage.getItem('day');
	if(n && n !== 9){
		$($('.frame-rightCh>div')[n]).css('display','block').siblings('.frame-rightCh>div:not(:first)').css('display','none');
	}
	if(n == 9){
		$('.rule_box').css('display','block');
		$('.rule_box').siblings('div:not(:first)').css('display','none');
	}
	if(day){
		if(day == '1'){
			$('body').removeClass('night');
			$('.left-div li.mode').children().text('夜间');
		}else if(day == '2'){
			$('body').addClass('night');
			$('.left-div li.mode').children().text('日间');
		}
	}
			//左侧菜单开始
	$('.left-div li.home, .nav_ul .home').click(function(){
		$('#ss_menu').css('display','block');
		$('.ss_nav').css('display','block');
	})
	$('#ss_menu .close').click(function(){
		$('#ss_menu').css('display','none');
		$('.ss_nav').css('display','none');
	})
	$('.left-div li.guess').click(function(){
		$('html , body').animate({scrollTop: 0},'fast');
		tab_control = 1;
		sessionStorage.setItem('tab',tab_control);
		$('.touzu').css('display','block');
		$('.touzu').siblings('div:not(:first)').css('display','none');
	})
	$('.left-div li.logs').click(function(){
		tab_control = 3;
		sessionStorage.setItem('tab',tab_control);
		$('.tzlog').css('display','block');
		$('.tzlog').siblings('div:not(:first)').css('display','none');
	})
	$('.left-div li.servicer').click(function(){
		tab_control = 2;
		sessionStorage.setItem('tab',tab_control);
		$('.kefu').css('display','block');
		$('.kefu').siblings('div:not(:first)').css('display','none');
		$("html,body").animate({
            scrollTop: $('.xs-top').outerHeight() + 'px'
        },200);
	})
	$('.left-div li.money').click(function(){
		tab_control = 4;
		sessionStorage.setItem('tab',tab_control);
		$('.czhelp').css('display','block');
		$('.czhelp').siblings('div:not(:first)').css('display','none');
		$("html,body").animate({
            scrollTop: $('.xs-top').outerHeight() + 'px'
        },200);
	})
	$('.left-div li.frech').click(function(){
		location.replace(location.href);
	})
	$('.left-div li.logout').click(function(){
		$('#ss_menu').css('display','block');
		$('#ss_menu .quit').css('display','block');
	})
	$('#ss_menu .cancle').click(function(){
		$('#ss_menu').css('display','none');
		$('#ss_menu .quit').css('display','none');
	})
	$('#ss_menu .affirm').click(function(){
		$('#ss_menu').css('display','none');
		$('#ss_menu .quit').css('display','none');
		window.location.pathname = '/jjGame/user/login.html';
	})
	$('.left-div li.mode').click(function(){
		$('body').toggleClass('night');
		if($(this).children().text() == '夜间'){
			$(this).children().text('日间');
			day = 02;
			sessionStorage.setItem('day',day);
		}else{
			$(this).children().text('夜间');
			day = 01;
			sessionStorage.setItem('day',day);
		}
	})											//左侧菜单结束
	
	$('.nav_ul li:eq(1)').click(function(){
		$('.xs-top').children('.img').css('display','block').siblings().css('display','none');
		$('.nav_ul li').last().children().text('小窗');
	})
	$('.nav_ul li:eq(2)').click(function(){
		$('.xs-top').children('.trend').css('display','block').siblings().css('display','none');
		$('.nav_ul li').last().children().text('大窗');
	})
	$('.nav_ul li:eq(3)').click(function(){
		$('.xs-top').children('.long').css('display','block').siblings().css('display','none');
	})
	$('.nav_ul li:eq(4)').click(function(){
		$('.rule_box').css('display','block');
		$('.rule_box').siblings('div:not(:first)').css('display','none');
		tab_control = 9;
		sessionStorage.setItem('tab',tab_control);
	})
	$('.nav_ul li:eq(5)').click(function(){
//					更新动画
	})
	$('.nav_ul li:eq(6)').click(function(){
		if($('.img').css('display') === 'block'){
			if($('.nav_ul li').last().children().text() === '小窗'){
				$('.nav_ul li').last().children().text('大窗');
				$('.img').addClass('small');
			}else{
				$('.nav_ul li').last().children().text('小窗');
				$('.img').removeClass('small');
			}
		}
		if($('.trend').css('display') === 'block'){
			if($('.nav_ul li').last().children().text() === '大窗'){
				$('.nav_ul li').last().children().text('小窗');
				$('.table2 tr:gt(10)').removeClass('dis');
			}else{
				$('.nav_ul li').last().children().text('大窗');
				$('.table2 tr:gt(10)').addClass('dis');
			}
		}
	})
	
	$('.xs-top').click(function(){
		if($('.trend').css('display') === 'block'){
			$('.table2 th').last().toggleClass('on');
			$('.table2 tr td:last-child').toggleClass('on');
		}
	})
	
	$('.keybord-img').click(function(){     	//弹出键盘
		$(this).toggleClass('gary');
		$(".txtbet").removeClass('on');
		$('.txtbed').css('display','none');
		if(this.classList.contains('gary')){
			$('.keybord').css('display','none');
		}else{
			$('.keybord').css('display','block');
		}
	})
	$('.txtbet').click(function(){              //弹出投注
		$(this).toggleClass('on');
		$('.keybord-img').addClass('gary');
		$('.keybord').css('display','none');
		if(this.classList.contains('on')){
			$('.txtbed').css('display','block');
		}else{
			$('.txtbed').css('display','none');
		}
		
		abEmpty01('.game-type-1','.btn-box:eq(0)','.btn-box:eq(1)');
	})
	$('i.kclose').click(function(){              //关闭键盘
		$(this).parent().css('display','none');
		$('.keybord-img').addClass('gary');
	})
	$('.close i.closebt').click(function(){       //关闭投注
		$('.txtbed').css('display','none');
		$(".txtbet").removeClass('on');
	})
	
	var a, b;									   //清空和确认样式
	function emptyColor(element,child,k){				 
		k = 0;
		for(var i=0; i<$(element + ' ' + child + ' .btn').length; i++){
			if($(element + ' ' + child + ' .btn')[i].classList.contains('on') == true){
				k++;
			}
		}
		return k;
	}
	function abEmpty01(element,child_01,child_02){
		$('.clearnum').removeClass('on');
		$('.confirm-pour').removeClass('on');
		a = emptyColor(element,child_01,a);
		b = emptyColor(element,child_02,b);
		if(a > 0 || b > 0){
			$('.clearnum').addClass('on');
		}else{
			$('.clearnum').removeClass('on');
		}
		if(a > 0 && b > 0){
			$('.confirm-pour').addClass('on');
		}else{
			$('.confirm-pour').removeClass('on');
		}
		$(element + ' .btn-box .btn').click(function(){
			a = emptyColor(element,child_01,a);
			b = emptyColor(element,child_02,b);
			s = a*b;
			pro = s*t;
			$('#bet_num b').text(s);
			$('.bet_n').text(s);
			$('.m-bd em').text(pro);
			
			
			if(a > 0 || b > 0){
				$('.clearnum').addClass('on');
			}else{
				$('.clearnum').removeClass('on');
			}
			if(a > 0 && b > 0){
				$('.confirm-pour').addClass('on');
			}else{
				$('.confirm-pour').removeClass('on');
			}
		})
	}
	
	function abEmpty02(element,child_01){
		$('.clearnum').removeClass('on');
		$('.confirm-pour').removeClass('on');
		a = emptyColor(element,child_01);
		if(a > 0){
			$('.clearnum').addClass('on');
			$('.confirm-pour').addClass('on');
		}else{
			$('.clearnum').removeClass('on');
			$('.confirm-pour').removeClass('on');
		}
		$(element + ' .btn-box .btn').click(function(){
			a = emptyColor(element,child_01);
			if(a > 0){
				$('.clearnum').addClass('on');
				$('.confirm-pour').addClass('on');
			}else{
				$('.clearnum').removeClass('on');
				$('.confirm-pour').removeClass('on');
			}
		})
	}
	
	
	function addOn(that){                         //下注标题样式
		for(var i=0; i<$('.menu ul li').length; i++){
			$('.menu ul li')[i].children[0].className = '';
		}
		that.children[0].className = 'on';
		$('.sub-menu').css('display','none');
		$('.sub-menu').children().removeClass('on');
	}
	$('.menu ul li')[0].onclick = function(){        //下注选择开始
		abEmpty01('.game-type-1','.btn-box:eq(0)','.btn-box:eq(1)')
		var that = this
		addOn(that);
		$('.game-type-1').css('display','block');
		$('.game-type-1').siblings().css('display','none');
		$('.infuse').css('display','block');
	}	
	$('.menu ul li')[1].onclick = function(){
		abEmpty01('.game-type-2','.btn-box:eq(0)','.btn-box:eq(1)')
		var that = this
		addOn(that);
		$('.game-type-2').css('display','block');
		$('.game-type-2').siblings().css('display','none');
		$('.infuse').css('display','block');
	}
	$('.menu ul li')[2].onclick = function(){
		abEmpty01('.game-type-4','.btn-box:eq(0)','.btn-box:eq(1)')
		var that = this
		addOn(that);
		$('.game-type-4').css('display','block');
		$('.game-type-4').siblings().css('display','none');
		$('.infuse').css('display','block');
	}
	$('.menu ul li')[3].onclick = function(){
		if(this.children[0].className !== 'on'){
			this.children[0].className	+= 'on';				
			$('.sub-menu').css('display','block');
		}else{
			this.children[0].className	= '';				
			$('.sub-menu').css('display','none');
		}
	}
	
	function add2(that){                           //下注下拉菜单样式
		$(that).parent().css('display','none');
		$(that)[0].className += 'on';
		$(that).siblings().removeClass('on');
		for(var i=0; i<$('.game-li a').length; i++){
			$('.game-li a')[i].className = '';
		}
	}
	$('.sub-menu').children()[0].onclick = function(){
		$('.clearnum').removeClass('on');
		$('.confirm-pour').removeClass('on');
		a = emptyColor('.game-type-6','.btn-box');
		if(a > 0){
			$('.clearnum').addClass('on');
		}else{
			$('.clearnum').removeClass('on');
		}
		if(a > 1){
			$('.confirm-pour').addClass('on');
		}else{
			$('.confirm-pour').removeClass('on');
		}
		$('.game-type-6 .btn-box .btn').click(function(){
			a = emptyColor('.game-type-6','.btn-box');
			if(a > 0){
				$('.clearnum').addClass('on');
			}else{
				$('.clearnum').removeClass('on');
			}
			if(a > 1){
				$('.confirm-pour').addClass('on');
			}else{
				$('.confirm-pour').removeClass('on');
			}
		})
		var that = this;
		add2(that);
		$('.game-type-6').css('display','block');
		$('.game-type-6').siblings().css('display','none');
		$('.infuse').css('display','block');
	}
	$('.sub-menu').children()[1].onclick = function(){
		abEmpty02('.game-type-7','.btn-box')
		var that = this;
		add2(that);
		$('.game-type-7').css('display','block');
		$('.game-type-7').siblings().css('display','none');
		$('.infuse').css('display','block');
	}
	$('.sub-menu').children()[2].onclick = function(){
		abEmpty02('.game-type-8','.btn-box');
		var that = this;
		add2(that);
		$('.game-type-8').css('display','block');
		$('.game-type-8').siblings().css('display','none');
		$('.infuse').css('display','block');
	}												//下注选择结束			

	$('.clearnum').click(function(){				//清空所选
		$(this).removeClass('on').siblings().removeClass('on');
		var list = $('.game-bd')[0].children;
		for(var i=0; i<list.length; i++){
			if(list[i].style.display !== 'none'){
				$(list[i]).children().children('a').removeClass('on');
			}
		}
	})
	
	$('.confirm-pour').click(function(){			//确认弹窗
		if($(this).hasClass('on') == true){
			s = a*b;
			$('#bet_num b').text(s);
			$('.bet_n').text(s);
			$('.bet_total').text(pro);
			$('#touzhu').addClass('on');
		}
	})
	
	$('a.cancle').click(function(){					//取消下注，关闭弹窗
		$('#touzhu').removeClass('on');
	})
	
	$('a.confirm').click(function(){				//确认下注
		$('#touzhu').removeClass('on');
	})
	
	$('.keybord em').on('mousedown',function(){      //鼠标按下键盘效果
		$(this).addClass('on');
	})
	$('.keybord em').on('mouseup',function(){      //鼠标按下键盘效果
		$(this).removeClass('on');
	})
	$('.keybord em').on('touchstart',function(){      //鼠标按下键盘效果
		$(this).addClass('on');
	})
	$('.keybord em').on('touchend',function(){      //鼠标按下键盘效果
		$(this).removeClass('on');
	})
	var arr = [],
	    val = '';	
	$('.keybord em').click(function(){
		var num = '1234567890.-/龙虎';
		var txt = '大小单双和组查回';
		if(num.indexOf($(this).text()) !== -1){
			arr.push($(this).text());
		}
		if(txt.indexOf($(this).text()) !== -1){
			if(arr.indexOf($(this).text()) == -1){
				arr.push($(this).text());
			}else{
				arr.push($(this).text());
				arr.pop();
			}
		}
		if($(this).text() == '清'){
			arr = [];
		}
		if($(this).text() == '←'){
			arr.pop();
		}
		
		val = arr.join('');
		$('.keybord-box input').val(val);
	})
	
	$('.btn').click(function(){               //猜号背景色
		$(this).toggleClass('on');
		$('.infuse').css('display','block');
	})
	
	$('.bfff .num').click(function(){          //记录页记录
		$('.tzlog .table:not(:first-child)').toggleClass('dis');
		if(this.innerText === '记录'){
			this.innerText = '返回';					
		}else{
			this.innerText = '记录';					
		}
	})
	
	$('.table:nth-child(3) .page_link a').click(function(){
		$(this).addClass('current').siblings().removeClass('current');
		if($('.current').index() == 0){
			$('.table:nth-child(3) .title').text('今日记录');
		}else if($('.current').index() == 1){
			$('.table:nth-child(3) .title').text('昨日记录');
		}else if($('.current').index() == 2){
			$('.table:nth-child(3) .title').text('所有记录');
		}else if($('.current').index() == 3){
			$('.table:nth-child(3) .title').text('30日统计');
		}
	})

})
