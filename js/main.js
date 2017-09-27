var wh,ht;

$(function(){
	winWidth = window.innerWidth;
	pageInit();
	setBg();
	
	//lunbo
	//$(function(){
//			var h=$(window).width();
//			//$(".imglist").css("width",h);
//			var Lnum=0;
//			var time=2000;
//			$(".leftBtn").click(function(event) {
//				Lnum--;
//				Lnum=Lnum%$(".main01 .imglist li").length;
//				changimg();
//				changcircle();
//			});	
//			$(".rightBtn").click(rightBtn);		
//			function rightBtn(event) {
//				Lnum++;
//				Lnum=Lnum%$(".main01 .imglist li").length;
//				changimg();
//				changcircle();
//			};
//			$(".main01 .num span").click(function(event) {
//				Lnum=$(this).index();
//				changimg();
//				changcircle();
//			});
//			function changimg(event){
//				$(".main01 .imglist li").eq(Lnum).fadeIn().siblings('li').fadeOut();
//			}
//			function changcircle(event){
//				$(".main01 .num span").eq(Lnum).addClass('cur').siblings('span').removeClass('cur');
//			}
//			timer=setInterval(rightBtn,time);
//			$(".main01").hover(function() {
//				clearInterval(timer);
//				timer=null;
//			}, function() {
//				clearInterval(timer);
//				timer=setInterval(rightBtn,time);
//			});
//		});
//		
//		$(".one").hover(function(){
//			$(this).children("div").show()
//			}
//		,function(){
//			$(this).children("div").hide()
//			})
			
			
	})
	
	
	$(function(){
	 /*下拉二级菜单*/
	  $(".menu .active01").hover(
           function(){
			 var son_menu=$(this).children(".menu2");
			 $(this).children(".menu2 li").hide();
			 son_menu.slideDown(200);
						
			},
			function(){
				var son_menu=$(this).children(".menu2");
					  son_menu.slideUp(200);				
				}
			);
			
			/*弹出层效果*/
			 
			$('.type .job').click(function(){
				  var a=$(this).index();
				  $('.head').css('display','block')
				  /*$('.right01').css('display','block')*/
				  $('.ton_box .ton:eq('+a+')').css('display','block')
				})
			$('.head').click(function(){
				  $('.head,.ton').css('display','none')
				 
				
				})
		    
			
			/*选项卡*/
			$(".t-left ul li").click(function(){
			 var b=$(this).index()+1;
			 $(".t-right").hide();
			 $(".right0"+b).show();
			 $(this).addClass("t-act").siblings().removeClass("t-act");
			  });
			  
					 	 		 	 	
		})
var ht="0px";
function pageInit(){
	var _w=$("html,body").outerWidth();
	//document.documentElement.clientWidth||document.body.clientWidth,
		//w22=document.documentElement.offsetWidth||document.body.offsetWidth,
		//_w=document.body.offsetWidth,
		//w24=window.scrollWidth||document.body.scrollWidth,
	    _h=document.documentElement.clientHeight||document.body.clientHeight, minwidth=1240,minheight=680;
	console.log("_w:"+_w);
	wh=_w>minwidth?_w:minwidth;
	ht=_h>minheight?_h:minheight;
	$("#marked").css({"overflow":"hidden","height":ht+"px","width":wh+"px"});
	setBg();
}
function setBg(){
	 var iw=1440,ih=720,$bg=$(".bg");
	 var ib=ih/iw,b=ht/wh;
	 if(b>=ib){
		var bw=(iw/ih)*ht;
		$bg.css({"width":bw+"px","height":ht+"px","top":"0","left":"50%","margin-left":bw/-2+"px"});
	 }else{
		 var bh=(ih/iw)*wh;
		 $bg.css({"width":wh+"px","height":bh+"px","top":"50%","left":"0","margin-top":-bh/2+"px"});
	 }
}