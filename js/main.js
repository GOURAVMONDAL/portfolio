// isotope gallery

$('.grid').isotope({

})

$('.portfolio-filter').on('click','li',function(){
    var filterValue = $(this).attr('data-filter');
    $('.grid').isotope({filter:filterValue});
})

$('.portfolio-filter ul li').on('click',function() {
    $('.portfolio-filter ul li').removeClass('active');
    $(this).addClass('active');
})

$(document).ready(function(){
    $(document).scroll(function(){
        var scrolltop = $(this).scrollTop();
        if(scrolltop > 100){
            $('.cross-icon').css("transform","scale(0)")
        } else{
            $('.cross-icon').css("transform","scale(1)")
        }
    })
})