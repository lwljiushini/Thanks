	$(function(){
		
		var mySwiper = new Swiper ('.swiper-container', {
			direction: 'vertical',
			loop: true,
			// 如果需要分页器
			pagination: '.swiper-pagination',
			//文字输出控出
			onSlideChangeStart: function(swiper){
				clearInterval(oTimer);
				$(".font"+ (swiper.previousIndex - 1) + " p").text("");
				if(swiper.activeIndex != 1 && swiper.activeIndex != (swiper.slides.length - 1)){
					changeText($(".p" + (swiper.activeIndex - 1) ),$(".font"+ (swiper.activeIndex - 1) + " p"),240);
				}
				if(swiper.activeIndex == 0){
					changeText($(".p" + (swiper.slides.length - 3)),$(".font"+ (swiper.slides.length - 3) + " p"),220);
				}
				if(swiper.activeIndex % 2 == 0){
					$(".swiper-slide").eq(swiper.activeIndex).addClass("hide01");
					$(".swiper-slide").eq(swiper.activeIndex).removeClass("play");	
				}else{
					$(".swiper-slide").eq(swiper.activeIndex).addClass("hide02");
					$(".swiper-slide").eq(swiper.activeIndex).removeClass("play");	
				}
				if(swiper.previousIndex % 2 == 0){
					$(".swiper-slide").eq(swiper.previousIndex).removeClass("hide01");
					$(".swiper-slide").eq(swiper.previousIndex).addClass("play");	
				}else{
					$(".swiper-slide").eq(swiper.previousIndex).removeClass("hide02");
					$(".swiper-slide").eq(swiper.previousIndex).addClass("play");	
				}
			}	
		});
		//刚开始就播放
		var audio = document.getElementById("myAudio");
		audio.play();
		$(".music-btn-on").click(function(){
			audio.play();
			$(".music-btn-on").css({
				"display" : "none"
			});
			$(".music-btn-off").css({
				"display" : "inline"
			})
		});
		$(".music-btn-off").click(function(){
			audio.pause();
			$(".music-btn-off").css({
				"display" : "none"
			});
			$(".music-btn-on").css({
				"display" : "inline"
			})
		})
		
		//第七页点击后，显示场景二
		$(".page-07").click(function(){
			$(this).css({
				"background": "url(img/sevenstar01.gif) center center", 
			})
			$(".seven-home").fadeOut("fast");
			$(".font6 p").fadeOut("slow");
			$(".seven-love").fadeIn("slow");
		})
		var oTimer = null;
		function changeText(content1,content2,speed){
			//先获取文本
			var oTxt = content1.text();
			var	oContent = oTxt.split("");
			var	i = 0;
			function show(){
				if(i < oContent.length){      
					content2.append(oContent[i]);
					i = i + 1;
				}
			}
			oTimer = setInterval(show,speed);
		}
		//控制文字的输出1
		function myWords1(content1){
			content1.find("i").each(function(){
				var index = $(this).index();
				$(this).css({
					"animation": "ZoomInDown 1s linear "+ index*0.2 +"s 1 forwards"
				});
			});
		}
		myWords1($(".nine01-font"));
		//控制文字的输出2
		function myWords2(content1){
			content1.find("i").each(function(){
				var index = $(this).index();
				$(this).css({
					"animation": "RollIn 1s linear "+ index*0.4 +"s 1 forwards"
				});
			});
		}
		myWords2($(".eight01-font"));
		myWords2($(".font"));
	});