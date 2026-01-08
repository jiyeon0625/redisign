$(function(){
    //돋보기 클릭했을 때 검색창 옆으로 나오게

    $('.fa-magnifying-glass').click(function(){
        $('.search-box').toggleClass('on')
    })

   $('.fa-magnifying-glass').mouseenter(function(){
    $('.fa-magnifying-glass').addClass('on')
   })
   $('.fa-magnifying-glass').mouseleave(function(){
    $('.fa-magnifying-glass').removeClass('on')
   })


   $('.review .swiper-slide').click(function(){
    let i = $(this).index()
    $('.popup').show()
    $('.popup .pitem').hide()
    $('.popup .pitem').eq(i).fadeIn()
   })

   $('.popup').click(function(){
    $('.popup').hide()
   })

   
   $(window).scroll(function(){
    if($(window).scrollTop()>=200){
        $('.gotop').fadeIn()
    }else{
        $('.gotop').fadeOut()
    }
   })





   $('.gotop').click(function(e){
    e.preventDefault()
    $('html, body').animate({
        scrollTop : 0
    },700)
   })

})