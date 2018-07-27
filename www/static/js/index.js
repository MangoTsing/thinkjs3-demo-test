$(function(){
	var liNum = 5;
	function Grid (){
		var tX = 200 ;  // 水平间隔
		var firstX = - 2*tX; //第一个li水平偏移量
		var firstY = 0; //第一个li垂直偏移量
		var firstZ = 0; //第一个li Z轴偏移量
			//给#main里面添加 liNum个 li标签
		$('#main li').each(function(i)
		{
			var iX = i; // x方向，要增加的倍数
			
			$(this).css({
				'transform' : 'translate3d('+ ( firstX + iX*tX ) +'px,'+ firstY +'px,'+ firstZ+'px)',
				'transition':'4.5s ease-in-out'
			});
		});
	};
	    //拖拽
		function drag(){
			
			var nowX , lastX , minusX , nowY , lastY , minusY;
			
			var roY = 0 , roX = 0;

			$(document).mousedown(function(ev){

				ev = ev || window.event;
				lastX = ev.clientX;
				lastY = ev.clientY;
				
				$(this).on('mousemove',function(ev){
					ev = ev || window.event; //ev 事件对象 存放事件的相关信息

					nowX = ev.clientX;  // ev.clientX  clientX属性存放鼠标x坐标
					nowY = ev.clientY;

					minusX = nowX - lastX;  // 两者差值
					minusY = nowY - lastY;
					
					roY += minusX*0.2;
					roX -= minusY*0.2;

					$('#main').css({
						'transform' : 'translateZ(0px) rotateX('+ roX +'deg) rotateY('+ roY +'deg)'
					})

					lastX = nowX; // 存放前一点的x坐标
					lastY = nowY;
				});

				return false;

			}).mouseup(function(){
				$(this).off('mousemove');
			});	
		}
		drag();
		init();
	
	function init(){
		var demoArr=['基地简介','基地日常','发展方向','相对优势','加入我们']
		//给#main里面添加 liNum个 li标签
		for ( var i=0 ; i<liNum ; i++ )
		{
			var $li = $('<li><p class="title">'+demoArr[i]+'</p></li>');
			var x = (Math.random()-0.5)*1500;
			var y = (Math.random()-0.5)*1500;
			var z = (Math.random()-0.5)*1500;
			$li.css({
				'transform' : 'translate3d('+x+'px,'+y+'px,'+z+'px)'
			});
			$('#main').append($li);
		}
		setTimeout(function(){
			Grid();
		},300);
	}
	function jump(){
			var srcArr=["/static/demo/简介.html","/static/demo/基地.html","/static/demo/方向.html","/static/demo/优势.html","/static/demo/加入我们.html"]
			var $mainLi = $('#main li');
			var $frame = $('#frame');
			var $show = $('#show')
				
				for (var i = 0; i < liNum; i++) {
				$mainLi[i].index=i;
				$mainLi[i].addEventListener('click',function(ev){
						ev = ev || window.event;
					$frame.attr('src',srcArr[this.index]);
					$show.fadeIn(1000).css({
						'transform' :'rotateY(0deg)scale(1)'
					});
					ev.stopPropagation();
					});
				}
			
			$(document).click(function(){
				$show.fadeOut(1000,function(){
					$(this).css({
						'transform' : 'rotateY(0deg) scale(1.5)'
					});
				}).css({
					'transform' : 'rotateY(180deg) scale(0.1)'
				});
			});
			$show.click(function(ev){
				$show.css({
					'transform' : 'rotateY(0deg) scale(1)',
				});
				ev.stopPropagation();
			});
			
		};
		

		jump();
});
		
		
