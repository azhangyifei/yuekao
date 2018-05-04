require.config({
	baseUrl:"/js/",
	paths:{
		hand:"lib/handlebars-v4.0.11",
		jquery:"lib/jquery-1.8.3.min",
		swiper:"lib/swiper-3.3.1.min"
	}
})
require(["hand","jquery","swiper"],function(Handlebars,$,swiper){
   $.ajax({
   	  url:"data/data.json",
   	  success:function(data){
       var theTemplateScript = $("#ff").html();  
      var theTemplate = Handlebars.compile(theTemplateScript);  
      $('.zz').html(theTemplate(data));

        
   	  }
   })
    $(function(){
            var mySwiper = new Swiper('.swiper-container', {
                onTransitionEnd: function(swiper){
                    $('li').eq(mySwiper.activeIndex).addClass('on').siblings().removeClass('on');
                }
            })
            $('li').click(function(){
                $(this).addClass('on').siblings().removeClass('on');
                mySwiper.slideTo($(this).index(), 1000)
            });
        })   



})