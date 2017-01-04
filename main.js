$(function() {
    var $list = $('.list');    
    $list.find("tr").not('.accordion').hide();
    $list.find("tr").eq(0).show();
    $list.find(".accordion").click(function(){ 
        $(this).fadeTo("fast", 1) ;    
        $list.find('.accordion').not(this).siblings().fadeOut(500);
        $(this).siblings().fadeToggle(500);
        $(this).addClass('active');
        $list.find('.accordion').not(this).removeClass('active');
        $list.find('.accordion').not(this).css("opacity", 0.33);
            $list.find('.accordion').not(this).hover(function(){
                $(this).fadeTo("fast", 1);},
                function(){$(this).fadeTo("fast", 0.33);
            });
    });    
});