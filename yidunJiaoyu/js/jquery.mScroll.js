// JavaScript Document

(function($) {
	$.fn.mScroll = function(options) {
		var opts = $.extend({},$.fn.mScroll.defaults,options); 
		this.each(function(){
			//初始化
			if(opts.cycle==0){opts.auto=0;}
			var m,f,s,c,w,h,sw=1,idx=0;
			f = $(this);
			if(f.children().size()<=opts.size){return false;}
			f.children().wrapAll("<div class='scroll'></div>");
			s = f.find(".scroll");
			if(opts.cycle==1){s.append(s.html());}
			c = s.children();
			n = $(opts.nav);
			n.eq(0).addClass("now");
			w = c.outerWidth()+(parseInt(c.css("margin-left"))?parseInt(c.css("margin-left")):0)+(parseInt(c.css("margin-right"))?parseInt(c.css("margin-right")):0);
			h = c.outerHeight()+(parseInt(c.css("margin-top"))?parseInt(c.css("margin-top")):0)+(parseInt(c.css("margin-bottom"))?parseInt(c.css("margin-bottom")):0); 
			if(opts.direction=="h"){
				//f.css({width:opts.size*w,height:h,overflow:"hidden"});
				f.css({width:opts.size*w,overflow:"hidden"});
				s.width(c.size()*w);
				if(opts.isfocus)c.width(w);
				f.scrollLeft(0);
			}
			if(opts.direction=="v"){
				f.css({width:w,height:opts.size*h,overflow:"hidden"});
				s.height(c.size()*h);
				f.scrollTop(0);
			}
			
			function move(act,i){
				if(sw==1){
					sw=0;
					if(opts.direction=="h"){
						if(act=="left"){
							if(f.scrollLeft()>=(s.width()*0.5) && opts.cycle==1){f.scrollLeft(0);}
							f.animate({scrollLeft:f.scrollLeft()+w},opts.speed,function(){sw=1;});
							idx++;
						}
						if(act=="right"){
							if(f.scrollLeft()<=0 && opts.cycle==1){f.scrollLeft(s.width()*0.5);}
							f.animate({scrollLeft:f.scrollLeft()-w},opts.speed,function(){sw=1;});
							idx--;
						}
					}
					if(opts.direction=="v"){
						if(act=="left"){
							if(f.scrollTop()>=(s.height()*0.5) && opts.cycle==1){f.scrollTop(0);}
							f.animate({scrollTop:f.scrollTop()+h},opts.speed,function(){sw=1;});
							idx++;
						}
						if(act=="right"){
							if(f.scrollTop()<=0 && opts.cycle==1){f.scrollTop(s.width()*0.5);}
							f.animate({scrollTop:f.scrollTop()-h},opts.speed,function(){sw=1;});
							idx--;
						}
					}
					
					if(idx>=c.size()*0.5){idx=0;}
					n.removeClass("now");
					n.eq(idx).addClass("now");
				}
			}
			if(opts.prev){
				$(opts.prev).click(function(){;
					if(opts.arrow==1){move("right");}
					else{move("left");}
				});
			}
			if(opts.next){
				$(opts.next).click(function(){
					if(opts.arrow==1){move("left");}
					else{move("right");}
				});
			}
			n.each(function(index, element) {
				$(this).click(function(){
					f.stop().animate({scrollLeft:index*w},opts.speed,function(){sw=1;});
					idx=index;
					n.removeClass("now");
					n.eq(idx).addClass("now");
					clearInterval(iv);
					iv = window.setInterval(function(){move("left");},opts.delay);
				});
			});
			var iv;
			if(opts.auto==1){
				iv = window.setInterval(function(){move("left");},opts.delay);
			}
			f.hover(function(){sw=0},function(){sw=1});
			$(opts.next).hover(function(){window.clearInterval(iv);},function(){if(opts.auto==1){iv = window.setInterval(function(){move("left");},opts.delay);}});
			$(opts.prev).hover(function(){window.clearInterval(iv);},function(){if(opts.auto==1){iv = window.setInterval(function(){move("left");},opts.delay);}});
			
			function rs(){
				w=document.documentElement.clientWidth;
				if(w<940){w=940;}
				f.css("margin-left",(f.width()-w)*0.5*-1);
				f.width(w);
				f.scrollLeft(idx*w);
				c.width(w);
				s.width(w*c.size());
			}
			$(window).resize(function(){
                if(opts.isfocus)rs();
            });
		})
	};
	$.fn.mScroll.defaults = {
		     auto : 1,             //自动开始
		direction : "h",           //h横向,v纵向
		  isfocus : 0,             //是否作为焦点图
		    speed : 800,           //滚动速度
			delay : 5000,          //自动滚动延迟
			 size :　1,            //最小子元素个数
			  nav : null,          //导航
			 prev : null,          //前一个按钮
			 next : null,          //后一个按钮
			arrow : 1,             //是否反转
			cycle : 1              //是否循环
	}
})(jQuery);